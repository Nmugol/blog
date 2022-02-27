const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="logo">
                blog
            </div>
            <div className="menu">
                <a className="link" href="/">Home</a>
                <a className="link" href="/content">New post</a>
            </div>
        </div>
    );
}
 
export default Navbar;
