import React, { FC } from "react";
import Avatar from "@mui/material/Avatar";
import { TweetInfo } from "../model/tweetInfo";

const Icon: FC<TweetInfo> = (props) => {
    return (
        <div>
            <Avatar src={props.iconUrl} sx={{ width: 50, height: 50 }} />
        </div>
    );
};

export default Icon;
