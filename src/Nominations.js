import React from "react";
import Button from "@material-ui/core/Button";
import "./CSS/Nominations.css";

export default function Nominations(props) {
    //This function will call the updateNominations function from the parent component
    //It will remove the requested movie on button click, as well as the appropriate button
    function removeMovie(movie) {
        const movieIndex = props.nominations.indexOf(movie);
        props.buttons.splice(movieIndex, 1);
        props.func(movieIndex);
    }
    
    return (
        <>
        <ol>
            {props.nominations.map((movie) => (
            <li
                key={movie.imdbID}
                className={"swing-in-top-fwd"}
                style={{ margin: "1.5em" }}
            >
                {movie.Title} ({movie.Year})
                <Button
                onClick={() => removeMovie(movie)}
                size="small"
                disableElevation
                variant="outlined"
                style={{ float: "right", marginRight: "1%" }}
                color="secondary"
                >
                Remove ❌
                </Button>
            </li>
            ))}
        </ol>
        </>
    );
}
