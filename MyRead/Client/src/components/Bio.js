import React from "react";
import "../assets/css/bio.css";
import { Col } from "react-bootstrap";
// If you pass in an array, use the code below to comment it out for you
function Bio(props) {
    const { params: bioList, isShowEdit: isShowEdit } = props;
    const edit = () => {
        return isShowEdit();
    };
    return (
        <Col md={4}>
            <div key={bioList.id} className="bio">
                <div className="bioIntro">{bioList.name}.</div>
                <div className="img_div mt10">
                    <img src={bioList.headerImg} />
                </div>
                <div className="username mt20">{bioList.name}</div>
                <div className="introInfo mt20">{bioList.intro}</div>
                <div className="follow mt10">Follow</div>
                <div className="follow mt10" onClick={edit}>
                    Edit
                </div>
                <div className="navgitors mt20">
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
