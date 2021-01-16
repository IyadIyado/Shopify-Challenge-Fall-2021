import React from "react";
import Grid from "@material-ui/core/Grid";
import "./CSS/Posters.css";

//The purpose of this component is to render the posters of the user nominated movies

export default function Posters(props) {
    return (
        <>
        <Grid container spacing={1} alignItems="center" justify="center">
            {props.list.map((movie) => (
            <Grid item xs={2} key={movie.imdbID}>
                <img
                className={"fade-in-bottom"}
                src={movie.Poster}
                alt={"Poster for the movie" + movie.Title}
                key={movie.imdbID}
                style={{ width: "100%", height: "auto" }}
                />
            </Grid>
            ))}
        </Grid>
        </>
    );
}
