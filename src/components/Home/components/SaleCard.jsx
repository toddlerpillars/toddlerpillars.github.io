import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Web3Ctx from "../../Context/Web3Ctx";
import { ethers } from "ethers";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { SpinnerDotted } from "spinners-react";
import { useHistory } from "react-router-dom";
import ethIcon from "../../../assets/images/eth.svg";

import {
  useSaleContract,
  useCommunityContract,
  useEcContract,
} from "../../../hooks/useContract";

import useInterval from "../../../hooks/useInterval";

import { sigs } from "../../../sig";

const BP1 = "@media (max-width: 1079px)";
const BP2 = "@media (max-width: 1480px) and (min-width:1199px)";
const BP4 = "@media (min-width: 999px)";

const COLOR_CYAN = "#19A8B4";
const COLOR_RED = "#F85353";

const baseBtn = {
  fontSize: 16,
  width: "100%",
  minWidth: "150px",
  height: "40px",
  backgroundColor: "primary.main",
  borderRadius: "22px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "roboto-bold",
  transition: "all .3s",
  textTransform: "unset",
  "&:focus": {
    outlineColor: COLOR_CYAN,
  },
  "&:disabled": {
    backgroundColor: "primary.main",
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

const sx = {
  root: {
    backgroundColor: "#F5FEFF",
    minHeight: 300,
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    width: "100%",
  },
  title: {
    [BP1]: {
      textAlign: "center",
    },
  },
  textLink: {
    cursor: "pointer",
    color: COLOR_CYAN,
  },
  roleContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    mb: 2,
    pr: 3,
    [BP2]: {
      justifyContent: "left",
    },
  },
  mintRole: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 700,
    pr: "10px",
    whiteSpace: "nowrap",
    [BP2]: {
      pr: 3,
      minWidth: "130px",
    },
  },
  mintRole2: {
    mr: 5,
    [BP2]: {
      // mr: 1,
    },
  },
  errorText: {
    fontSize: 14,
    fontWeight: 500,
    color: COLOR_RED,
  },
  saleText: {
    fontSize: 32,
    fontFamily: "roboto-bold",
    fontWeight: 900,
    color: COLOR_CYAN,
    lineHeight: 1.2,
  },
  saleSubText: {
    fontSize: 14,
    color: COLOR_CYAN,
    lineHeight: 1,
  },
  img: {
    height: "22px",
    alignSelf: "center",
    marginRight: "5px",
  },
  btnsContainer: {
    mt: 3,
    mb: 3,
  },
  mintBtn: {
    ...baseBtn,
  },
  connectBtn: {
    ...baseBtn,
    backgroundColor: "#fff",
    color: COLOR_CYAN,
    "&:hover": {
      backgroundColor: COLOR_CYAN,
      color: "#fff",
      borderColor: COLOR_CYAN,
    },
    "&:focus": {
      backgroundColor: COLOR_CYAN,
      color: "#fff",
      outlineColor: "#000",
      opacity: 0.8,
    },
    "&:active": {
      outlineColor: "unset",
    },
  },
};

const PRESALE_HEADER = "Toddlerpillars Presale";

const SALE_HEADER = "Toddlerpillars Main Sale";

const SALE_ENDED_HEADER = "Toddlerpillars Sale Ended";

const COMMUNITY_MINT_LIMIT = [8, 6, 2];

const EC_MINT_LIMIT = 6;

const CHECK_INTERVAL = 20000;

