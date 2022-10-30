import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinearScaleIcon from "@mui/icons-material/LinearScale";

import { TweetInfo } from "../model/tweetInfo";
import Icon from "./Icon";
import Buttons from "./Buttons";
import { currentDateForSimple } from "../util/DateHelper";

const TweetSimple: FC<TweetInfo> = (props) => {
    return (
        <div>
            <h3>Simple</h3>
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
                                }}
                            >
                                <Stack direction="row" justifyContent="between" alignItems="center">
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
                                        @{props.id}
                                    </Typography>
                                    <span style={{ fontSize: 15 }}>・</span>
                                    <Typography sx={{ fontSize: 15 }} color="text.secondary">
                                        {currentDateForSimple()}
                                    </Typography>
                                </Stack>
                                <IconButton aria-label="liner-scale" size="small">
                                    <LinearScaleIcon fontSize="small" />
                                </IconButton>
                            </Box>

                            <Typography
                                sx={{ textAlign: "start", fontSize: 15, whiteSpace: "pre-line" }}
                            >
                                {props.content}
                            </Typography>
                        </Box>
                    </Box>
                    <Buttons />
                </CardContent>
            </Card>
        </div>
    );
};

export default TweetSimple;
