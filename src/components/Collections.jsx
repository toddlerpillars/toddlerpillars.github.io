import React, { useEffect, useState, useContext } from "react";
import Web3Ctx from "./Context/Web3Ctx";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Zoom } from "zoom-next";

import { useSaleContract, useZoomContract } from "../hooks/useContract";
import { getTokensUri } from "../utils";
import { SpinnerDotted } from "spinners-react";

import Divider from "./common/Divider";
import FullscreenModal from "./common/FullscreenModal";


import axios from "axios";

import Card from './Card.jsx'

// import tp1 from "../assets/images/carousel/tp01.jpg";
// import tp2 from "../assets/images/carousel/tp13.jpg";
// import tp3 from "../assets/images/carousel/tp11.jpg";
// import tp4 from "../assets/images/carousel/tp04.jpg";

const BP1 = "@media (max-width: 899px)";
const BP2 = "@media (max-width: 719px)";

const COLOR_CYAN = "#19A8B4";

const sx = {
    root: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,1)',
        py: '44px',
        position: 'relative',
        transition: 'all .3s',
        [BP1]: {
            px: '85px',
        },
        [BP2]: {
            px: '25px',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'top',
        textAlign: 'center',
        gap: '0 25px',
        mb: 4,
    },
    connectBtn: {
        fontSize: 16,
        minWidth: '150px',
        height: '40px',
        margin: 'auto',
        backgroundColor: '#fff',
        color: COLOR_CYAN,
        borderRadius: '22px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'roboto-bold',
        transition: 'all .3s',
        textTransform: 'unset',
        '&:focus': {
            backgroundColor: COLOR_CYAN,
            color: '#fff',
            outlineColor: '#000',
            opacity: 0.8,
        },
        '&:disabled': {
            backgroundColor: 'primary.main',
            cursor: 'not-allowed',
            opacity: 0.5,
        },
        '&:hover': {
            backgroundColor: COLOR_CYAN,
            color: '#fff',
            borderColor: COLOR_CYAN,
        },
        '&:active': {
            outlineColor: 'unset',
        },
    },
};

const Collections = () => {
  const { handleConnect, address } = useContext(Web3Ctx);
  const [loading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState(null);


  const [metadata, setMetadata] = useState([]);

  const saleContract = useSaleContract();
  const zoomContract = useZoomContract();

  useEffect(() => {
    if (address) {
      getTokens();
    }
  }, [address]);

  useEffect(() => {
    if (!isOpen) {
      setFullscreenSrc(null);
    }
  }, [isOpen]);

  const getTokens = async () => {
    setLoading(true);

    const tokens = await saleContract.balanceOf(address);

    if (tokens > 0) {
      const ids = await zoomGetTokenIds(saleContract, address, tokens);
      if (ids.length > 0) {
        const metadataList = await getTokensUri(ids, saleContract);
        setMetadata(metadataList);
      }
    } else {
      setMetadata([]);
    }

    setLoading(false);
  };

  const zoomGetTokenIds = async (contract, ownerAddress, numberOfTokens) => {
    const ZoomLibraryInstance = new Zoom();
    const tokenIds = [];
    const item_identifiers = [];
    let callNum = 0;

    for (let i = 0; i < numberOfTokens; i++) {
      // request the token ID
      const tokenIdCall = ZoomLibraryInstance.addCall(
        // the contract we're calling
        contract,
        // the method that is returing our ID
        ["tokenOfOwnerByIndex", [ownerAddress, i]],
        // signature used to decode the result
        "tokenOfOwnerByIndex(address,uint256) returns (uint256)"
        // array of next method calls that will use the result of this current call
      );
      item_identifiers.push(tokenIdCall);
      callNum++;
    }

    // Prepare the binary call
    const ZoomQueryBinary = ZoomLibraryInstance.getZoomCall();
    console.time(`zoomCall_TokenIds_${contract.address}`);
    const combinedResult = await zoomContract.combine(ZoomQueryBinary);
    console.timeEnd(`zoomCall_TokenIds_${contract.address}`);
    ZoomLibraryInstance.resultsToCache(combinedResult, ZoomQueryBinary);

    for (let i = 0; i < callNum; i++) {
      let tokenId = ZoomLibraryInstance.decodeCall(
        item_identifiers[i]
      ).toString();
      tokenIds.push(tokenId);
    }
    return tokenIds;
  };

  const setFullscreen = (e) => {
    console.log(e);
    setOpen(true);
    setFullscreenSrc(e.target.src);
  };

  return (
    <Box sx={sx.root}>
      <Box sx={sx.content}>
        <Typography variant="heading1" sx={sx.title}>
          My Collection
        </Typography>
        <Divider titleDivider />
        <Typography variant="text" sx={{ mt: 4 }}>
          Download your high resolution 6300 x 6300 pixel Toddlerpillars, to which you have full commercial rights.
        </Typography>

        {!address && (
          <Box>
            <Typography variant="text" sx={{ my: 4 }}>
              Connect your wallet to see your bebehs.
            </Typography>
            <Button
              variant="outlined"
              sx={sx.connectBtn}
              onClick={handleConnect}
            >
              Connect Wallet
            </Button>
          </Box>
        )}
      </Box>

      {loading && (
        <Box sx={{ textAlign: "center" }}>
          <SpinnerDotted color="#19A8B4" />
        </Box>
      )}

      {address && (
        <Grid container spacing={5} sx={{ my: 3 }}>
          {metadata.map((metadata) => {
            return (
                <Card
                    setFullscreenSource={setFullscreen}
                    metadata={metadata}
                />
            );
          })}
        </Grid>
      )}

      <FullscreenModal
        setOpen={setOpen}
        isOpen={isOpen}
        imgSrc={fullscreenSrc}
      />
    </Box>
  );
};

export default Collections;
