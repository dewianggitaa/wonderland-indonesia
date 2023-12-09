import React from 'react';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__popular app__bg' id='popular'>
          <h1>Popular</h1>
          <div className="container-popular">
            <div className='card-bali'>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <span className="stars"></span>
                    <h2 className="java">Bali</h2>
                  </div>
                </div>
                <div className="face face2">
                  <h2>01</h2>
                </div>
            </div>
            </div>

            <div className="card-jakarta">
              <div className='card'>
                <div className="face face1">
                    <div className="content">
                      <span className="stars"></span>
                      <h2 className="python">Jakarta</h2>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>02</h2>
                  </div>
              </div>
            </div>

            <div className="card-yogyakarta">
              <div className='card'>
                <div className="face face1">
                  <div className="content">
                    <span className="stars"></span>
                    <h2 className="cSharp">Yogyakarta</h2>
                  </div>
                </div>
                <div className="face face2">
                  <h2>03</h2>
                </div>
              </div>
            </div>
          </div>
  </div>
);

export default SpecialMenu;
