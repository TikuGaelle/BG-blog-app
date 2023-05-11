import {useState} from 'react';
import BlogList from './bloglsit';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        {title: 'My Welcome Party', body: 'lorem ipsum...', author: 'Marco', id: 2 },
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Luigi', id: 3 },
        {title: 'Why i hate CSS', body: 'lorem ipsum...', author: 'Four', id: 4 },
    ]);

    //  const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //  }

    return ( 
        <div className="home">
             <BlogList blog={blogs} />
            
        </div>
     );
}
 
export default Home;