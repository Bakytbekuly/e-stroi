import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../store/slice/stroi';
import { fetchStroiId } from "../fetchers/fetchStroi"
import NotFoundPage from './NotFoundPage';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridProduct({ id, ...props }) {
    const [product, setProduct] = React.useState([])
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(setNavigation(props.categoryName))
        fetchStroiId({ id }).then(res => {

            setProduct(res)
        })
    }, [])


    Array.from(props)

    return (
        <>

            {product == false ? <NotFoundPage message={"No Product"} /> : <Box sx={{ flexGrow: 1, mt: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {product.map((element, index) => (
                        <Grid item xs={2} sm={2} md={4} key={index}>

                            <Item style={{ display: "flex", justifyContent: "space-between", boxShadow: "0.5px 0.5px 5px black" }}>{element.name}

                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box >
            }
        </>
    );
}
