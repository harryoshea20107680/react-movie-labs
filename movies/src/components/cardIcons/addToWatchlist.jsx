import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWatchlistIcon = ({ movie }) => {
  const onAdd = (e) => {
    e.preventDefault();
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={onAdd}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;
