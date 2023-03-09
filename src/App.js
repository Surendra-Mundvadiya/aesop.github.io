import { Stack } from "@mui/material";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import Section7 from "./components/sections/Section7";
import Section8 from "./components/sections/Section8";
import ThemeProvider from "./styles/theme";

export default function App() {
    return (
        <ThemeProvider>
            <Stack sx={{ display: "flex" }}>
                <Navbar />
            </Stack>
            <Stack component="main" sx={{ pt: "80px", overflowX: "hidden" }}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Footer />
            </Stack>
        </ThemeProvider>
    );
}
