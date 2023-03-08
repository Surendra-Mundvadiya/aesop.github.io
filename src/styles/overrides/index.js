import Avatar from "./Avatar";
import Typography from "./Typography";

export default function ComponentsOverrides(theme) {
    return Object.assign(Typography(theme), Avatar(theme));
}
