const BlogList = (props) => { 
    const blogs = props.blog; 
    
    return ( 
        <div className="blog-list"> 
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <div className="blog-title"> 
                    <h2> {blog.title}</h2>
                    <button class='delete-button'>
                    <i class="fa fa-trash" ></i>
                    </button>
                    </div>
                    <p>Written by <strong>{blog.author}  </strong></p>
                </div>
             ))}
        </div>
     );
}
 
export default BlogList;