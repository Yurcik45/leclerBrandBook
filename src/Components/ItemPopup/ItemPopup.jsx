import React from 'react';
import './ItemPopup.sass'
import { useSwipeable } from 'react-swipeable'


const ItemPopup = props => {
    const handlers = useSwipeable({
        onSwipedDown: () => props.setPopup({status: false, init: null}),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    // console.log(props.data)

    return (
            <div className={'productPopup'} {...handlers}>
                <div
                    className={'arrowLeft'}
                    onClick={() => props.setPopup({status: false, init: null})}
                >
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.85404 4.64604C5.9006 4.69248 5.93755 4.74766 5.96275 4.80841C5.98796 4.86915 6.00093 4.93427 6.00093 5.00004C6.00093 5.06581 5.98796 5.13093 5.96275 5.19167C5.93755 5.25242 5.9006 5.30759 5.85404 5.35404L3.20704 8.00004L5.85404 10.646C5.90053 10.6925 5.9374 10.7477 5.96256 10.8085C5.98772 10.8692 6.00067 10.9343 6.00067 11C6.00067 11.0658 5.98772 11.1309 5.96256 11.1916C5.9374 11.2524 5.90053 11.3076 5.85404 11.354C5.80755 11.4005 5.75236 11.4374 5.69162 11.4626C5.63088 11.4877 5.56578 11.5007 5.50004 11.5007C5.4343 11.5007 5.3692 11.4877 5.30846 11.4626C5.24772 11.4374 5.19253 11.4005 5.14604 11.354L2.14604 8.35404C2.09948 8.30759 2.06253 8.25242 2.03733 8.19167C2.01212 8.13093 1.99915 8.06581 1.99915 8.00004C1.99915 7.93427 2.01212 7.86915 2.03733 7.80841C2.06253 7.74766 2.09948 7.69248 2.14604 7.64604L5.14604 4.64604C5.19248 4.59948 5.24766 4.56253 5.30841 4.53733C5.36915 4.51212 5.43427 4.49915 5.50004 4.49915C5.56581 4.49915 5.63093 4.51212 5.69167 4.53733C5.75242 4.56253 5.80759 4.59948 5.85404 4.64604V4.64604Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 8C2.5 7.86739 2.55268 7.74021 2.64645 7.64645C2.74021 7.55268 2.86739 7.5 3 7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H3C2.86739 8.5 2.74021 8.44732 2.64645 8.35355C2.55268 8.25979 2.5 8.13261 2.5 8Z" fill="black"/>
                    </svg>
                </div>
                <div
                    className="productItem"
                >
                    <div className="productItemContainer">
                        <div className="imageContainer">
                            <img src={require(`../../IMG/${props.dataItem.image}`)} alt=""/>
                        </div>
                        <h2>{props.dataItem.name}</h2>
                        <p>{props.data}</p>
                    </div>
                </div>
            </div>
    );
};

export default ItemPopup;