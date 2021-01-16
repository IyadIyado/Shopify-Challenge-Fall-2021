import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function SearchResults(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    //api fetching function
    useEffect(() => {
        fetch("https://www.omdbapi.com/?apikey=64673092&type=movie&s=" + props.data)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems([result]);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [props.data]);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (props.data.length >= 3 && items[0].Response === "True") {
        //If the above conditions are met, movies with the corresponding search term will be mapped below
        return (
                <>
                <section id={"lists"}>
                    <ul>
                        {items[0].Search.map((movie) => (
                            <li key={movie.imdbID} style={{margin:"1.5em"}}>
                                {movie.Title} ({movie.Year})
                                <Button
                                size="small"
                                disableElevation 
                                variant="contained"
                                color="secondary"
                                style={{float:"right", marginRight: "1%"}}
                                id={movie.imdbID}
                                disabled={props.buttonCheck(movie.imdbID)} 
                                onClick={() => {props.addNomination(movie, movie.imdbID);}}>
                                    Nominate 🥇
                                </Button>
                            </li>
                        ))}
                    </ul>
                </section>
            </>
        );
    } else if(props.data.length < 3) {
        return (
        <>
            <p>Your Search Results will appear here!</p>
        </>
        )
    } else {
        return (
            <div>No Titles found matching that name 😢</div>
        )
    }
}


//🥇 👍 🏆 ✔️