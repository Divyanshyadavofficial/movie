import { ThemeProvider } from "@emotion/react";
import MovieList from "../../components/MovieList/MovieList";
import Slider from "../../components/Slider/Slider";
import theme from "../../theme";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Slider />
        <MovieList />
      </>
    </ThemeProvider>
  );
};

export default HomePage;
