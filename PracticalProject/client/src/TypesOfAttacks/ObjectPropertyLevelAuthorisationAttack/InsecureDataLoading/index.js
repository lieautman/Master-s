import { useEffect, useState } from 'react';
import { ObjectPropertyLevelAuthorisationAttackLevel1 } from '../../../Requests';
import { Grid } from '@mui/material';

function InsecureDataLoading() {
    const [products, setProducst] = useState([])
    useEffect(() => { ObjectPropertyLevelAuthorisationAttackLevel1(setProducst) }, [])
    return (
        <>
            <p>{`This problem may occur for example when and API sends to the front-end application more objects than is required.`}</p>
            <Grid container spacing={2}>
                <Grid item xs={2}>Id</Grid>
                <Grid item xs={5}>Product name</Grid>
                <Grid item xs={5}>Publisher name</Grid>
                {products.map(product => {
                    return <div key={product.id}>
                        <Grid item xs={2}>{product.id}</Grid>
                        <Grid item xs={5}>{product.productName}</Grid>
                        <Grid item xs={5}>{product.person.name}</Grid>
                    </div>
                })}
            </Grid >

            <p>{`The front-end client interprets just the values that it needs to display the table, 
            but there is more data sent over the network. 
            This data can be captured by a would be attacker in a network scan application such as Wireshark`}
            </p>
            <p>{`For the purposes of this exercise, the data is logged in the console`}
            </p>
            <p>{`The front end might not use the other user's phone number, 
            but the Brocken Object Property Level Authorisation in the API allows 
            a supposed attacker to gather information.
            This information can now be used to perform further attacks.`}</p>
            <p>{`Backend code: ObjectPropertyLevelAuthorisationAttackController.cs -> Level1`}</p>
            <code>
                {`Person p1 = new Person(1, "a", "0123");
                Person p2 = new Person(2, "b", "01234");

                Product pr1 = new Product(1, "a", p1);
                Product pr2 = new Product(2, "b", p2);

                List<Product> products = new List<Product> {pr1, pr2};
                    return products;`}
            </code><br />
        </>
    );
}

export default InsecureDataLoading;
