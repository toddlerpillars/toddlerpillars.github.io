import React from "react";

import { Box, Modal } from "@mui/material";

import close from "../../assets/images/close.svg";

const BP1 = "@media (max-width: 899px)";
const BP2 = "@media (max-width: 719px)";

const sx = {
  root: {
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
    py: "44px",
    px: "125px",
    position: "relative",
    pointerEvents: "none",
    transition: "all .3s",
    [BP1]: {
      px: "85px",
    },
    [BP2]: {
      px: "25px",
    },
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
  closeBtn: {
    position: "absolute",
    width: "32px",
    min: "32px",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    pointerEvents: "auto",
  },
};

const FullscreenModal = ({ isOpen, setOpen, imgSrc }) => {
  return (
    <Modal
      open={isOpen}
      onClose={(event, reason) => {
        // if (reason !== "backdropClick") {
        //   setOpen(false);
        // }
        setOpen(false);
      }}
    >
      <Box sx={sx.root}>
        {imgSrc && <Box sx={sx.img} component="img" src={imgSrc} />}

        <Box sx={sx.closeBtn} onClick={() => setOpen(false)}>
          <img src={close} style={{ width: "100%" }} alt="Close" />
        </Box>
      </Box>
    </Modal>
  );
};

export default FullscreenModal;
