import React from "react";
import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import bg from "../../assets/section5_home.webp";
export default function Section5() {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                py: theme.spacing(15),
            }}
        >
            <Stack sx={{ width: "40%", gap: 2, px: theme.spacing(10) }}>
                <Typography variant="subtitle2">The Athenaeum</Typography>
                <Typography variant="h4">Aesop on Vitamins</Typography>
                <Typography variant="subtitle1">
                    Among those we often return to in our formulations are a range of ingredients known to benefit the skin—vitamins C, B3, E and Provitamin B5.
                </Typography>
                <Button
                    sx={{
                        width: theme.spacing(40),
                        p: "0.6rem 0.8rem",
                        mt: "0.6rem",
                        color: "black",
                        border: "1px solid grey",
                        textTransform: "none",
                        justifyContent: "space-between",
                        transition: "background-color 1s",
                        ":hover": {
                            color: "white",
                            backgroundColor: "black",
                        },
                    }}
                >
                    <span>Discover Vitamins</span>
                    <span>&#8594;</span>
                </Button>
            </Stack>
            <Stack sx={{ width: "60%" }}>
                <Avatar src={bg} sx={{ width: "100%" }} />
            </Stack>
        </Stack>
    );
}
