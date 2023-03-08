import React from "react";
import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import bg from "../../assets/section3home.jpg";
export default function Section3() {
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
            <Stack sx={{ width: "60%" }}>
                <Avatar src={bg} sx={{ width: "100%" }} />
            </Stack>
            <Stack sx={{ width: "40%", gap: 2, px: theme.spacing(10) }}>
                {/* <Typography variant="subtitle2">Home fragrance</Typography> */}
                <Typography variant="h4">Interior fragrances to lift the mood</Typography>
                <Typography variant="subtitle1">
                    Interior fragrances to lift the mood Ideal for home or office spaces in need of refreshment, our Home range comprises a number of fragrant
                    preparations, from incense to room sprays.
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
                    <span> Browse Sented Home</span>
                    <span>&#8594;</span>
                </Button>
            </Stack>
        </Stack>
    );
}
