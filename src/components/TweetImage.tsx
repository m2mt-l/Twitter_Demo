import React, { FC } from "react";
import TweetDetail from "./TweetDetail";
import TweetSimple from "./TweetSimple";
import Box from "@mui/material/Box";

const TweetImage: FC = () => {
    return (
        <div>
            <h3>Tweet Image(After push button)</h3>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "1000px",
                    p: 2,
                    border: 2,
                    borderColor: "grey.500",
                }}
            >
                <TweetSimple />
                <TweetDetail />
            </Box>
        </div>
    );
};

export default TweetImage;
