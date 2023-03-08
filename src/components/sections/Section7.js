import React from "react";
import { Avatar, Button, Stack, Typography, useTheme } from "@mui/material";
import bg from "../../assets/section7home.jpg";
export default function Section7() {
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
                <Typography variant="subtitle2">Tokens of appreciation</Typography>
                <Typography variant="h4">Corporate gifts</Typography>
                <Typography variant="subtitle1">
                    Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide
                    your selections and assist with delivery.
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
                    <span>Learn more about this service</span>
                    <span>&#8594;</span>
                </Button>
            </Stack>
        </Stack>
    );
}
