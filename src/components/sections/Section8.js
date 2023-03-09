import React, { useState, useEffect, useMemo } from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import a from "../../assets/section8slide/1.jpg";
import b from "../../assets/section8slide/2.jpg";
import c from "../../assets/section8slide/3.webp";
import { useTheme } from "@mui/styles";

export default function Section8() {
    const theme = useTheme();
    const [imageIndex, setImageIndex] = useState(0);
    const images = useMemo(() => [a, b, c], []);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((index) => (index + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images]);

    const handleClick = () => {
        setImageIndex((index) => (index + 1) % images.length);
    };
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
                <Typography variant="h4">Store locator</Typography>
                <Typography variant="subtitle1">Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</Typography>
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
                    <span>Find a nearby store</span>
                    <span>&#8594;</span>
                </Button>
            </Stack>

            <Stack
                sx={{ width: "60%", height: "100%", gap: 2, position: "relative" }}
                onMouseOver={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <Avatar src={images[imageIndex]} />
                {visible && (
                    <>
                        <Button
                            sx={{
                                height: "80px",
                                width: "60px",
                                position: "absolute",
                                top: "40%",
                                left: 0,
                                backgroundColor: "black !important",
                                color: theme.palette.common.white,
                            }}
                            onClick={handleClick}
                        >
                            &#8826;
                        </Button>
                        <Button
                            sx={{
                                height: "80px",
                                width: "60px",
                                position: "absolute",
                                top: "40%",
                                right: 0,
                                backgroundColor: "black !important",
                                color: theme.palette.common.white,
                            }}
                            onClick={handleClick}
                        >
                            &#8827;
                        </Button>
                    </>
                )}
                <Stack sx={{ width: "100%" }}>
                    <Stack
                        sx={{
                            width: "100%",
                            background: theme.palette.primary.lighter,
                            height: "4px",
                            borderRadius: "10px",
                            mt: 1,
                            position: "relative",
                        }}
                    >
                        <Stack
                            sx={{
                                width: "33.34%",
                                backgroundColor: theme.palette.primary.darker,
                                height: "4px",
                                position: "absolute",
                                borderRadius: "10px",
                                top: 0,
                                left: `${imageIndex * 33.33}%`,
                                transition: "left 0.4s ease-in-out",
                            }}
                        ></Stack>
                    </Stack>
                </Stack>
                <Typography variant="subtitle1">Aesop Harbour City</Typography>
            </Stack>
        </Stack>
    );
}
