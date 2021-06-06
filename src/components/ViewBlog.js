import React, {useState, useEffect} from 'react';
import axios from 'axios';
// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// VIEWBLOG COMPONENT
function ViewBlog(match) {
// state
const [blog, setBlog] = useState({})

useEffect(() => {
    getBlogData();
}, [])

const getBlogData = async () => {
    const getBlogData = await axios.get(`http://jsonplaceholder.typicode.com/posts/${match.match.params.id}`)
    .then(response => {
        setBlog(response.data);
        console.log(response.data);
        console.log();
    })
    .catch(error => {
        console.log(error);
    });  
}

return (
<div>
       
<Card >
    <CardContent>
    <Typography variant='h2' color="textSecondary" gutterBottom></Typography>
    <Typography variant="h5" component="h2">
    {blog.title}
    </Typography>
    <Typography variant="body2" component="p">
        <br />
    {blog.body}
    </Typography>
    </CardContent>
</Card>
    </div>
)
}

export default ViewBlog
