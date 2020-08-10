import React, {useEffect, useState} from 'react';
import './App.css'
import MenuItems from "./Components/MenuItems/MenuItems";
import axios from 'axios'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";

const App = () => {
    const [productData, productDataHandler] = useState(null)
    const getProductData = async () => {
        try {
            let base = await axios.get('base.json',{crossDomain: true })
            productDataHandler(base.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProductData()
    },[])
    useEffect(() => {
        console.log(productData)
    },[productData])
        return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={'/'}>
                        <HomePage/>
                    </Route>
                    <Route path={'/catalog'}>
                        <MenuItems
                            data={productData}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;