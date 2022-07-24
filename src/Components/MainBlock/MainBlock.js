import React from 'react';
import Catalog from "../Catalog/Catalog";
import Filters from "../Filters/Filters";
import {Grid} from "@mui/material";

const MainBlock = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3}>
                <Filters/>
            </Grid>
            <Grid item xs={8}>
                <Catalog/>
            </Grid>
        </Grid>
    );
};

export default MainBlock;