import React, { ChangeEvent, FC, useState } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import TweetImage from "./TweetImage";
import { styled, Box, Stack } from "@mui/system";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TweetInfo } from "../model/tweetInfo";

const MainPage: FC = () => {
    const [tweetInfo, setTweetInfo] = useState<TweetInfo>({
        name: "",
        id: "",
        content: "",
        iconUrl: "",
    });

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setTweetInfo({ ...tweetInfo, [name]: value });
        console.log(tweetInfo);
    };

    // For select event
    const handleIconChange = (event: SelectChangeEvent): void => {
        const { name, value } = event.target;
        setTweetInfo({ ...tweetInfo, [name]: value });
        console.log(tweetInfo);
    };

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
                <TextArea handleTextChange={handleTextChange} handleIconChange={handleIconChange} />
                <TweetImage {...tweetInfo} />
            </Box>
        </div>
    );
};

export default MainPage;
