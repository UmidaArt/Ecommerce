import React from 'react';
import Header from "../../Components/Header/Header";
import {Grid} from "@mui/material";
import Filters from "../../Components/Filters/Filters";
import Catalog from "../../Components/Catalog/Catalog";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                    <Filters/>
                </Grid>
                <Grid item xs={8}>
                    <Catalog/>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;