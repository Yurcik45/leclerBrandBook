import React from 'react';
import ItemPopup from "../ItemPopup/ItemPopup";
import {Helmet} from "react-helmet";

const MenuItems = props => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lecler | каталог товарів</title>
                <link rel="canonical" href="http://lecler.com.ua" />
            </Helmet>
            <div className={'MenuItems'}>
                <div className="itemsContainer">
                    {
                        props.data ?
                            props.data.items.map((item, index) => {
                                return (
                                    <div
                                        id={index}
                                        onClick={() => props.setPopup({status: true, init: item})}
                                        key={index}
                                        className="item"
                                        title={item.name}
                                    >
                                        <img src={require(`../../IMG/${item.image}`)} alt={item.name}/>
                                        <h2>{item.name}</h2>
                                    </div>
                                )
                            })
                            : null
                    }
                </div>
                {
                    props.popup.status
                        ? <ItemPopup
                            dataItem={props.popup.init}
                            allData={props.data.items}
                            setPopup={(value) => props.setPopup(value)}
                        />
                        : null
                }
            </div>
        </>
    );
};

export default MenuItems;