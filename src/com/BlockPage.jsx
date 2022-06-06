import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { fetchStroi } from '../fetchers/fetchStroi'
import { useDispatch, useSelector } from "react-redux"
import { setNavigationHome, setStroi } from "../store/slice/stroi";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BlockPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchStroi().then((res) =>
            dispatch(setStroi(res))
        )

        dispatch(setNavigationHome(["Главная"]))
    }, [])

    const val = useSelector((state) => state.stroi.products);



    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {val.map((element, index) => (
                    <Grid item xs={2} sm={2} md={4} key={index}>
                        <Link key={element.id} to={`/${element.id}`} style={{ textDecoration: "none" }} >
                            <Item style={{
                                display: "flex",
                                justifyContent: "space-between",
                                boxShadow: "0.5px 0.5px 5px black"
                            }}>{element.name}
                                <span style={{
                                    display: 'inline-block',
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    textAlign: "center",
                                    backgroundColor: "grey"
                                }}>
                                    {element.childCategories.length}</span></Item>


                        </Link>


                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}
