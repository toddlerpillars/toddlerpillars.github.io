import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";
import NumericInput from "../../common/NumericInput";
import ethIcon from "../../../assets/images/eth-black.svg";

const COLOR_CYAN = "#19A8B4";

const sx = {
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "458px",
    width: "100%",
    margin: "auto",
    mb: 3,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    mb: 3,
  },
  text: {
    fontFamily: "roboto-bold",
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 12,
    alignSelf: "center",
  },
  span: {
    textTransform: "none",
    fontWeight: 500,
    fontSize: 12,
    opacity: 0.5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderBottom: 1,
    minHeight: "30px",
    borderColor: "rgba(0,0,0,0.2)",
    justifyContent: "space-between",
  },
  img: {
    height: "12px",
    alignSelf: "center",
    marginRight: "3px",
    marginBottom: "2px",
  },
  mintBtn: {
    fontSize: 16,
    minWidth: "150px",
    height: "40px",
    color: "#fff",
    backgroundColor: "primary.main",
    borderRadius: "22px",
    cursor: "pointer",
    display: "flex",
    margin: "auto",
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
  },
};
const MintQuantity = ({ title, price, maxAmount, onClickMint }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice((price * quantity).toFixed(2));
  }, [quantity]);

  const onNumberInput = (val) => {
    setQuantity(val);
  };

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.title}>{title}</Typography>
      <Box sx={sx.row}>
        <Typography sx={sx.text} variant="text">
          Quantity{" "}
          <Typography sx={sx.span} component="span">
            ({maxAmount} max)
          </Typography>
        </Typography>
        <Typography sx={sx.text} variant="text">
          Price
        </Typography>
      </Box>

      <Box sx={{ ...sx.row, mb: 4 }}>
        <Typography sx={sx.text} variant="text">
          <NumericInput
            value={maxAmount}
            max={maxAmount}
            min={0}
            onChange={onNumberInput}
          />
        </Typography>
        <Box display="flex">
          <img src={ethIcon} style={sx.img} alt="Eth" />
          <Typography sx={{ ...sx.text, fontSize: 16 }} variant="text">
            {totalPrice}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={sx.mintBtn}
        onClick={() => onClickMint(quantity, totalPrice)}
        disabled={quantity == 0}
      >
        Mint
      </Button>
    </Box>
  );
};

/* eslint-disable react/forbid-prop-types */
MintQuantity.propTypes = {
  title: PropTypes.string.isRequired,
  maxAmount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onClickMint: PropTypes.any.isRequired,
};

export default MintQuantity;
