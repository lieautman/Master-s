import { useEffect, useState } from 'react';
import { getListOfSubjects } from '../Requests';
import Grid from '@mui/material/Grid';

function PossibleSubjects({ setListOfAttacks }) {
    const [listOfSubjects, setListOfSubjects] = useState([]);
    useEffect(() => getListOfSubjects(setListOfSubjects), []);
    console.log("ceva", listOfSubjects)
    return (
        <>
            {listOfSubjects.map(subject => <Grid container>
                <Grid></Grid>
            </Grid>)}
        </>
    );
}

export default PossibleSubjects;
