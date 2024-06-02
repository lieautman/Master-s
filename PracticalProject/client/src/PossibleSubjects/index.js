import { useEffect, useState } from 'react';
import { getListOfLanguagesWithTags, getListOfTopics } from '../Requests';
import { Grid, Button, Typography, Tooltip } from '@mui/material';

function PossibleSubjects({ setListOfTopics }) {
    const [listOfLanguagesWithTags, setListOfLanguagesWithTags] = useState([]);
    useEffect(() => getListOfLanguagesWithTags(setListOfLanguagesWithTags), []);
    return (
        <>
            <Typography textAlign={"center"} color={'white'}>Select a language to receive security issues related to it:</Typography>
            <Grid container spacing={2} width={"50vw"} >{listOfLanguagesWithTags.map(languageWithTag =>
                <Grid item xs={3} textAlign={"center"} style={{ padding: "50px" }} key={languageWithTag.id}>
                    <Tooltip title={languageWithTag.tags.length !== 0 ? "Tags: " + languageWithTag.tags.map(element => element.name
                    ).join(", ") : ""}><Button variant="contained" size={"large"} onClick={()=>getListOfTopics(setListOfTopics, languageWithTag.tags)}>{languageWithTag.name} </Button>
                    </Tooltip>
                </Grid>
            )}
            </Grid>
        </>
    );
}
export default PossibleSubjects;
