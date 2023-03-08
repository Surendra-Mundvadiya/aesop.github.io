import React from "react";
import { Divider, Link, Stack, Typography } from "@mui/material";
export default function Sustainability() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                Sustainability
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Typography variant="caption" sx={{ color: "white" }}>
                All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B
                Corporation.{" "}
                <Link href="#" sx={{ color: "white" }}>
                    Learn more
                </Link>
            </Typography>
        </Stack>
    );
}
