import React, { useState, useMemo } from "react";
import { Avatar, Button, Link, Stack, Typography } from "@mui/material";
import a from "../../assets/section4slide/1.webp";
import b from "../../assets/section4slide/2.webp";
import c from "../../assets/section4slide/3.webp";
import d from "../../assets/section4slide/4.webp";
import e from "../../assets/section4slide/5.webp";
import f from "../../assets/section4slide/6.png";
import { useTheme } from "@mui/styles";
import useStyles from "./utils/sliderStyle";

export default function Section4() {
    const theme = useTheme();
    const style = useStyles(theme);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const data = useMemo(() => {
        return [
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Avatar src={a} sx={{ width: "80%", m: "auto" }} />
                </Stack>
                <Link href="#" className={style.link}>
                    Lucent Facial Concentrate{" "}
                </Link>
                <Typography>A Vitamin C-rich layering serum</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={b} sx={{ width: "80%", m: "auto" }} />
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
                        <Avatar src={c} sx={{ width: "80%", m: "auto" }} />
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
                        <Avatar src={d} sx={{ width: "80%", m: "auto" }} />
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
                        <Avatar src={e} sx={{ width: "80%", m: "auto" }} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Damascan Rose Facial Treatment{" "}
                </Link>
                <Typography>A blend of vitamin-rich botanical extracts Damascan Rose Facial Treatment in amber bottle.</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={f} sx={{ width: "80%", m: "auto" }} />
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
