import React from "react";
import {AppBar, Toolbar} from "@mui/material";
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import img from '../../Assets/Images/img.png'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    backgroundColor: "#edf0f1",
    '&:hover': {
        backgroundColor: "#dadadc",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));

const HeaderBar = styled('div')(({ theme }) => ({
    backgroundColor: "#fff",
    boxShadow: '0 0 0 0',
}))

const Close = styled('a')(({ theme }) => ({
    color: "#1f71a7",
    cursor: 'pointer',
    padding: theme.spacing(2, 0),
    marginTop: '5px'
}))
const Basket = styled('a')(({ theme }) => ({
    color: "#1f71a7",
    cursor: 'pointer',
    padding: theme.spacing(1, 2),
}))

export default function Header() {
    return (
        <div className='header'>
            <AppBar position="sticky" color="default">
                <HeaderBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                href="/"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Nevis
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Search sx={{ mr: 1 }} variant="extended" >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    sx={{ flexGrow: 1 }}
                                    placeholder="useless items on white background"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <Close>
                                    <CloseIcon sx={{ mr: 1 }} />
                                </Close>
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Button variant="text" sx={{ mr: 2 }}>Register</Button>
                                <Button variant="outlined"  sx={{ mr: 2 }}>Sign in</Button>
                                <Button variant="outlined" sx={{ mr: 2 }}>My cart</Button>
                                <Basket>
                                    <NavLink to="/cart">
                                        <ShoppingCartIcon/>
                                    </NavLink>
                                </Basket>
                            </Box>
                            <Avatar alt="Remy Sharp" src={img} />
                        </Toolbar>
                    </Container>
                </HeaderBar>
            </AppBar>
        </div>
    )
}