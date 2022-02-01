import React, {useState, useEffect} from "react";
import { Row, Col,Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import "./Explore.css"
import { getPosts } from '../actions/post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from '../components/Post';

function Explore({getPosts}) {

    const [posts, updatePosts] = useState([]);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('All');
    const [searchPosts, updateSearchPosts] = useState();
    const [searchTerms, updateSearchTerms] = useState("");

    useEffect(() => {
        getPosts().then(res => {
            updatePosts(res)
            updateSearchPosts(res)
            setShow(true);
        }) 
    }, [])

    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    function handleSearch() {
        console.log("searching...")
        posts.forEach(element => {
            if (element.title.includes(searchTerms)){
                updateSearchPosts([...element])
            }
            if (element.description.includes(searchTerms)){
                updateSearchPosts([...element])
            }
        });
        console.log("done")
        console.log(searchPosts)
    }

    return (
        <Container fluid={true}>
                <Row>
                    <h1 className="my-title">Explore</h1>
                    <Row>
                        <Col xs={2}>
                            <div className="d-flex justify-content-end">
                        <DropdownButton
                        alignRight
                        title={value}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Posts">Posts</Dropdown.Item>
                            <Dropdown.Item eventKey="Blogs">Blogs</Dropdown.Item>
                        </DropdownButton>
                        </div>
                        </Col>
                        <Col xs={8}>
                        <input
                            type="text"
                            style={{width:"100%", height:"40px"}}
                            id="header-search"
                            placeholder={`Search ${value}`}
                            onChange={(e)=>{updateSearchTerms(e)}}
                            name="s" 
                        />
                        </Col>
                        <Col xs={2}>
                        <Button onClick={handleSearch}>Search</Button>
                        </Col>
                    </Row>
                </Row>
                <Row>
                {show &&
                    <Container fluid={true}>
                    <Row>
                    <Col>
                    <div style={{marginLeft:"1rem", marginRight:"1rem"}}>
                        {
                        searchPosts.map((post, idx) => 
                            <Post title = {post.title} text = {post.description} category={post.category} link = {post.url} likes = {post.likes} key = {post._id} id={post._id} updatePosts={posts} setUpdatePosts={updatePosts}/> )
                        }
                    </div>
                    </Col>
                    </Row>
                    </Container>
                    }
                </Row>
            
        </Container>
    );
}

Explore.propTypes = {
    getPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{getPosts})(Explore);
