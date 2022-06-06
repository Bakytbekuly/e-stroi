import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, Link } from 'react-router-dom'
import Navigation from '../com/Navigation'
import { setNavigation } from '../store/slice/stroi'

const Layout = () => {

    const val = useSelector((state) => state.stroi.navigation);
    console.log(val);
    return (
        <>
            <header>
                <Link to="/" >Home</Link>
            </header>
            <main className='container'>
                <Navigation navigation={val} />
                <Outlet />
            </main>


        </>
    )
}

export { Layout }