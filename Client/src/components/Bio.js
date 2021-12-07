import React from "react";
import "../assets/css/bio.css";
import { Col } from "react-bootstrap";
// If you pass in an array, use the code below to comment it out for you
function Bio(props) {
    const { params: bioList } = props;

    return (
        <Col>
            <div key={bioList.id} className="bio">
                <div className="bioIntro">About the Currator</div>
                <div className="img_div mt10">
                    <img src={bioList.headerImg} />
                </div>
                <div className="username mt10">{bioList.name}</div>
                <div className="introInfo mt10">{bioList.intro}</div>

                <div className="navgitors mt10">
                    {bioList.navigators.map((routers, index) => {
                        return (
                            <a href={routers.herf} key={index}>
                                <img src={routers.icon} alt={routers.icon} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </Col>
    );
}
export default Bio;
