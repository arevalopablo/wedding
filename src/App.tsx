import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif;',
    h1: {
      fontSize: "40px",
      fontWeight: "bold",
      "@media (max-width: 900px)": {
        fontSize: "30px",
      },
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      "@media (max-width: 900px)": {
        fontSize: "16px",
      },
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
    h3: {
      fontSize: "20px",
      fontWeight: "bold",
      "@media (max-width: 900px)": {
        fontSize: "16px",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
