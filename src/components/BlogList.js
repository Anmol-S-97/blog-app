import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// material ui dependencies
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// custom styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

// COMPONENT FUNCTION
function BlogList() {
    // custom styling with material
const classes = useStyles();
    // create state to save bloglist
const [blogList, setBlogList] = useState([]);
    // create useEffect hook to make api call
useEffect(() => {
    getBlogData()
}, []) 
    // create a function to make API call
    // use async await syntax to make sure everything works properly
const getBlogData = async () => {
    const getBlogData = await axios.get(`http://jsonplaceholder.typicode.com/posts/`)
    .then(response => {
        // console.log(response.data);
        setBlogList(response.data);
        // console.log('this is the state array', blogList);
    })
    .catch(error => {
        console.log(error);
    });  
}

async function deleteBlogHandler(id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then( response => {
        console.log(response);
    })
}

return (
<div className={classes.root}>
    {/* navbar with create blog button */}
<AppBar position="static">
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography align='left' variant="h6" className={classes.title}>
        Blog App
        </Typography>
        <Button color="inherit"><Link to='createblog'>Create Blog</Link></Button>
    </Toolbar>
</AppBar>
    {/* navbar with create blog button end */}
    {/* bloglist */}
<TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
        <TableRow>
        <TableCell align="center" >Id</TableCell>
        <TableCell align="center">Title</TableCell>
        <TableCell align="center">Actions</TableCell>
        {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
        {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
        </TableRow>
    </TableHead>
    <TableBody>
        {blogList.map((blog) => (
        <TableRow key={blog.id}>
            <TableCell component="th" align='center' scope="row">{blog.id}</TableCell>
            <TableCell align="center"><Button color="primary"><Link to={`viewblog/${blog.id}`}>{blog.title}</Link></Button></TableCell>
            <TableCell align="center">
                <Button variant="outlined" color="primary"><Link to={`editblog/${blog.id}`}>Edit</Link></Button>
                <Button variant="outlined" onClick={() => deleteBlogHandler(blog.id)} color="primary">Delete</Button>
            </TableCell>
            {/* <TableCell align="center">{blog.carbs}</TableCell> */}
            {/* <TableCell align="center">{blog.protein}</TableCell> */}
        </TableRow>
        ))}
    </TableBody>
    </Table>
</TableContainer>
    {/* bloglist end */}
    {/*  */}
</div>
)
}

export default BlogList
