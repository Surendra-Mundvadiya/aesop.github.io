import { Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function OrdersandSupport() {
    return (
        <Stack sx={{ width: "100%", gap: 1 }}>
            <Typography variant="caption" color={"white"}>
                Orders and Support
            </Typography>
            <Divider sx={{ borderColor: "white" }} />
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Contact us{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                FAQs
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
                Shipping
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
                Returns
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
                Order history{" "}
            </Link>
            <Link href="#" sx={{ textDecoration: "none", color: "white" }} variant="caption">
                Terms and conditions
            </Link>
        </Stack>
    );
}
