import React, { FC } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import TweetImage from "./TweetImage";

const MainPage: FC = () => {
    return (
        <div>
            <Header />
            <TextArea />
            <TweetImage />
        </div>
    );
};

export default MainPage;
