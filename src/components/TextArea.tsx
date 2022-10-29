import React, { ChangeEvent, FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { iconImageUrl } from "../data/iconImageUrl";
import Icon from "./Icon";
import { TweetInfo } from "../model/tweetInfo";

const TextArea: FC<{
    handleTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleIconChange: (event: SelectChangeEvent) => void;
    props: TweetInfo;
}> = ({ handleTextChange, handleIconChange, props }) => {
    const defaultString = "";
    const IconUrl = props;

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
                    name="name"
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleTextChange}
                    defaultValue={defaultString}
                />
                <TextField
                    id="ID"
                    label="ID"
                    variant="outlined"
                    name="id"
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleTextChange}
                    defaultValue={defaultString}
                />
                <TextField
                    id="Tweet Content"
                    label="Tweet Content"
                    variant="outlined"
                    name="content"
                    multiline
                    rows={4}
                    sx={{ mx: 1, width: "90%" }}
                    onChange={handleTextChange}
                    defaultValue={defaultString}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "between",
                    }}
                >
                    <FormControl sx={{ mx: 1, width: "850px" }}>
                        <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            name="iconUrl"
                            onChange={handleIconChange}
                            defaultValue={defaultString}
                        >
                            <MenuItem value={iconImageUrl.Twitter}>Twitter</MenuItem>
                            <MenuItem value={iconImageUrl.Recursion}>Recursion</MenuItem>
                            <MenuItem value={iconImageUrl.Original}>Original</MenuItem>
                        </Select>
                    </FormControl>
                    <Icon {...props} />
                </Box>
                <Button variant="contained">Create Tweet</Button>
            </Box>
        </div>
    );
};

export default TextArea;
