import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box, Divider, Drawer, Slide, useScrollTrigger, IconButton, List, Toolbar, useTheme, Link } from "@mui/material";
import { Menu, Search } from "@mui/icons-material";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
const drawerWidth = 240;

const navItemsL = ["Skin Care", "Body & Hand", "Hair", "Fragrance", "Home", "Kits & Travel", "Gifts", "Read", "Stores"];
const navItemsR = ["Log in", "Cabinet", "Cart"];

export default function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    console.log(theme);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
                {navItemsL.map((item, index) => (
                    <Link href="#" key={index + item} underline="none" variant="caption">
                        {item}
                    </Link>
                ))}
            </List>
            <List>
                {navItemsR.map((item, index) => (
                    <Link href="#" key={item + index} underline="none" variant="caption">
                        {item}
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const handleSearch = () => {};
    return (
        <>
            <HideOnScroll {...props}>
                <AppBar component="nav">
                    <Toolbar sx={{ minHeight: "80px !important" }}>
                        <IconButton onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                            <Menu />
                        </IconButton>

                        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
                            {navItemsL.map((item, index) => (
                                <Link href="#" key={index + item} underline="none" variant="caption">
                                    {item}
                                </Link>
                            ))}
                        </Box>
                        <IconButton
                            onClick={handleSearch}
                            sx={{ "& .MuiSvgIcon-root": { fill: theme.palette.primary.main, fontSize: theme.spacing(3) }, ml: 2 }}
                        >
                            <Search />
                        </IconButton>
                        <Box sx={{ display: { xs: "none", sm: "flex" }, ml: "auto", gap: 3 }}>
                            {navItemsR.map((item, index) => (
                                <Link href="#" key={item + index} underline="none" variant="caption">
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};
