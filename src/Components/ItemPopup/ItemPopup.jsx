import React from 'react';
import './ItemPopup.sass'
import { useSwipeable } from 'react-swipeable'


const ItemPopup = props => {
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            props.setPopup({ status: true, init: +props.dataItem.id + 1 === props.allData.length
                    ? props.allData[0]
                    : props.allData[+props.dataItem.id + 1] })
        },
        onSwipedRight: () => {
            props.setPopup({status: true, init: +props.dataItem.id === 0
                    ? props.allData[+props.allData.length - 1]
                    : props.allData[+props.dataItem.id - 1] })
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    return (
            <div className={ 'productPopup' }  { ...handlers } >
               <div className="popupContainer"
                    onClick={ () => props.setPopup({ status: false, init: null }) }
               >
                   <div className="closePopUp"
                        title={ 'Повернутись в каталог' }
                   >
                       <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M15.2262 8.27543C15.1391 8.18812 15.0356 8.11885 14.9217 8.07159C14.8078 8.02433 14.6857 8 14.5624 8C14.4391 8 14.317 8.02433 14.2031 8.07159C14.0892 8.11885 13.9857 8.18812 13.8987 8.27543L8.27366 13.9004C8.18636 13.9875 8.11709 14.091 8.06983 14.2049C8.02256 14.3188 7.99824 14.4409 7.99824 14.5642C7.99824 14.6875 8.02256 14.8096 8.06983 14.9235C8.11709 15.0374 8.18636 15.1408 8.27366 15.2279L13.8987 20.8529C14.0747 21.029 14.3135 21.1279 14.5624 21.1279C14.8114 21.1279 15.0501 21.029 15.2262 20.8529C15.4022 20.6769 15.5011 20.4381 15.5011 20.1892C15.5011 19.9402 15.4022 19.7015 15.2262 19.5254L10.263 14.5642L15.2262 9.60293C15.3135 9.51584 15.3827 9.41239 15.43 9.29849C15.4773 9.18459 15.5016 9.06249 15.5016 8.93918C15.5016 8.81586 15.4773 8.69376 15.43 8.57986C15.3827 8.46597 15.3135 8.36251 15.2262 8.27543Z" fill="black" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M23 14.5642C23 14.3156 22.9012 14.0771 22.7254 13.9013C22.5496 13.7255 22.3111 13.6267 22.0625 13.6267H9.875C9.62636 13.6267 9.3879 13.7255 9.21209 13.9013C9.03627 14.0771 8.9375 14.3156 8.9375 14.5642C8.9375 14.8128 9.03627 15.0513 9.21209 15.2271C9.3879 15.4029 9.62636 15.5017 9.875 15.5017H22.0625C22.3111 15.5017 22.5496 15.4029 22.7254 15.2271C22.9012 15.0513 23 14.8128 23 14.5642Z" fill="black" />
                       </svg>
                       <p>
                           Повернутись до каталогу
                       </p>
                   </div>
                   <div className="productItem">
                       <div className="productItemContainer">
                           <div className="productName">
                               <h2>{ props.dataItem.name }</h2>
                               <p>{ props.dataItem.description }</p>
                           </div>
                           <div className="imageContainer">
                               <img src={require(`../../IMG/${ props.dataItem.image }`)} alt={ props.dataItem.name } />
                           </div>
                       </div>
                   </div>
               </div>
            </div>
    );
};

export default ItemPopup;