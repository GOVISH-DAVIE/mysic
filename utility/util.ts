import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mainTheme = createTheme({
    typography: {
        fontFamily: " 'Finlandica', sans-serif"

    },
    palette: {
        primary: {
            main: "#424769",
            

        },
    },
});

export default mainTheme;