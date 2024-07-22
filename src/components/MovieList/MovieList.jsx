import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";
import "./MovieList.css";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const MovieList = () => {
  const { type } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=6c2f0fd8f17254489c08e1441d4f5040`
      );
      const data = await response.json();
      setMovieData(data.results);
    };
    getData();
  }, [type]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("sm","xs"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 4,
        boxShadow: 1,
        textAlign: "center",
        marginBottom: 2,
        ...(isSmallScreen && { padding: 1 }),
        ...(isMediumScreen && { padding: 3 }),
        ...(isLargeScreen && { padding: 4 }),
      }}
    >
      <div className="movie__list">
        <h2 className="list__title">{type ? type.toUpperCase() : "POPULAR"}</h2>
        <div className="list__cards">
          {movieData.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default MovieList;
