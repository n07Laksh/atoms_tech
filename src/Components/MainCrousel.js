import React from "react";
import "../Style/MainCrousel.css";
import { Carousel } from "antd";
import Crousel1 from "../Assets/firstLaser.png";
import Crousel2 from "../Assets/alm-landing-image.png";
import Crousel3 from "../Assets/r5-landing-image.png";
import Crousel4 from "../Assets/gx-two.png";
import Crousel5 from "../Assets/gx-series-mob.png";
import Crousel6 from "../Assets/fd6ecd7ec7-300x172.png"

const divStyle = {
  margin: "0",
};

const MainCrousel = () => (
  <Carousel autoplay={false} autoplaySpeed={4000}>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div>
            <div className="crouselMainContent">
              <h1>
                Get More Done with HSG GE Sheet and Tube Laser Cutting Machine
              </h1>
            </div>
            <div className="crouselMainContent2">
              <p className="crousePara">
                Say goodbye to separate machines and hello to efficiency with
                the GE IV Sheet and Tube Cutter.
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv">
            <img src={Crousel1} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div style={{marginTop:"50px"}}>
            <div className="crouselMainContent">
              <h1>
              5 Axis 3D Laser Cutting Machine Hanse Laser
              </h1>
            </div>
            <div className="crouselMainContent2">
              <p className="crousePara">
              Highly efficient, customisable and perfect solution for automobile industry.
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv crousel6">
            <img src={Crousel6} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div>
            <div className="crouselMainContent">
              <h1>
                Take Your Welding On-The-Go with Alpha Laser's ALM Series
                Machine
              </h1>
            </div>
            <div className="crouselMainContent">
              <p className="crousePara">
                Precision meets portability with ALM's laser welding machine -
                perfect for on-site work, get the job done anywhere, anytime.
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv">
            <img src={Crousel2} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div>
            <div className="crouselMainContent">
              <h1>HSG R5 - The professional Laser tube cutting solution</h1>
            </div>
            <div className="crouselMainContent">
              <p className="crousePara">
                Cut through any project with confidence using the high-precision
                R5 Series from HSG Laser - the ultimate tool for professional
                results.
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv">
            <img src={Crousel3} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div>
            <div className="crouselMainContent">
              <h1>
                GCC Spirit - Laser engraving and cutting machine: Precision at
                Your Fingertips
              </h1>
            </div>
            <div className="crouselMainContent">
              <p className="crousePara">
                Take your creativity to new heights with GCC Spirit laser
                engraving and cutting machine. Create intricate designs,
                signage, and more with ease, and achieve stunning results every
                time
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv">
            <img className="crousel5img" src={Crousel4} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div style={divStyle}>
      <div className="contentStyle">
        <div className="crouselItem">
          <div>
            <div className="crouselMainContent">
              <h1>
                Take Your Metal Cutting to the Next Level with HSG GX Pro Laser
                System
              </h1>
            </div>
            <div className="crouselMainContent">
              <p className="crousePara">
                Elevate your metalworking to new heights with the versatile and
                easy-to-use HSG GX Pro Laser cutting machine - designed for
                maximum performance and flexibility.
              </p>
            </div>
            <div className="crouselAccDetails" style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">6526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
              <div>
                <div  style={{display: "flex",justifyContent: "center"}}>
                  <div>
                    <span className="mainTxt">0.526K</span>
                    <sub>W</sub>
                  </div>
                </div>
                <div className="detTxt">Max laser power</div>
              </div>
            </div>
          </div>
          <div className="crouselImgDiv">
            <img className="crousel5img" src={Crousel5} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Carousel>
);
export default MainCrousel;
