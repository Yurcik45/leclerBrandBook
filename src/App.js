import React, {useEffect, useState} from 'react';
import './App.css'
import MenuItems from "./Components/MenuItems/MenuItems";
import axios from 'axios'

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
            <MenuItems
                data={productData}
            />
        </div>
    );
};

export default App;