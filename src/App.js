import React, {useEffect, useState} from 'react';
import MenuItems from "./Components/MenuItems/MenuItems";
import axios from 'axios'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";

const App = () => {
    const [productData, productDataHandler] = useState(null)
    const [popup, setPopup] = useState({ status: false, init: null, id: 0 })
    const getProductData = async () => {
        try {
            let base = await axios.get('base.json',{ crossDomain: true })
            productDataHandler(base.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProductData().then(() => console.log())
    },[])
        return (
        <div>
            <BrowserRouter>
                <Header
                    setPopup={(value) => setPopup(value)}
                />
                <Switch>
                    <Route exact path={ '/' }>
                        <HomePage
                            data={ productData }
                        />
                    </Route>
                    <Route path={ '/catalog' }>
                        <MenuItems
                            data={ productData }
                            setPopup={ (value) => setPopup(value) }
                            popup={ popup }
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;