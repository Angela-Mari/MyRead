import React, {useState, useEffect} from "react";
import { Row, Col,Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import "./Explore.css"
import { getPosts } from '../actions/post';
import { getAllUsers } from "../actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SmallPost from '../components/SmallPost';
import BloggerCard from "../components/BloggerCard";

function Explore({getPosts, getAllUsers}) {

    const [posts, updatePosts] = useState([]);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('All');
    const [searchPosts, updateSearchPosts] = useState([]);
    const [searchTerms, updateSearchTerms] = useState("");
    const [currators, updateCurrators] = useState([]);

    useEffect(() => {
        getPosts().then(res => {
            updatePosts(res)
            updateSearchPosts(res)
            console.log(res)
            
        })
        getAllUsers().then(res => {
            updateCurrators(res)
            console.log("currators")
            console.log(res)
            setShow(true);
        }) 
    }, [])

    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    function handleSearch(e) {
        updateSearchPosts([])
        console.log("searching..." + searchTerms)
        if (searchTerms === ""){
            updateSearchPosts(posts)
        }
        const searchArray = []
        posts.forEach(element => {
            // console.log(element.title)
            if (element.title.toLowerCase().includes(searchTerms.toLowerCase())){
                // console.log("true")
                searchArray.push(element)
            }
            else if (element.description.toLowerCase().includes(searchTerms.toLowerCase())){
                searchArray.push(element)
            }
        });
        updateSearchPosts(searchArray)
        // console.log("done")
        console.log(searchPosts[0])
    }

    return (
        <Container fluid={true}>
                <Row>
                    <h1 className="my-title">Explore</h1>
                    <Row>
                        
                        <Col xs={2}>
                            <div className="d-flex justify-content-end">
                        <DropdownButton
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
                            onChange={(e)=>{updateSearchTerms(e.currentTarget.value)}}
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
                    <Row xs={1} sm={2} lg={3}>
                    {searchPosts.map((post, i) => {
                        return (
                        <Col>
                            <SmallPost picture = {post.picture} title = {post.title} text = {post.description} category={post.category} link = {post.url} likes = {post.likes} key = {post._id} id={post._id} />
                        </Col>
                        )
                    })}
                    {currators.map((currator, i) => {
                        return (
                        <Col>
                           <BloggerCard name = {currator.firstName + " " + currator.lastName} picture = {currator.picture} bio = {currator.bio}/>
                        </Col>
                        )
                    })}
                    </Row>
                    }
                </Row>
            
        </Container>
    );
}

Explore.propTypes = {
    getPosts: PropTypes.func.isRequired,
    getAllUsers: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
  });

export default connect(mapStateToProps,{getPosts, getAllUsers})(Explore);
