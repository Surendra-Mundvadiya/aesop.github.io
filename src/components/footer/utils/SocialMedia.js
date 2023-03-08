import React from "react";
import { Divider, Stack, Typography, Link } from "@mui/material";
export default function SocialMedia() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                Social Media
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Instagram
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
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Twitter
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
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                LinkedIn
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
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                WeChat
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Weibo
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
            </Link>
        </Stack>
    );
}
