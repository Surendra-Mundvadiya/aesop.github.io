// ----------------------------------------------------------------------

export default function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: theme.palette.primary.main,
                },
            },
        },
    };
}
