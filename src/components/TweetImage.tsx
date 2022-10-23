import React, { FC } from "react";
import TweetDetail from "./TweetDetail";
import TweetSimple from "./TweetSimple";

const TweetImage: FC = () => {
    return (
        <div>
            <h3>Tweet Image(After push button)</h3>
            <TweetSimple />
            <TweetDetail />
        </div>
    );
};

export default TweetImage;
