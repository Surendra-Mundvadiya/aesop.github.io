import React from "react";
import { Box, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Email from "./utils/Email";
import OrdersandSupport from "./utils/OrdersandSupport";
import About from "./utils/About";
import LocationPreferences from "./utils/LocationPreferences";
import Services from "./utils/Services";
import Sustainability from "./utils/Sustainability";
import SocialMedia from "./utils/SocialMedia";

export default function Footer() {
    const theme = useTheme();
    const style = useStyles(theme);
    return (
        <Stack
            sx={{
                height: "100vh",
                width: "100%",
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Box className={style.body}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Email />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2.33}>
                        <OrdersandSupport />
                    </Grid>
                    <Grid item xs={12} sm={8} md={3} lg={2.33}>
                        <Services />
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={2.33}>
                        <LocationPreferences />
                    </Grid>
                    <Grid item xs={12} sm={8} md={3} lg={4}>
                        <Sustainability />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2.33}>
                        <About />
                    </Grid>
                    <Grid item xs={12} sm={0} md={0} lg={2.33}>
                        <SocialMedia />
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ borderWidth: "2px", borderColor: "white" }} />
            <Stack className={style.bottomLine}>
                <Typography variant="h6" color="white" my="auto">
                    Aesop
                </Typography>
            </Stack>
        </Stack>
    );
}
const useStyles = makeStyles((theme) => ({
    body: {
        height: "90vh",
        width: "100%",
        padding: theme.spacing(4),
    },
    bottomLine: {
        height: "10vh",
        paddingLeft: theme.spacing(4),
    },
}));
