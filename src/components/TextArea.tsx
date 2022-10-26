import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TweetInfo } from "../model/tweetInfo";

const TextArea: FC = () => {
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
                <TextField id="Name" label="Name" variant="outlined" sx={{ mx: 1, width: "90%" }} />
                <TextField id="ID" label="ID" variant="outlined" sx={{ mx: 1, width: "90%" }} />
                <TextField
                    id="Tweet Content"
                    label="Tweet Content"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ mx: 1, width: "90%" }}
                />
                <FormControl sx={{ mx: 1, width: "90%" }}>
                    <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
                        <MenuItem value={10}>Twitter</MenuItem>
                        <MenuItem value={20}>Recursion</MenuItem>
                        <MenuItem value={30}>Original</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained">Create Tweet</Button>
            </Box>
        </div>
    );
};

export default TextArea;
