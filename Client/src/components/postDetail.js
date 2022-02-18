import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Post.css";
import { deletePost, getUserPosts } from "../actions/post";
import { addLike } from "../actions/post";
import { connect } from "react-redux";
import { loadUser } from "../actions/auth";
import PropTypes from "prop-types";
import tempPic from "../pages/Carousel/pexels-jess-loiterton-4784090.jpg";
function PostDetial({ getUserPosts, auth: { user } }) {
    const history = useHistory();

    const [params, setparams] = useState({});
    const routeparams = new Map([history.location.search.split("?")[1].split("=")]);

    const [list, setlist] = useState([]);
    useEffect(() => {
        getUserPosts(user._id).then((posts) => {
            console.log(posts);
            const p = posts.filter((v) => {
                if (v._id == routeparams.get("id")) {
                    return v;
                }
            });
            setparams(p[0]);
        });
    }, []);
    console.log(params);
    async function handleDelete(e) {
        /* e.preventDefault();
        console.log("delete");
        await deletePost(params.id);
        history.push("/blog/stoll"); */
    }
    //TODO: remove like
    async function handleLike(e) {
        /*    e.preventDefault();
        console.log("like");
        await addLike(params.id);
      
        history.push("/blog/stoll"); */
    }
    function handleComment(e) {
        e.preventDefault();
        console.log("comment");
    }
    /*  return <div></div>; */
    return (
        <Container style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                <Row>
                    <Col className="col-sm-auto">
                        <img src={tempPic} width="300" height="200px" style={{ objectFit: "cover" }} />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>{params.title}</h3>
                            </Col>
                            <Col className="col-sm-auto">
                                <Badge pill bg="primary" className="custom-badge">
                                    {params.category}
                                </Badge>
                            </Col>
                        </Row>
                        <div>{params.description}</div>
                        <Row className="bottom">
                            <Button variant="Link" style={{ width: "40px" }} onClick={(e) => handleComment(e)}>
                                <img
                                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"
                                    height="25px"
                                    weight="25px"
                                />
                            </Button>
                            <Button variant="Link" style={{ width: "80px" }} onClick={(e) => handleLike(e)}>
                                <span style={{ fontSize: "1.5rem" }}>{params.likes?.length == 0 ? "" : params.likes?.length}</span>{" "}
                                <img
                                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/50/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png"
                                    height="25px"
                                    weight="25px"
                                    style={{ marginBottom: "0.5rem" }}
                                />
                            </Button>
                            <Button variant="Link" style={{ width: "40px" }} onClick={(e) => handleDelete(e)}>
                                <img src="https://img.icons8.com/pastel-glyph/64/000000/trash.png" height="25px" weight="25px" />
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

PostDetial.propTypes = {
    getUserPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, { getUserPosts, loadUser })(PostDetial);
