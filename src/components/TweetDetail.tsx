import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TweetInfo } from "../model/tweetInfo";

const TweetDetail: FC<TweetInfo> = (props) => {
    return (
        <div>
            <h3>Detail</h3>
            <Card variant="outlined">
                <CardContent sx={{ pb: 0, width: "900px" }}></CardContent>
            </Card>
        </div>
    );
};

export default TweetDetail;
