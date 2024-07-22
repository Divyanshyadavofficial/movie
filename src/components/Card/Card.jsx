import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const Card = ({ movie }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs","sm"));
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
      <Link className="card__link" to={`/movie/${movie?.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__title">{movie?.title}</div>
            <div className="card__runtime">
              {movie?.release_date}
              <span className="card__rating">{movie?.vote_average} ⭐</span>
            </div>
            <div className="card__description">
              {movie?.overview.slice(0, 118)}
            </div>
          </div>
        </div>
      </Link>
    </Box>
  );
};

export default Card;
