const BlogList = ({blogs, handleDelete}) => { 
    // const blogs = props.blog; 
    
    return ( 
        <div className="blog-list"> 
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <div className="blog-title"> 
                    <h2> {blog.title}</h2>
                    <button className='delete-button' >
                    <i className="fa fa-trash" ></i>
                    </button>
                    </div>
                    <p>Written by <strong>{blog.author}  </strong></p>
                </div>
             ))}
        </div>
     );
}
 
export default BlogList;