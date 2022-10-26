import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TweetInfo } from "../model/tweetInfo";
import { iconImageUrl } from "../data/iconImageUrl";

const TextArea: FC = () => {
    const [tweetInfo, setTweetInfo] = useState<TweetInfo>({
        name: "",
        id: "",
        content: "",
        icon: iconImageUrl,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        console.log(value);
        setTweetInfo({ ...tweetInfo, [name]: value });
    };

    return (
        <div>
            <h3>Create Tweet</h3>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "1000px",
                    height: "400px",
                    gap: 2,
                    p: 2,
                    border: 2,
                    borderColor: "grey.500",
                }}
            >
                <TextField
                    id="Name"
                    label="Name"
                    variant="outlined"
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleChange}
                    defaultValue={tweetInfo.name}
                />
                <TextField
                    id="ID"
                    label="ID"
                    variant="outlined"
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleChange}
                    defaultValue={tweetInfo.id}
                />
                <TextField
                    id="Tweet Content"
                    label="Tweet Content"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleChange}
                    defaultValue={tweetInfo.content}
                />
                <FormControl sx={{ mx: 1, width: "90%" }}>
                    <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        defaultValue={tweetInfo.icon.Twitter}
                    >
                        <MenuItem value="Twitter">Twitter</MenuItem>
                        <MenuItem value="Recursion">Recursion</MenuItem>
                        <MenuItem value="Original">Original</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained">Create Tweet</Button>
            </Box>
        </div>
    );
};

export default TextArea;
