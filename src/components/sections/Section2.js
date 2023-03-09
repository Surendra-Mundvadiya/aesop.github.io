import React, { useState, useMemo } from "react";
import { Avatar, Button, Link, Stack, Typography } from "@mui/material";
import a from "../../assets/section2slide/1.webp";
import b from "../../assets/section2slide/2.webp";
import c from "../../assets/section2slide/3.webp";
import d from "../../assets/section2slide/4.webp";
import e from "../../assets/section2slide/5.webp";
import f from "../../assets/section2slide/6.webp";
import g from "../../assets/section2slide/7.webp";
import h from "../../assets/section2slide/8.webp";
import i from "../../assets/section2slide/9.webp";
import j from "../../assets/section2slide/10.webp";
import k from "../../assets/section2slide/11.webp";
import { useTheme } from "@mui/styles";
import useStyles from "./utils/sliderStyle";

export default function Section2() {
    const theme = useTheme();
    const style = useStyles(theme);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const data = useMemo(() => {
        return [
            <Stack className={style.bodyBox1}>
                <Typography variant="subtitle2">For the home</Typography>
                <Typography variant="h5">Domestic pleasures</Typography>
                <Typography variant="subtitle1">Our range of aromatic formulations for the home are practical and pleasing in equal measure.</Typography>
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
                    <span>See all Home </span>
                    <span>&#8594;</span>
                </Button>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Avatar src={a} />
                </Stack>
                <Link href="#" className={style.link}>
                    Murasaki Aromatique Incense
                </Link>
                <Typography>For those who facour aromas of warm spice</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={b} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Kagerou Aromatique Incense
                </Link>
                <Typography>For those particularly partial to Vetiver</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={c} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Sarashina Aromatique Incense
                </Link>
                <Typography>For those particularly partial to Sandalwood</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={d} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Bronze Incense Holder
                </Link>
                <Typography>Suited to any interior</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={e} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Aganice Aromatique Candle
                </Link>
                <Typography>Cardamom, Mimosa, Tobacco</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={f} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Callippus Aromatique Candle
                </Link>
                <Typography>A marriage of deep greens and earthy spices</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={g} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Ptolemy Aromatique Candle{" "}
                </Link>
                <Typography>A sensuous blend of leather, smoke and wood</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={h} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Istros Aromatique Room Spray
                </Link>
                <Typography>Imbue spaces with evocative scent</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={i} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    Cythera Aromatique Room Spray{" "}
                </Link>
                <Typography>Veil of Geranium, warmth of Myrrh</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={j} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    {" "}
                    Olous Aromatique Room Spray
                </Link>
                <Typography> Refreshes the home Olous</Typography>
            </Stack>,
            <Stack className={style.bodyBox}>
                <Stack className={style.imagebox}>
                    <Stack>
                        <Avatar src={k} />
                    </Stack>
                </Stack>
                <Link href="#" className={style.link}>
                    bottle Aesop: the book
                </Link>
                <Typography>For design aficionados; curious readers; aesthetes</Typography>
            </Stack>,
        ].slice(index, index + 3);
    }, [index]);

    const handleClickI = () => {
        if (index < 9) {
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
                    {index < 9 && (
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
                    <Stack className={style.thumb} sx={{ left: `${index * 10}%`, width: "10%", transition: "left 1s" }} />
                </Stack>
            </Stack>
        </Stack>
    );
}
