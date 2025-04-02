import React, { useEffect, useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import darth from './assets/icons8-darth-vader.svg'

const ClickableModal = ({ open, onClose, onModelSelect }) => {
    const handleClick = (model) => {
      if (onModelSelect) {
        onModelSelect(model);
      }
      onClose();
    };


  return (
    <Modal  open={open} onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          onClose();
        }
      }}>
    <Box
      sx={{
        position: "absolute",
        top: "52%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 420,
        bgcolor: "background.paper",
        boxShadow: 24,
        border: "none",
        borderRadius: 2,
        overflow: "hidden",
        outline: "none",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          bgcolor: "#ddd",
          p: 2,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          fontWeight: "bold",
        }}
      >
        Pick a MODEL
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            flex: 1,
            p: 3,
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#c0c0c0" },
          }}
          onClick={() => handleClick("pytorch")}
        >
          <Typography variant="h6">
            Pytorch
            <FlashlightOnIcon sx={{ marginLeft: "0.5em" }} />
          </Typography>
        </Box>
        
        <Box
          sx={{
            flex: 1,
            p: 3,
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#c0c0c0" },
          }}
          onClick={() => handleClick("vader")}
          >
          <Typography variant="h6">
            Vader
            <img
              src={darth}
              width="25"
              height="25"
              style={{ marginLeft: "0.5em" }}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  </Modal>
  );
};

export default function App({ onModelSelect }) {

  const [open, setOpen] = useState(true);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [open]);

  return <ClickableModal open={open} onClose={() => setOpen(false)} onModelSelect={onModelSelect}/>;
}
