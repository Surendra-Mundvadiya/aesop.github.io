import React, { useState, useMemo } from "react";
import { Avatar, Button, Link, Stack, Typography } from "@mui/material";
import a from "../../assets/section6slide/1.png";
import b from "../../assets/section6slide/2.webp";
import c from "../../assets/section6slide/3.png";
import d from "../../assets/section6slide/4.png";
import e from "../../assets/section6slide/5.webp";
import { useTheme } from "@mui/styles";
import useStyles from "./utils/sliderStyle";

export default function Section6() {
    const theme = useTheme();
    const style = useStyles(theme);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const data = useMemo(() => {
        return [
            <Stack className={style.bodyBox1}>
                <Typography variant="subtitle2">Skin Care+</Typography>
                <Typography variant="h5">Intensive formulations for complex skin</Typography>
                <Typography variant="subtitle1">
                    Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent
                    vitamins and anti-oxidants.
                </Typography>
                <Button
                    sx={{
                        width: theme.spacing(40),
                        p: "0.6rem 0.8rem",
                        mt: "0.6rem",
                        color: "black",
                        border: "1px solid grey",
                        textTransform: "none",
                        justifyContent: "space-between",
                        transition: "background-color 1s",
                        ":hover": {
                            color: "white",
                            backgroundColor: "black",
                        },
                    }}
                >
                    <span>Browse formulations </span>
                    <span>&#8594;</span>
                </Button>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Avatar src={a} />
                </Stack>
                <Link href="#" className={style.link}>
                    Lucent Facial Concentrate{" "}
                </Link>
                <Typography>A Vitamin C-rich layering serum</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={b} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    B Triple C Facial Balancing Gel
                </Link>
                <Typography>Embracing, vitamin-rich hydration</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={c} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Exalted Eye Serum{" "}
                </Link>
                <Typography>Lightweight, vitamin-rich serum</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={d} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Sublime Replenishing Night Masque
                </Link>
                <Typography>Richly nourishing hydration for overnight use</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={e} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Damascan Rose Facial Treatment{" "}
                </Link>
                <Typography>A blend of vitamin-rich botanical extracts Damascan Rose Facial Treatment in amber bottle.</Typography>
            </Stack>,
        ].slice(index, index + 3);
    }, [index]);

    const handleClickI = () => {
        if (index < 3) {
            setIndex((prev) => prev + 1);
        }
    };
    const handleClickD = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };
    return (
        <Stack
            sx={{
                height: "100vh",
                width: "100%",
                py: theme.spacing(10),
                px: theme.spacing(8),
                position: "relative",
                gap: 1,
                flexDirection: "row",
                justifyContent: "space-around",
            }}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {visible && (
                <>
                    {index > 0 && (
                        <Button
                            sx={{
                                height: "80px",
                                width: "60px",
                                position: "absolute",
                                top: "40%",
                                left: 0,
                                backgroundColor: "black !important",
                                color: theme.palette.common.white,
                            }}
                            onClick={handleClickD}
                        >
                            &#8826;
                        </Button>
                    )}
                    {index < 3 && (
                        <Button
                            sx={{
                                height: "80px",
                                width: "60px",
                                position: "absolute",
                                top: "40%",
                                right: 0,
                                backgroundColor: "black !important",
                                color: theme.palette.common.white,
                            }}
                            onClick={handleClickI}
                        >
                            &#8827;
                        </Button>
                    )}
                </>
            )}
            {data.map((el) => el)}
            <Stack className={style.slider}>
                <Stack className={style.path}>
                    <Stack className={style.thumb} sx={{ left: `${index * 25}%`, width: "25%", transition: "left 1s" }} />
                </Stack>
            </Stack>
        </Stack>
    );
}
