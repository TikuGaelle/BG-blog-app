import BlogList from './bloglsit';
import useFetch from './use_fetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    //  const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //  }
     

    return ( 
        <div className="home">
            {error && <div className='error-alert'> {error} </div>}
            {/* icon should be centered on the page | handleDelete ={handleDelete} */}
            {isPending && <i className="fa fa-spinner loading-spinner"> </i> }
            {blogs && <BlogList blogs={blogs}   />}
            
        </div>
     );

      
}
 
export default Home;