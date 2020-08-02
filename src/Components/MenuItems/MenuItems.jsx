import React, {useState} from 'react';
import './MenuItems.sass'
import ItemPopup from "../ItemPopup/ItemPopup";

const MenuItems = props => {
    const [popup, setPopup] = useState({status: false, init: null})
    return (
        <div className={'MenuItems'}>
            <h1>MenuItems</h1>
            <div className="itemsContainer">
                {
                    props.data ?
                    props.data.items.map((item, index) => {
                        return (
                            <div
                                onClick={() => setPopup({status: true, init: item})}
                                key={index}
                                className="item"
                            >
                                <img src={require(`../../IMG/${item.image}`)} alt=""/>
                                <h2>{item.name}</h2>
                            </div>
                        )
                    })
                        : null
                }
            </div>
            {
                popup.status
                    ? <ItemPopup
                    data={props.data.testDescription}
                    dataItem={popup.init}
                    setPopup={(value) => setPopup(value)}
                    />
                    : null
            }
        </div>
    );
};

export default MenuItems;