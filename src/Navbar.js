const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="menu">
                <a href="/" className="link">Home</a>
                <a href="/create" className="link">New post</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
