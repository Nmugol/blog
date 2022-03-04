import { useState } from "react";

const Home = () => {

    const [blogs, steblog] = useState(
        [
            {title: 'My new website', body: 'lorem ipmum... ', autor: 'Mario', id: 1},
            {title: 'Join to blog', body: 'lorem ipmum... ', autor: 'Andrzej', id: 2},
            {title: 'Beb dev top tip!', body: 'lorem ipmum... ', autor: 'Mario', id: 3}
        ]
    );

    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog_preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Autor - {blog.autor}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;