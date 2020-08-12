import React from 'react';
import ItemPopup from "../ItemPopup/ItemPopup";

const MenuItems = props => {

    return (
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
    );
};

export default MenuItems;