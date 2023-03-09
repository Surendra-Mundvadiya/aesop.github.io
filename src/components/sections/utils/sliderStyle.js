import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        bodyBox1: {
            height: "90%",
            width: "30%",
            gap: theme.spacing(2),
        },
        bodyBox: {
            height: "90%",
            width: "30%",
            gap: theme.spacing(2),
            alignItems: "center",
        },
        imagebox: {
            height: "80%",
            justifyContent: "center",
        },
        slider: {
            height: "10%",
            position: "absolute",
            bottom: theme.spacing(1),
            width: "90%",
        },
        path: {
            height: "6px",
            borderRadius: "10px",
            backgroundColor: theme.palette.primary.lighter,
            position: "relative",
        },
        thumb: {
            height: "6px",
            borderRadius: "10px",
            position: "absolute",
            backgroundColor: theme.palette.primary.darker,
        },
        link: {
            textDecoration: "none",
            "&:hover": {
                textDecoration: "revert",
            },
        },
    };
});
export default useStyles;
