import React, {useState} from 'react';
import './HomePage.sass'
import {HashLink as Link} from 'react-router-hash-link'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Iframe from 'react-iframe'
import {Helmet} from "react-helmet";

const HomePage = props => {
    const[openPhoneNumbers, openPhoneNumbersHandler] = useState(false)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 30000,
        slidesToScroll: 1
    };
    const slides = [
        {
            text: 'Коли мова йдеться про солодке опір чинити марно'
        },
        {
            text: 'Солодке часто чує слово “ТАК”, не відмовляйте собі у насолоді'
        },
        {
            text: 'LECLER - це те що подарує Вам солодку подорож навколо світу'
        }
    ]
    const links = [
        {
            icon: <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.9946 9.73807C14.3159 9.73807 9.73288 14.3212 9.73288 20C9.73288 25.6788 14.3159 30.2619 19.9946 30.2619C25.6734 30.2619 30.2564 25.6788 30.2564 20C30.2564 14.3212 25.6734 9.73807 19.9946 9.73807ZM19.9946 26.6695C16.3222 26.6695 13.3252 23.6725 13.3252 20C13.3252 16.3275 16.3222 13.3305 19.9946 13.3305C23.667 13.3305 26.664 16.3275 26.664 20C26.664 23.6725 23.667 26.6695 19.9946 26.6695ZM30.6766 6.92617C29.3508 6.92617 28.2801 7.99689 28.2801 9.32279C28.2801 10.6487 29.3508 11.7194 30.6766 11.7194C32.0025 11.7194 33.0732 10.6537 33.0732 9.32279C33.0736 9.00795 33.0119 8.69612 32.8916 8.40517C32.7713 8.11422 32.5948 7.84986 32.3722 7.62724C32.1495 7.40461 31.8852 7.2281 31.5942 7.10779C31.3033 6.98749 30.9915 6.92577 30.6766 6.92617ZM39.9978 20C39.9978 17.2381 40.0228 14.5013 39.8677 11.7444C39.7126 8.54226 38.9821 5.70034 36.6406 3.35876C34.294 1.01217 31.4572 0.286681 28.2551 0.131576C25.4932 -0.0235287 22.7564 0.00148823 19.9996 0.00148823C17.2378 0.00148823 14.501 -0.0235287 11.7442 0.131576C8.5421 0.286681 5.70023 1.01717 3.35869 3.35876C1.01215 5.70534 0.286675 8.54226 0.131574 11.7444C-0.0235283 14.5063 0.0014882 17.2431 0.0014882 20C0.0014882 22.7569 -0.0235283 25.4987 0.131574 28.2556C0.286675 31.4577 1.01716 34.2997 3.35869 36.6412C5.70524 38.9878 8.5421 39.7133 11.7442 39.8684C14.506 40.0235 17.2428 39.9985 19.9996 39.9985C22.7614 39.9985 25.4982 40.0235 28.2551 39.8684C31.4572 39.7133 34.299 38.9828 36.6406 36.6412C38.9871 34.2947 39.7126 31.4577 39.8677 28.2556C40.0278 25.4987 39.9978 22.7619 39.9978 20ZM35.5949 31.798C35.2296 32.7086 34.7893 33.389 34.0839 34.0895C33.3784 34.795 32.703 35.2353 31.7924 35.6005C29.1606 36.6462 22.9115 36.4111 19.9946 36.4111C17.0777 36.4111 10.8236 36.6462 8.19187 35.6055C7.28127 35.2403 6.60082 34.8 5.90036 34.0945C5.1949 33.389 4.75461 32.7136 4.38937 31.803C3.34869 29.1662 3.58384 22.917 3.58384 20C3.58384 17.083 3.34869 10.8288 4.38937 8.19703C4.75461 7.28641 5.1949 6.60595 5.90036 5.90548C6.60583 5.205 7.28127 4.7597 8.19187 4.39446C10.8236 3.35375 17.0777 3.58891 19.9946 3.58891C22.9115 3.58891 29.1657 3.35375 31.7974 4.39446C32.708 4.7597 33.3884 5.2 34.0889 5.90548C34.7943 6.61095 35.2346 7.28641 35.5999 8.19703C36.6406 10.8288 36.4054 17.083 36.4054 20C36.4054 22.917 36.6406 29.1662 35.5949 31.798Z"
                    fill="white" />
            </svg>,
            href: 'https://www.instagram.com/lecler.if/?hl=uk',
            name: 'Instagram'
        },
        {
            icon: <svg width="15" height="30" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.89248 50V26.5385H0V18.0913H6.89248V10.8763C6.89248 5.2066 10.9639 0 20.3453 0C24.1437 0 26.9524 0.32775 26.9524 0.32775L26.7311 8.21605C26.7311 8.21605 23.8666 8.19095 20.7408 8.19095C17.3577 8.19095 16.8157 9.5942 16.8157 11.9233V18.0913H27L26.5569 26.5385H16.8157V50H6.89248Z" fill="white" />
            </svg>,
            href: 'https://www.facebook.com/lecler.if/',
            name: 'Facebook'
        },
        {
            icon: <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.0625 12.5C40.1667 17.0209 39.6875 22.3542 37.375 26.6875C35.4167 30.2084 32.6042 33.1875 30.2083 36.4584C29.1667 37.9167 28.125 39.4792 27.3542 41.1667C27.0833 41.7292 26.8958 42.3125 26.6875 42.8959C26.4792 43.4792 26.2917 44.0625 26.1042 44.6459C25.9167 45.1875 25.6875 45.8334 25 45.8334C24.1875 45.8334 23.9583 44.9167 23.7917 44.2917C23.2917 42.7709 22.7917 41.3125 22.0208 39.9167C21.1458 38.2709 20.0417 36.75 18.9167 35.2709L38.0625 12.5ZM19 17.5417L12.125 25.7084C13.3958 28.3959 15.2917 30.6875 17.1042 32.9792C17.5417 33.5 17.9792 34.0417 18.3958 34.6042L27.0833 24.3125L27 24.3334C23.9583 25.375 20.5833 23.8334 19.375 20.8334C19.2083 20.4792 19.0833 20.0625 19 19.6459C18.8854 18.9561 18.8854 18.2522 19 17.5625V17.5417ZM13.7083 9.62502L13.6875 9.64585C10.3125 13.9167 9.72916 19.8542 11.75 24.875L20.0625 15L19.9583 14.8959L13.7083 9.62502ZM29.625 4.91669L22.9167 12.8542L23 12.8334C25.7917 11.875 28.9167 13.0834 30.3333 15.625C30.6458 16.2084 30.8958 16.8334 30.9792 17.4584C31.1042 18.25 31.1458 18.8125 31 19.5834V19.6042L37.6667 11.6875C35.924 8.51958 33.0649 6.11345 29.6458 4.93752L29.625 4.91669ZM20.6042 14.3542L28.75 4.66669L28.6667 4.64585C27.4583 4.33335 26.2292 4.16669 25 4.16669C20.8958 4.16669 17.0208 5.93752 14.2708 8.97919L14.2292 9.00002L20.6042 14.3542Z" fill="white" />
            </svg>,
            href: 'https://www.google.com.ua/maps/@48.9291776,24.7002289,14z',
            name: 'Google Map'
        },
    ]
    const slides2 = [
        {
            text:'Спеціалізація: створення найсмачніших тортів і десертів для будь-яких подій, оформлення тематичних кенді-барів.'
        },
        {
            text:'Команда: висококласні професійні кондитери та кухарі, репутація яких випереджає самі вироби. Кожен — із досвідом, знанням ексклюзивних рецептур і багатьох кондитерських тонкощів.'
        },
        {
            text:'Різноманіття солодких виробів: усе, що пропонує сучасне кондитерське мистецтво. Родзинка «Lecler» — сучасні мусові мінідесерти, різних форм та відтінків. Вони гармонійно доповнять стилістику свята й посмакують усім запрошеним.'
        }
    ]
    const date = new Date()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Десерти Івано-Франківськ, Lecler, Кенді бар, Мусові десерти, Найсмачніші десерти,Весілля десерти</title>
                <link rel="canonical" href="http://lecler.com.ua" />
            </Helmet>
            <div className='HomePage' id='toTop'>
                <header id='home'>
                    <Slider { ...settings }>
                        {
                            slides.map((slide,key) => {
                                return (
                                    <div className={`topSlide s${ key }`} key={ key }>
                                        <div className="mainText">
                                            <p>
                                                { slide.text }
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <div
                        className="arrowTop"
                        title={ 'Перейти вгору' }
                    >
                        <Link to={ '/#home' }>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#262424" />
                                <path d="M17.5 13.6182L25.4375 21.562C26.025 22.1495 26.975 22.1495 27.5562 21.562C28.1437 20.9745 28.1375 20.0245 27.5562 19.437L18.5625 10.437C17.9937 9.86824 17.0812 9.85574 16.4937 10.3932L7.4375 19.4307C7.14375 19.7245 7 20.112 7 20.4932C7 20.8745 7.14375 21.262 7.4375 21.5557C8.025 22.1432 8.975 22.1432 9.55625 21.5557L17.5 13.6182Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                </header>
                <div className="bottomArrow">
                    <a href={ '#products' }>
                        ПЕРЕЙТИ ДАЛІ
                        <svg width="17" height="30" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.01961 29.1292C6.13977 29.0087 6.28252 28.9131 6.43967 28.8479C6.59682 28.7827 6.7653 28.7491 6.93544 28.7491C7.10559 28.7491 7.27406 28.7827 7.43122 28.8479C7.58837 28.9131 7.73111 29.0087 7.85127 29.1292L14.6967 35.9772L21.5422 29.1292C21.785 28.8863 22.1145 28.7498 22.458 28.7498C22.8015 28.7498 23.1309 28.8863 23.3738 29.1292C23.6167 29.3721 23.7532 29.7015 23.7532 30.045C23.7532 30.3885 23.6167 30.7179 23.3738 30.9608L15.6125 38.7221C15.4924 38.8426 15.3496 38.9381 15.1925 39.0034C15.0353 39.0686 14.8669 39.1021 14.6967 39.1021C14.5266 39.1021 14.3581 39.0686 14.2009 39.0034C14.0438 38.9381 13.901 38.8426 13.7809 38.7221L6.01961 30.9608C5.89915 30.8407 5.80358 30.6979 5.73836 30.5408C5.67315 30.3836 5.63959 30.2151 5.63959 30.045C5.63959 29.8749 5.67315 29.7064 5.73836 29.5492C5.80358 29.3921 5.89915 29.2493 6.01961 29.1292Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6967 10.6418C15.0398 10.6418 15.3688 10.7781 15.6114 11.0207C15.854 11.2633 15.9903 11.5923 15.9903 11.9354V35.2192C15.9903 35.5623 15.854 35.8913 15.6114 36.1339C15.3688 36.3765 15.0398 36.5127 14.6967 36.5127C14.3537 36.5127 14.0247 36.3765 13.7821 36.1339C13.5395 35.8913 13.4032 35.5623 13.4032 35.2192V11.9354C13.4032 11.5923 13.5395 11.2633 13.7821 11.0207C14.0247 10.7781 14.3537 10.6418 14.6967 10.6418Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.467712 4.17415C0.467712 3.14494 0.876564 2.15789 1.60432 1.43013C2.33208 0.702369 3.31914 0.293518 4.34835 0.293518H25.0451C26.0743 0.293518 27.0613 0.702369 27.7891 1.43013C28.5169 2.15789 28.9257 3.14494 28.9257 4.17415V22.2838C28.9257 23.313 28.5169 24.3 27.7891 25.0278C27.0613 25.7556 26.0743 26.1644 25.0451 26.1644H21.1644C20.8214 26.1644 20.4923 26.0281 20.2498 25.7855C20.0072 25.543 19.8709 25.2139 19.8709 24.8709C19.8709 24.5278 20.0072 24.1988 20.2498 23.9562C20.4923 23.7136 20.8214 23.5773 21.1644 23.5773H25.0451C25.3881 23.5773 25.7172 23.441 25.9597 23.1985C26.2023 22.9559 26.3386 22.6269 26.3386 22.2838V4.17415C26.3386 3.83108 26.2023 3.50207 25.9597 3.25948C25.7172 3.01689 25.3881 2.88061 25.0451 2.88061H4.34835C4.00528 2.88061 3.67626 3.01689 3.43367 3.25948C3.19109 3.50207 3.0548 3.83108 3.0548 4.17415V22.2838C3.0548 22.6269 3.19109 22.9559 3.43367 23.1985C3.67626 23.441 4.00528 23.5773 4.34835 23.5773H8.22898C8.57205 23.5773 8.90107 23.7136 9.14366 23.9562C9.38624 24.1988 9.52253 24.5278 9.52253 24.8709C9.52253 25.2139 9.38624 25.543 9.14366 25.7855C8.90107 26.0281 8.57205 26.1644 8.22898 26.1644H4.34835C3.31914 26.1644 2.33208 25.7556 1.60432 25.0278C0.876564 24.3 0.467712 23.313 0.467712 22.2838V4.17415Z" fill="white" />
                        </svg>
                    </a>
                </div>
                <div className="socialLinksContainer">
                    {
                        links.map((link,key) => {
                            return(
                                <a href={ link.href } title={ link.name } className='socialLink' key={ key }>
                                    { link.icon }
                                </a>
                            )
                        })
                    }
                    <div title='Зателефонувати'
                         className='socialLink'
                         id={ openPhoneNumbers ? 'tellOpen' : null }
                         onClick={ () => openPhoneNumbersHandler(!openPhoneNumbers) }>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.125 1H10.125C9.2962 1 8.50134 1.32924 7.91529 1.91529C7.32924 2.50134 7 3.2962 7 4.125V25.375C7 26.2038 7.32924 26.9987 7.91529 27.5847C8.50134 28.1708 9.2962 28.5 10.125 28.5H20.125C20.9538 28.5 21.7487 28.1708 22.3347 27.5847C22.9208 26.9987 23.25 26.2038 23.25 25.375V4.125C23.25 3.2962 22.9208 2.50134 22.3347 1.91529C21.7487 1.32924 20.9538 1 20.125 1V1ZM15.125 27.25C14.0875 27.25 13.25 26.4125 13.25 25.375C13.25 24.3375 14.0875 23.5 15.125 23.5C16.1625 23.5 17 24.3375 17 25.375C17 26.4125 16.1625 27.25 15.125 27.25ZM20.75 22.25H9.5V4.75H20.75V22.25Z" fill="black"/>
                        </svg>
                        <div className="hiddenTells" style={ { display: openPhoneNumbers ? 'flex' : 'none' } }>
                            <a href={ 'tel: +380960130541' } title={ '380960130541' }>+380960130541</a>
                            <a href={ 'tel: +380980849649' } title={ '380980849649' }>+380980849649</a>
                        </div>
                    </div>
                </div>
                <div className="itemsContainer" id='products'>
                    {
                        props?.data
                            ? props.data.items.map( (item,key) => {
                                if (key >= 5 && key <= 14) {
                                    return(
                                        <Link
                                            to={`/catalog#${ key }`}
                                            className="item homeProductItem"
                                            key={ key }
                                            title={ item.name }
                                        >
                                            <div className="goToCatalogContainer">
                                                <h2>Перейти в каталог</h2>
                                            </div>
                                            <img src={require(`../../IMG/${ item.image }`)} alt={ item.name }/>
                                            <h2>{ item.name }</h2>
                                        </Link>
                                    )
                                } else return null
                            })
                            : null
                    }
                </div>
                <div id='contacts'>
                    <Slider { ...settings }>
                        {
                            slides2.map((slide,key) => {
                                return(
                                    <div key={ key } className={`topSlide topSlide2 s${ key + 3 }`}>
                                        <div className="slideContainerTwo">
                                            <div className="slideText2">
                                                <h1>
                                                    { slide.text }
                                                </h1>
                                            </div>
                                            <div className="contactContainer">
                                                <div className='tellLinksContainerContact'>
                                                    <a href={ 'tel: +380960130541' } title={ '380960130541' }>+380960130541</a>
                                                    <a href={ 'tel: +380980849649' } title={ '380980849649' }>+380980849649</a>
                                                </div>
                                                <div className="logoContainerContact">
                                                    <img src={require('../../IMG/LandIMG/logoBig.png')} alt="Lecler logo"/>
                                                </div>
                                                <div className="linksContainerContact">
                                                    {
                                                        links.map((link,key) => {
                                                            return(
                                                                <a href={ link.href } className='socialLinkContact' key={ key }>
                                                                    { link.name }
                                                                    { link.icon }
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8731.262452988545!2d24.70992186397516!3d48.91624515856115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1597118708496!5m2!1suk!2sua"
                        width="100%" height="470" frameBorder="0"
                        style={ { border:0 } } allowFullScreen="" aria-hidden="false"
                        tabIndex="0" url={ "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8731.262452988545!2d24.70992186397516!3d48.91624515856115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1597118708496!5m2!1suk!2sua" }>
                    </Iframe>
                </div>
                <footer>
                    <div className="up">
                        <Link to={ '/#home' }>
                            <img src={ require('../../IMG/LandIMG/main logo.png') } alt="Lecler logo" />
                        </Link>
                        <Link to={ '/catalog' }>Каталог</Link>
                    </div>
                    <div className="down">
                        <p>&#169; Lecler bakery { date.getFullYear() }</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HomePage;
