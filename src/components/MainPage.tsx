import React, { FC } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import TweetImage from "./TweetImage";
import { styled, Box, Stack } from "@mui/system";

const MainPage: FC = () => {
    return (
        <div>
            <Box
                sx={{
                    mt: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80%",
                }}
            >
                <Header />
                <TextArea />
                <TweetImage />
            </Box>
        </div>
    );
};

export default MainPage;
