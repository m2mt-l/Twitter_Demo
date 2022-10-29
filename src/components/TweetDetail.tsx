import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import Divider from "@mui/material/Divider";

import { TweetInfo } from "../model/tweetInfo";
import Icon from "./Icon";
import Buttons from "./Buttons";

const TweetDetail: FC<TweetInfo> = (props) => {
    return (
        <div>
            <h3>Detail</h3>
            <Card variant="outlined">
                <CardContent sx={{ pb: 0, width: "900px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                        }}
                    >
                        <Icon {...props} />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "90%",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Stack direction="column">
                                        <Typography
                                            sx={{ fontSize: 15, fontWeight: "bold", mr: 1 }}
                                            component="div"
                                        >
                                            {props.name}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 15, textAlign: "start" }}
                                            color="text.secondary"
                                        >
                                            {props.id}
                                        </Typography>
                                    </Stack>
                                </Box>
                                <IconButton aria-label="liner-scale" size="small">
                                    <LinearScaleIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "start",
                            fontSize: 23,
                            my: 1.5,
                            whiteSpace: "pre-line",
                        }}
                    >
                        {props.content}
                    </Typography>
                    <Typography
                        sx={{ textAlign: "start", fontSize: 15, mb: 1 }}
                        color="text.secondary"
                    >
                        Date・Twitter Web App
                    </Typography>
                    <Divider />
                    <Stack direction="row" justifyContent="start" sx={{ py: 1 }}>
                        <Typography sx={{ fontSize: 14, fontWeight: "bold", mr: 1 }}>
                            118.3K
                        </Typography>
                        <Typography sx={{ fontSize: 14, mr: 1 }} color="text.secondary">
                            Retweet
                        </Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: "bold", mr: 1 }}>
                            127.8K
                        </Typography>
                        <Typography sx={{ fontSize: 14, mr: 1 }} color="text.secondary">
                            Quote Tweets
                        </Typography>
                        <Typography sx={{ fontSize: 14, fontWeight: "bold", mr: 1 }}>
                            1.3M
                        </Typography>
                        <Typography sx={{ fontSize: 14, mr: 1 }} color="text.secondary">
                            Likes
                        </Typography>
                    </Stack>
                    <Divider />
                    <Buttons />
                </CardContent>
            </Card>
        </div>
    );
};

export default TweetDetail;
