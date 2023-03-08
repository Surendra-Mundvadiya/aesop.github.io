import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import bg from "../../assets/section1home.jpg";
export default function Section1() {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                position: "relative",
                height: "100vh",
                width: "100%",
                "& .MuiTypography-root": {
                    color: "white",
                },
            }}
        >
            <Stack
                sx={{ position: "absolute", width: "50%", zIndex: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", height: "60%" }}
            >
                <Stack sx={{ width: "40%", mt: theme.spacing(10) }}>
                    <Typography variant="h4" mx="auto">
                        Aesop <sub style={{ fontSize: "0.6rem" }}>&#174;</sub>
                    </Typography>
                </Stack>
                <Stack sx={{ width: "58%", mt: theme.spacing(12), gap: 2 }}>
                    <Typography variant="subtitle2">Home fragrance</Typography>
                    <Typography variant="h4">Introducing Aromatique Incense</Typography>
                    <Typography variant="subtitle2">
                        Discover a trio of transportive aromas for wandering minds—Murasaki, Kagerou and Sarashina Aromatique Incense—and the Bronze Incense
                        Holder that elevates their unassuming form.
                    </Typography>
                    <Button
                        sx={{
                            width: theme.spacing(40),
                            p: "0.6rem 0.8rem",
                            color: "white",
                            border: "1px solid white",
                            textTransform: "none",
                            justifyContent: "space-between",
                            transition: "background-color 1s",
                            ":hover": {
                                color: "black",
                                backgroundColor: "white",
                            },
                        }}
                    >
                        <span> Explore the collection</span>
                        <span>&#8594;</span>
                    </Button>
                </Stack>
            </Stack>
            <Avatar src={bg} />
        </Stack>
    );
}
