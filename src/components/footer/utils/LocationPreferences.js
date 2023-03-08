import React from "react";
import { Divider, Stack, Typography, Link } from "@mui/material";
export default function LocationPreferences() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                Location preferences
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Shipping:{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "underline", color: "white" }} variant="subtitle2">
                Hong Kong SAR, China{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Language:{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                繁體中文{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "underline", color: "white" }} variant="caption">
                English{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                简体中文
            </Link>
        </Stack>
    );
}
