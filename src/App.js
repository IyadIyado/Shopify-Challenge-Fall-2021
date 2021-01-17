import './CSS/App.css';
import React, {useState} from "react"
import SearchResults from "./SearchResults"
import Nominations from "./Nominations"
import Posters from "./Posters"
import TextField from "@material-ui/core/TextField"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Box } from '@material-ui/core';


export default function App() {
	const [query, setQuery] = useState("")
	const [nominationList, setNominationList] = useState([])
	const [buttonList, setButtonList] = useState([])
	const [open, setOpen] = React.useState(false);
			
	//This function is part of the snackbar component from Material-ui
	const changeHandler = (event) => {
		setQuery(event.target.value);
	}

	//This function is part of the snackbar component
	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}
	
	//This function is part of the snackbar component from material-ui
	const openAlert = () => {
		setOpen(true);
	};
	
	//This function is part of the snackbar component from material-ui
	const handleClose = (reason) => {
		if (reason === 'clickaway') {
		return;
		}
	
		setOpen(false);
	};

	//This function will be initiated from the childcomponent <Nominations.js>
    //It will recieve the index of the movie to be removed from the nominations list
    //and it will update the appropriate state.
    function updateNominations(index){
        let newList = []
        nominationList.splice(index, 1)
        nominationList.map((movie) => (
            newList.push(movie)
        ))
        setNominationList(newList)
	}

	//This function is reponsible for disabling/enabling the nominate button depending on
    //whether the movie is in the nominations list or not.
    function buttonCheck(buttonID) {
		if (buttonList.length > 0) {
			if(buttonList.includes(buttonID)) {
				return true;
			} else {
				return false;
			}
		}
	};
	
	
	// This function will be initiated from the childcomponent <SearchResults.js>
	// Params: movie; This is the movie object
    // Params: buttonID; This is the ID of the button
    // It will check to see that the nomination list does not exceed 5 elements
    // If less than 5, it will add the movie, and it will add the appropriate button to the button list to be disabled
    // If 5 movies are selected, the user will be alerted that they can't add anymore movies
    function addNomination(movie, buttonID) {
        if(nominationList.length < 5) {
            setNominationList(nominationList.concat(movie));
            let btn = document.getElementById(`${buttonID}`);
            setButtonList(buttonList.concat(buttonID))
            btn.setAttribute("disabled", "true")
            if(nominationList.length === 4) {
				openAlert()
            }
        } else {
            openAlert()
        }
    }

	return (
			<>	
				<Container maxWidth="xl">
					<Box margin={3} padding={3} borderColor="rgb(255,255,255)" border={1} borderRadius={5}>
						<h1 id="heading">The Shoppies: Movie Awards for Entrepreneurs</h1>
						<br></br>
					<Grid container spacing={3}>	

						<Posters list={nominationList}/>

						<Grid item xs={12} id={"SearchBar"} >
							<Paper elevation={7}>
							<TextField
							id="SearchBarInput"
							color="primary"
							variant="outlined"
							type="search"
							fullWidth
							value={query}
							onChange={changeHandler}
							label="🔍Search"
							placeholder="i.e. Interstellar, La La Land, etc..."
							size="small"
							/>
							</Paper>
						</Grid>
							
						<Grid item xs={12} sm={6} id={"SearchResults"}>
								<h1>Search Results</h1>
								<SearchResults data={query} buttonCheck={buttonCheck} addNomination={addNomination}/>	
						</Grid>
							
						<Grid item xs={12} sm={6}>
								<h1>Nominations</h1>
								<Nominations nominations={nominationList} buttons={buttonList} func={updateNominations} />
						</Grid>

						<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
							<Alert onClose={handleClose} severity="success">
								Congratulations! You've nominated 5 movies!
							</Alert>
						</Snackbar>
							
					</Grid>
					</Box>
				</Container>
			</>
		);
	}