import React from 'react'
import './Items.css'
import borobudur from  '../../assets/borobudur.png'
import bali from '../../assets/bali-nusapenida.png'
import { Link } from 'react-router-dom'

function Items() {
    return (
        <div className='Home'>
                <div className='card__container'>
                    <div className='card'>
                        <img src={bali}/>
                        <div className='card__content'>
                            <h3>Bali</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <Link to="/Home/Bali">
                            <button>View More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={borobudur}/>
                        <div className='card__content'>
                            <h3>Borobudur</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <a href='' className='btn'>View More</a>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={borobudur}/>
                        <div className='card__content'>
                            <h3>Bali</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <a href='' className='btn'>View More</a>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={borobudur}/>
                        <div className='card__content'>
                            <h3>Borobudur</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <a href='' className='btn'>View More</a>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={borobudur}/>
                        <div className='card__content'>
                            <h3>Borobudur</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <a href='' className='btn'>View More</a>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={borobudur}/>
                        <div className='card__content'>
                            <h3>Borobudur</h3>
                            <p>sasageyo sasageyi siinsoo sasageyo mada kono sekaiwa</p>
                            <a href='' className='btn'>View More</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Items