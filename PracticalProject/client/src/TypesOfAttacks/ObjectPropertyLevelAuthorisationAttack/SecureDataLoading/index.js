import { useEffect, useState } from 'react';
import { ObjectPropertyLevelAuthorisationAttackLevel2 } from '../../../Requests';
import { Grid } from '@mui/material';

function SecureDataLoading() {
    const [products, setProducst] = useState([])
    useEffect(() => { ObjectPropertyLevelAuthorisationAttackLevel2(setProducst) }, [])
    return (
        <>
            <p>{`This problem is solved here, by just removing the additional information and returning a default. 
            This can also be attained by mapping an initial object (probably taken from the database) 
            to an output object (with the propper fields).`}</p>
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


            <p>{`Backend code: ObjectPropertyLevelAuthorisationAttackController.cs -> Level2`}</p>
            <code>
                {`Person p1 = new Person();
            p1.id = 1;
            p1.name= "a";
            Person p2 = new Person();
            p2.id = 2;
            p2.name = "b";

            Product pr1 = new Product(1, "a", p1);
            Product pr2 = new Product(2, "b", p2);

            List<Product> products = new List<Product> { pr1, pr2 };
            return products;`}
            </code><br />
        </>
    );
}

export default SecureDataLoading;
