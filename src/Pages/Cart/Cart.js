import React, {useState} from 'react';
import {Grid, Rating} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {

    const dispatch = useDispatch()
    const {cart} = useSelector((store) => store)

    const deleteProduct = (id) => {
        dispatch({type: 'REMOVE_TO_FAVORITES', payload: id})
    }


    return (
        <Container fixed sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                {
                    cart.length ? cart.map((item) => (
                        <Grid key={item.id} item xs={3}>
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
                                    <Button size="small" variant="outlined" >Delete</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )) : "Empty"
                }
            </Grid>
        </Container>
    );
};

export default Cart;