import React from "react";
import { Card } from "antd";
import laser from "../Assets/laser.png";
import fiber from "../Assets/factory-1.png";
import bend from "../Assets/bending.png";
import robotic from "../Assets/welding-machine.png";
import factoryMachine from "../Assets/factory-machine.png";
import lathe from "../Assets/lathe.png";

const Cards = () => {
  return (
    <>
      <div className="card_container">
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={laser} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2" }}>
              <h1 className="cardh1">Laser Cutting</h1>
            </div>
            <div>
              Metal sheet and tube laser cutting machines manufactured by Hans
              Laser, the oldest and biggest brand for laser cutting in China.
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={bend} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2"  }}>
              <h1 className="cardh1">Penal Bender and Press Brakes</h1>
            </div>
            <div>
              21 axes panel benders, servo and hydraulic press brakes with
              unlimited customization and tooling options.
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={fiber} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2"  }}>
              <h1 className="cardh1">Fiber laser Spares</h1>
            </div>
            <div>
              We cater to spares and consumables for all Fiber laser cutting and
              welding machines. head over to www.fiberlaserspares.com to buy all
              spares online!
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={robotic} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2"  }}>
              <h1 className="cardh1">Robotic/Handheld Laser Welding</h1>
            </div>
            <div>
              Robotic/handheld/mold repair laser welding machines with
              applications across the fabrication industry.
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={factoryMachine} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2"  }}>
              <h1 className="cardh1">V-grooving Machines</h1>
            </div>
            <div>
              Special machine for achieving low outer bending radius and achieve
              perfect finishing. Useful in elevator manufacturing and other,
              similar industries.
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
        <Card hoverable className="pro_card">
          <div className="card_parent">
            <div className="card_img_container">
              <img style={{ width: "100%" }} src={lathe} alt="" />
            </div>
            <div style={{ margin: "20px 0", lineHeight:"1.2" }}>
              <h1 className="cardh1">Laser Engraving Machines</h1>
            </div>
            <div>
              Glass tube and metal tube CO2 laser machines to achieve finest
              quality engraving and cutting across non metallic materials.
            </div>
          </div>
          <div className="readm">
            <h4 style={{color:"darkgreen"}}> Read more &#x2192; </h4>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Cards;
