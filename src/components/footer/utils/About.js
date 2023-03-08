import React from "react";
import { Divider, Stack, Typography, Link } from "@mui/material";
export default function About() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                About
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Our story{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Foundation{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Careers{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Privacy policy{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Accessibility{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Cookie Policy
            </Link>
        </Stack>
    );
}
