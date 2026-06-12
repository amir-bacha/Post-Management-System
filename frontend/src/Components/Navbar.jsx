const Navbar=()=>{
    return (
        <>
        <div className="flex justify-between items-center  ">
            <div>left</div>
            <div className="">
                <ul>
                    <li><a href="/sign">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/create">Create post</a></li>
                    <li><a href="/update">Update post</a></li>
                    <li><a href="/read">Read your post</a></li>
                    <li><a href="/delete">Delete Post</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar;