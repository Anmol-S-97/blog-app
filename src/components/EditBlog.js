import React, {useState, useEffect} from 'react';
import axios from 'axios';
// material ui


// VIEWBLOG COMPONENT
function EditBlog(match) {
// state
const [blog, setBlog] = useState({})
const [blogTitle, setTitle] = useState('');
const [blogBody, setBody] = useState('');
const [changedBlog, setChangedBlog] = useState({});

useEffect(() => {
    getBlogData();
}, [])

const getBlogData = async () => {
    const getBlogData = await axios.get(`http://jsonplaceholder.typicode.com/posts/${match.match.params.id}`)
    .then(response => {
        setBlog(response.data);
        // console.log(response.data);
        // console.log();
    })
    .catch(error => {
        console.log(error);
    });  
}

function setTitleHandler(e) {
    setTitle(e.target.value);
}

function setBodyHandler(e) {
    setBody(e.target.value);
    // console.log(blogBody);
}

function saveChangeHandler(){
    setChangedBlog({
        body: blogBody,
        title: blogTitle
    })
    axios.put(`https://jsonplaceholder.typicode.com/posts/${match.match.params.id}`, { changedBlog })
      .then(res => {
        console.log(res);
        // console.log(res.data);
      })
}

return (
<div>
    <input type="text" onChange={setTitleHandler} placeholder={blog.title} />
    <br />
    <br />
    <textarea id="" onChange={setBodyHandler} placeholder={blog.body} cols="30" rows="10"></textarea>    
    <br />
    <br />
    <button onClick={saveChangeHandler}>Save Changes</button>
</div>
)
}

export default EditBlog
