import React, {useState} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateBlog() {
    // create state
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [blog, setBlog] = useState({});
    // useEffect with dependency array containing state

function getTitle(e){
    // console.log(e.target.value);
    setTitle(e.target.value);
    // console.log(title);
}

function getBody(e){
    // console.log(e.target.value);
    setBody(e.target.value);
    // console.log(body);
}
function createBlogHandler(){
    setBlog({
        'UserId': 1,
        'Id': 101,
        'Title': title,
        'Body': body,
    })
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { blog })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}
return (
    <div>
        {/* create form */}
        <TextField required id="standard-required" label="Required" defaultValue="" onChange={getTitle} />
        <TextField id="outlined-multiline-flexible" label="Multiline" multiline rowsMax={4} variant="outlined" onChange={getBody}/>
        <Button variant="outlined" color="primary" onClick={createBlogHandler}>Create Blog</Button>
        {/* create form end */}
    </div>
)
}

export default CreateBlog
