import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import palette from "./palette";
import componentsOverride from "../overrides";

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default function ThemeProvider(props) {
    const { children } = props;
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 2 },
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
