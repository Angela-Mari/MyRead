import React, { useState } from "react";
import { Form, Col, Button, FloatingLabel } from "react-bootstrap";
import "../assets/css/edit.css";
function Edit(props) {
    console.log(props);
    const { userinfo, setbioObj } = props;
    const [name, setname] = useState(userinfo.name);
    const [intro, setintro] = useState(userinfo.intro);
    const [navigators, setnavigators] = useState(userinfo.navigators);
    const setnavigatorsItem = (value, idx) => {
        setnavigators(() => {
            navigators[idx].herf = value;
            return [...navigators];
        });
    };
    const set = () => {
        console.log(1);
        const info = {
            id: userinfo.id,
            headerImg: userinfo.headerImg,
            name: name,
            intro: intro,
            navigators: navigators,
        };
        setbioObj(info);
    };
    return (
        <Col md={4}>
            <div className="forms">
                <div className="title mt10">
                    <div>Edit profile</div>
                    <img src={userinfo.headerImg} />
                    <Button className="mt10" variant="primary">
                        Upload
                    </Button>
                </div>
            </div>

            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => {
                            setname(e.currentTarget.value);
                        }}
                    />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                    <Form.Control
                        style={{ height: "200px" }}
                        as="textarea"
                        value={intro}
                        onChange={(e) => {
                            setintro(e.currentTarget.value);
                        }}
                    />
                </FloatingLabel>
                {navigators.map((v, idx) => {
                    return (
                        <Form.Group className="mb-3" controlId="formBasicEmail" key={idx}>
                            <Form.Control
                                type="text"
                                value={v.herf}
                                placeholder={v.linkname}
                                onChange={(e) => {
                                    setnavigatorsItem(e.currentTarget.value, idx);
                                }}
                            />
                        </Form.Group>
                    );
                })}
                <Button className="mt10" variant="primary" onClick={set}>
                    Save
                </Button>
            </Form>
        </Col>
    );
}

export default Edit;
