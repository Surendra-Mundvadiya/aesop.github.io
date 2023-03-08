import { Divider, Stack, Typography, Link } from "@mui/material";
import React from "react";

export default function Services() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                Services
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Live assistance{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Corporate gifts{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Facial appointments{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Click and Collect{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Video consultation
            </Link>
        </Stack>
    );
}
