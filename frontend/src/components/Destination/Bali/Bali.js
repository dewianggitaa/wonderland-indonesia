import React, {useRef, useState} from "react";
import jimbaran from '../../../assets/bali-jimbaran.png';
import nusapenida from '../../../assets/bali-nusapenida.png';
import pantaikuta from '../../../assets/bali-pantaikuta.png';
import puralot from '../../../assets/bali-puratanahlot.png';
import tegalalang from '../../../assets/bali-tegalalang.png';
import monkeyforest from '../../../assets/bali-ubudmonkeyforest.png';
import puraulun from '../../../assets/balu-purauludanu.png';
import './Bali.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


function Bali() {
    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        const lists = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(lists[0]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % lists.length);
    };

    const handlePrevClick = () => {
        const lists = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(lists[lists.length - 1]);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + lists.length) % lists.length);
    };

    return(
        <div className="body">
            <div className="container">
                <div id="slide" ref={slideRef}>
                    <div className="item" style={{backgroundImage: `url(${jimbaran})`}}>
                        <div className="content">
                            <div className="name">JIMBARAN</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${nusapenida})`}}>
                        <div className="content">
                            <div className="name">NUSA PENIDA</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${pantaikuta})`}}>
                        <div className="content">
                            <div className="name">KUTA BEACH</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${puralot})`}}>
                        <div className="content">
                            <div className="name">PURA LOT </div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${tegalalang})`}}>
                        <div className="content">
                            <div className="name">TEGALALANG</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${monkeyforest})`}}>
                        <div className="content">
                            <div className="name">MONKEY FOREST</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${puraulun})`}}>
                        <div className="content">
                            <div className="name">PURA ULUN</div>
                            <div className="des">hlao djkai sjheg agsdg sjdhsgj shdshgds</div>
                            <button>See more</button>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="prev" onClick={handlePrevClick}><FontAwesomeIcon icon={faAngleLeft} /></button>
                        <button className="next" onClick={handleNextClick}><FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Bali;