import { Stack, Checkbox, IconButton, Link, TextField, Typography } from "@mui/material";
import React, { useReducer, useState } from "react";

const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const reducer = (state, action) => {
    if (email_regex.test(action)) {
        return { value: action, error: false, msg: "" };
    } else {
        return { value: action, error: true, msg: "Please enter valid email address" };
    }
};
export default function Email() {
    const initial_state = { value: "", error: false, msg: "" };
    const [state, dispatch] = useReducer(reducer, initial_state);
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        dispatch(e.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        console.log(state);
    };
    const handleSwitchChange = () => {
        setPolicyAccepted((prev) => !prev);
    };
    const style = {
        "& > div > input": {
            padding: "4px 6px",
            borderWidth: "2px",
        },
    };

    return (
        <Stack sx={{ width: "100%", gap: 2 }}>
            <Stack sx={{ position: "relative", width: "100%" }}>
                <TextField
                    placeholder="Email address"
                    required
                    value={state.value}
                    variant="outlined"
                    id="validation-email-input"
                    type={"email"}
                    onChange={handleChange}
                    sx={style}
                    error={state.error}
                    helperText={state.msg}
                />
                <IconButton sx={{ position: "absolute", top: 0, right: 2, p: 0, pr: 1, borderRadius: 0 }} onClick={handleClick}>
                    &#8594;
                </IconButton>
            </Stack>
            <Stack
                sx={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                }}
            >
                <Checkbox sx={{ pl: 0, color: "white !important" }} disableRipple checked={policyAccepted} onChange={handleSwitchChange} />
                <Typography component={"span"} color="white" variant="caption">
                    Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our{" "}
                    <Link href="#" sx={{ color: "white", textDecoration: "underline" }} variant="subtitle2">
                        privacy policy
                    </Link>
                    <Typography
                        component={"span"}
                        sx={{
                            color: "white",
                            display: "inline-block",
                            transform: "rotate(-45deg)",
                        }}
                    >
                        &#8594;
                    </Typography>
                </Typography>
            </Stack>
            {!policyAccepted && (
                <Typography component={"span"} color="red" variant="caption">
                    Please accept the privacy policy before proceeding
                </Typography>
            )}
        </Stack>
    );
}
