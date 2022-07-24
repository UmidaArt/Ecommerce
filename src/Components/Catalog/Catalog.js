import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Grid} from "@mui/material";
import {getAllProducts} from "../../Redux/Action";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import {Rating} from "@mui/material";

const Catalog = () => {

    const dispatch = useDispatch()
    const {products} = useSelector((store) => store)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <Container fixed sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                {
                    products.map((item) => (
                        <Grid ket={item.id} item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="cardImg"
                                    width="227"
                                    height="224"
                                    image={item.image}
                                />
                                <CardContent align="left">
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div">
                                        ${item.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Rating name="size-small" defaultValue={4} size="small" />
                                    <Button size="small" variant="outlined">Add to cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Catalog;