const TextLink = ({ onClick, children }) => {
  return (
    <Typography
      variant="text"
      component="span"
      sx={sx.textLink}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};

const SaleCard = ({ mintOnClick, setMainSaleStarted }) => {
  const { handleConnect, address, isCorrectNetwork } = useContext(Web3Ctx);

  const [checkInterval, setCheckInterval] = useState(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);
  const [userMinted, setUserMinted] = useState(0);
  const [maxToken, setMaxToken] = useState(0);
  const [ecMaxToken, setEcMaxToken] = useState(0);
  const [saleMaxToken, setSaleMaxToken] = useState(0);
  const [ecUserMinted, setEcUserMinted] = useState(0);
  const [sold, setSold] = useState(0);

  const [earlyActive, setEarlyActive] = useState(false);
  const [omniActive, setOmniActive] = useState(false);
  const [toddlerActive, setToddlerActive] = useState(false);

  const [presaleActive, setPresaleActive] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [saleActive, setSaleActive] = useState(false);
  const [saleEnded, setSaleEnded] = useState(false);

  const [price, setPrice] = useState(0);

  const [canMint, setCanMint] = useState(null);
  const [canMintEc, setCanMintEc] = useState(null);

  const [showErrorText, setShowErrorText] = useState(false);

  const [limitReached, setLimitReached] = useState(false);

  const history = useHistory();
  const ecContract = useEcContract();
  const saleContract = useSaleContract();
  const communityContract = useCommunityContract();

  useEffect(() => {
    init();
  }, []);

  useInterval(() => {
    console.log("refreshing");
    if (saleEnded) {
      console.log("end interval");
      setCheckInterval(null);
    } else {
      getTotalSupply()
      checkActive();
      checkAllInfo(address);
    }
  }, checkInterval);

  useEffect(() => {
    if (address) {
      const key = Object.keys(sigs).find(
        (key) => key.toLowerCase() == address.toLowerCase()
      );
      // console.log(key);
      setRole(sigs[key]);
    } else setRole(null);

    checkAllInfo(address);
  }, [address]);

  useEffect(() => {
    // console.log("canMint", canMint);
    // console.log("canMintEc", canMintEc);
    // When prepresale started and presale started
    if (canMint != null && canMintEc != null && address) {
      const communityFinish =
        canMint && userMinted >= COMMUNITY_MINT_LIMIT[role[1]];
      const ecFinish = canMintEc && ecUserMinted >= EC_MINT_LIMIT;
      if (communityFinish && ecFinish) {
        setLimitReached(true);
        setShowErrorText(false);
      } else {
        setShowErrorText(!(canMint || canMintEc));
        setLimitReached(false);
      }
    }
    // When prepresale started and b4 presale starts
    else if (canMint != null && canMintEc == null && address) {
      setShowErrorText(!(canMint || canMintEc));
    } else {
      // prepresale not started, set false
      setShowErrorText(false);
      setLimitReached(false);
    }
  }, [address, canMint, canMintEc, userMinted, ecUserMinted]);

  // OMNIPILLAR    = 0;
  // TODDLERPILLAR = 1;
  // Early access   = 2;
  useEffect(() => {
    if (!(omniActive || toddlerActive || earlyActive)) {
      setCanMint(null);
    } else if (role) {
      const userRole = role[1];
      if (userRole == 0 && omniActive) {
        setCanMint(true);
      } else if (userRole == 1 && toddlerActive) {
        setCanMint(true);
      } else if (userRole == 2 && earlyActive) {
        setCanMint(true);
      } else {
        setCanMint(false);
      }
    } else {
      setCanMint(false);
    }
  }, [role, earlyActive, omniActive, toddlerActive, userMinted]);

  useEffect(() => {
    if (presaleActive && address) {
      ecContract.balanceOf(address).then((length) => {
        console.log(Number(length));
        if (length > 0) {
          setCanMintEc(true);
        } else {
          setCanMintEc(false);
        }
      });
    }
  }, [presaleActive, address, ecUserMinted]);

  const init = async () => {
    setLoading(true);
    const promises = [];

    promises.push(
      new Promise(async (resolve) => {
        await getTotalSupply();
        resolve();
      })
    );

    promises.push(
      new Promise(async (resolve) => {
        await checkActive();
        resolve();
      })
    );

    // promises.push(
    //   new Promise(async (resolve) => {
    //     await checkAllInfo(address);
    //     resolve();
    //   })
    // );

    await Promise.all(promises).catch((e) => console.error(e));
    setLoading(false);
    console.log("init interval");
    if (!checkInterval) setCheckInterval(CHECK_INTERVAL);
  };

  const checkAllInfo = async (address) => {
    // if (address) setLoading(true);
    const info =
      saleContract &&
      (await saleContract.tellEverything(address || saleContract.address));
    // console.log(info);
    if (info) {
      setPrice(
        ethers.utils.commify(
          Number(ethers.utils.formatEther(info._fullPrice, 18))
        )
      );
      // setSold(Number(info._userMinted));
      setMaxToken(Number(info._maxSupply));
      setUserMinted(Number(info._communityMinted));

      setEcMaxToken(Number(info._discountedPerAddress));
      setEcUserMinted(Number(info._discountedClaimed));

      setSaleMaxToken(Number(info._maxPerSaleMint));

      let now = Date.parse(new Date()) / 1000;
      setMainSaleStarted(Math.floor(Number(info._saleStart)) - now < 0);
      // setSaleEnded(Math.floor(Number(info._saleEnd)) - now < 0);
      setSaleEnded(true);
      setPresaleStarted(Math.floor(Number(info._presaleStart)) - now < 0);
      setPresaleEnded(Math.floor(Number(info._presaleEnd)) - now < 0);

      // console.log("_maxSupply", Number(info._maxSupply));

      console.log("_communityMinted", Number(info._communityMinted));
      console.log("_userMinted", Number(info._userMinted));

      // console.log("_communityPrice", Number(info._communityPrice));

      console.log("_presaleActive", info._presaleActive);
      console.log("_saleActive", info._saleActive);

      console.log("_presaleStart", new Date(Number(info._presaleStart) * 1000));
      console.log("_presaleEnd", new Date(Number(info._presaleEnd) * 1000));
      console.log("_saleStart", new Date(Number(info._saleStart) * 1000));
      console.log("_saleEnd", new Date(Number(info._saleEnd) * 1000));

      // console.log("_discountPrice", Number(info._discountPrice));
      // console.log("_discountedClaimed", Number(info._discountedClaimed));
      // console.log("_discountedPerAddress", Number(info._discountedPerAddress));

      // // console.log("_dustMintActive", info._dustMintActive);
      // // console.log("_dustMintAvailable", info._dustMintAvailable);
      // // console.log("_dustPrice", Number(info._dustPrice));
      // // console.log("_freeClaimed", Number(info._freeClaimed));
      // // console.log("_freePerAddress", Number(info._freePerAddress));
      // // console.log("_fullPrice", Number(info._fullPrice));
      // // console.log("_maxDiscount", Number(info._maxDiscount));
      // // console.log("_maxSupply", Number(info._maxSupply));
      // // console.log("_maxUserMintable", Number(info._maxUserMintable));
      // console.log("_maxPerSaleMint", Number(info._maxPerSaleMint));
      // // console.log("_mintPointer", Number(info._mintPointer));
      // // console.log("_timedPresale", info._timedPresale);
      // // console.log("_timedSale", info._timedSale);
      // console.log("_totalDiscount", Number(info._totalDiscount));
      // console.log("_totalFreeEC", Number(info._totalFreeEC));
    }
    // if (address) setLoading(false);
  };

  const checkActive = async () => {
    if (communityContract) {
      communityContract
        .early_adopters_active()
        .then((active) => setEarlyActive(active));
      communityContract
        .omnipillars_active()
        .then((active) => setOmniActive(active));
      communityContract
        .toddlerpillars_active()
        .then((active) => setToddlerActive(active));
      saleContract
        .checkPresaleIsActive()
        .then((active) => setPresaleActive(active));
      saleContract.checkSaleIsActive().then((active) => setSaleActive(active));
    }
  };

  const getTotalSupply = async () => {
    if (saleContract) {
      const supply = await saleContract.totalSupply();
      // setSold(Number(supply));
      setSold(9999);
    }
  };

  const gotoRoadmap = () => {
    history.push("/roadmap#earlyMidSection");
  };

  const toddlerAndPresaleActive = !saleActive && !presaleEnded && !saleEnded;

  const communityActive =
    earlyActive || omniActive || toddlerActive || presaleActive;

  const omniToddlerActive = omniActive && toddlerActive && !earlyActive;

  const mainSaleActive = saleActive && !saleEnded;

  const disableMintBtn =
    !(canMint || canMintEc) || !isCorrectNetwork || limitReached || !address;

  return (
    <Card sx={sx.root}>
      {loading && (
        <Box display="flex" sx={{ justifyContent: "center" }}>
          <SpinnerDotted color={COLOR_CYAN} />
        </Box>
      )}
      {!loading && toddlerAndPresaleActive && (
        <CardContent sx={sx.cardContent}>
          <Typography variant="heading1" sx={sx.title}>
            {PRESALE_HEADER}
          </Typography>
          <Typography variant="text" sx={{ ...sx.text1, my: 2 }}>
            Connect your wallet and if you are part of the whitelist you will be
            able to mint Toddlerpillars. You can check the full set of
            conditions on our <TextLink onClick={gotoRoadmap}>Roadmap</TextLink>{" "}
            page.{" "}
            {communityActive
              ? "Presale is currently open for:"
              : <Typography component="span" color="red">Presale will start soon.</Typography>}
          </Typography>

          <Box
            sx={{
              ...sx.roleContainer,
              ...(omniToddlerActive && { justifyContent: "" }),
            }}
          >
            {omniActive && (
              <Typography
                component="span"
                sx={{ ...sx.mintRole, ...(omniToddlerActive && sx.mintRole2) }}
                gutterBottom
              >
                Omnipillars
              </Typography>
            )}
            {toddlerActive && (
              <Typography component="span" sx={sx.mintRole} gutterBottom>
                Toddlerpillars
              </Typography>
            )}
            {earlyActive && (
              <Typography component="span" sx={sx.mintRole} gutterBottom>
                Early Supporter
              </Typography>
            )}
            {presaleActive && (
              <Typography component="span" sx={sx.mintRole} gutterBottom>
                Ether Cards
              </Typography>
            )}
          </Box>

          <Box sx={sx.roleContainer}>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{maxToken}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Items
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{sold}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Sold
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Box display="flex">
                <img src={ethIcon} style={sx.img} alt="Eth" />
                <Typography sx={sx.saleText}>{price}</Typography>
              </Box>
              <Typography sx={{ ...sx.saleSubText, ml: 2 }} gutterBottom>
                Price
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} sx={sx.btnsContainer}>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={sx.mintBtn}
                onClick={() =>
                  mintOnClick({
                    canMintEc: canMintEc,
                    ecUserMinted: ecUserMinted,
                    ecMaxToken: ecMaxToken,
                    userMinted: userMinted,
                    price: price,
                    role: role,
                  })
                }
                disabled={disableMintBtn}
              >
                Mint NFT
              </Button>
            </Grid>
            <Grid item xs="auto">
              {!address && (
                <Button
                  variant="outlined"
                  sx={sx.connectBtn}
                  onClick={handleConnect}
                >
                  Connect Wallet
                </Button>
              )}
            </Grid>
          </Grid>
          {showErrorText && (
            <Typography sx={sx.errorText}>
              Sorry, your wallet address doesn’t have permission to mint yet,
              but don’t worry the public sale will start soon.
            </Typography>
          )}
          {limitReached && (
            <Typography sx={sx.errorText}>
              Sorry, your wallet address doesn’t have permission to mint more
              tokens in presale, but don’t worry, the public sale will start
              soon.
            </Typography>
          )}
        </CardContent>
      )}

      {!loading && mainSaleActive && (
        <CardContent sx={sx.cardContent}>
          <Typography variant="heading1" sx={sx.title}>
            {SALE_HEADER}
          </Typography>

          <Typography variant="text" sx={{ ...sx.text1, my: 2 }}>
            Connect your wallet and you will be able to mint Toddlerpillars.
          </Typography>

          <Box sx={sx.roleContainer}>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{maxToken}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Items
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{sold}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Sold
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Box display="flex">
                <img src={ethIcon} style={sx.img} alt="Eth" />
                <Typography sx={sx.saleText}>{price}</Typography>
              </Box>
              <Typography sx={{ ...sx.saleSubText, ml: 2 }} gutterBottom>
                Price
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} sx={sx.btnsContainer}>
            <Grid item xs="auto">
              <Button
                variant="contained"
                sx={sx.mintBtn}
                onClick={() =>
                  mintOnClick({
                    canMintSale: saleActive,
                    saleMaxToken: saleMaxToken,
                    price: price,
                  })
                }
                disabled={!address || !isCorrectNetwork}
              >
                Mint NFT
              </Button>
            </Grid>
            <Grid item xs="auto">
              {!address && (
                <Button
                  variant="outlined"
                  sx={sx.connectBtn}
                  onClick={handleConnect}
                >
                  Connect Wallet
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      )}

      {!loading && saleEnded && (
        <CardContent sx={sx.cardContent}>
          <Typography variant="heading1" sx={sx.title}>
            {SALE_ENDED_HEADER}
          </Typography>

          <Typography variant="text" sx={{ ...sx.text1, my: 2 }}>
            Sale has ended!
          </Typography>

          <Box sx={sx.roleContainer}>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{maxToken}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Items
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Typography sx={sx.saleText}>{sold}</Typography>
              <Typography sx={sx.saleSubText} gutterBottom>
                Sold
              </Typography>
            </Box>
            <Box component="span" sx={sx.mintRole} gutterBottom>
              <Box display="flex">
                <img src={ethIcon} style={sx.img} alt="Eth" />
                <Typography sx={sx.saleText}>{price}</Typography>
              </Box>
              <Typography sx={{ ...sx.saleSubText, ml: 2 }} gutterBottom>
                Price
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} sx={sx.btnsContainer}>
            <Grid item xs="auto">
              <Button variant="contained" sx={sx.mintBtn} disabled={true}>
                Sold Out
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      )}
    </Card>
  );
};

/* eslint-disable react/forbid-prop-types */
SaleCard.propTypes = {
  mintOnClick: PropTypes.any.isRequired,
  setMainSaleStarted: PropTypes.any.isRequired,
};

export default SaleCard;
