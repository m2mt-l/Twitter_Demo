import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Buttons: FC = () => {
    return (
        <Stack direction="row" justifyContent="space-around" sx={{ my: 1 }}>
            <IconButton aria-label="reply" size="small">
                <ChatBubbleOutlineIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="retweet" size="small">
                <LoopIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="favorite" size="small">
                <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="file-upload" size="small">
                <FileUploadIcon fontSize="small" />
            </IconButton>
        </Stack>
    );
};

export default Buttons;
