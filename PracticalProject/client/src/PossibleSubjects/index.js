import { useEffect, useState } from 'react';
import { getListOfSubjects } from '../Requests';
import { Grid, Button, Typography } from '@mui/material';

function PossibleSubjects({ setListOfAttacks }) {
    const [listOfSubjects, setListOfSubjects] = useState([]);
    useEffect(() => getListOfSubjects(setListOfSubjects), []);
    console.log("ceva", listOfSubjects)
    return (
        <>
            <Typography textAlign={"center"} color={'white'}>Select a language to receive security issues related to it:</Typography>
            <Grid container spacing={2} width={"50vw"} >{listOfSubjects.map(subject =>
                <Grid item xs={3} textAlign={"center"} style={{ padding: "50px" }}><Button variant="contained" size={"large"}>{subject.name}</Button></Grid>
            )}
            </Grid>
        </>
    );
}
export default PossibleSubjects;
