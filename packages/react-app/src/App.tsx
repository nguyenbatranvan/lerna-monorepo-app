import React from 'react';
import {FiCreditCard, FiHome} from "react-icons/fi";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Layout, {LinkItemProps} from "shared/src/layout/layout";
import {CardPage} from "./pages/Card";
import {Home} from "./pages/home";

function App() {
    const menus: LinkItemProps[] = [{
        name: 'Home',
        link: '',
        icon: FiHome
    }, {
        name: 'Card',
        link: 'card',
        icon: FiCreditCard
    }];

    const navigate = useNavigate();
    const onChangeRoute = (v) => {
        navigate(v);
    }
    return (
        <>
            <Layout changeRoute={onChangeRoute} menus={menus}
                    logo={"https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"card"} element={<CardPage/>}/>
                </Routes>
                <Outlet/>
            </Layout>
        </>
    );
}

export default App;
