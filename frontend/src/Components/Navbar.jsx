import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <>
        <div className="py-15 px-9">
            <div className="flex justify-center items-center gap-8">
                <Link to="/sign" className=""><div className="py-1 px-10 bg-gray-900 text-white rounded sm:py-3 px-12 md:py-4 px-13 lg:py-4 px-14"><p className="sm:text-2xl md:text-3xl lg:text-4xl">Sign In </p></div></Link>
                 <Link to="/login" className="" ><div className="py-1 px-10 bg-gray-900 text-white rounded sm:py-3 px-12 md:py-4 px-13 lg:py-4 px-14"><p className="sm:text-2xl md:text-3xl lg:text-4xl">Login</p></div></Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-2 mt-12 max-w-4xl max-auto" >
                <a href="/"><div className="py-3 px-10 bg-gray-900 text-white rounded display-inblock w-fit mb-6">create post</div></a>
                <a href="/"><div className="py-3 px-10 bg-gray-900 text-white rounded display-inblock w-fit mb-6" >create post</div></a>
                <a href="/"><div className="py-3 px-10 bg-gray-900 text-white rounded display-inblock w-fit mb-6">Update post</div></a>
                <a href="/"><div className="py-3 px-10 bg-gray-900 text-white rounded display-inblock w-fit mb-6">Read post</div></a>
                <a href="/"><div className="py-3 px-10 bg-gray-900 text-white rounded display-inblock w-fit mb-6">Delete post</div></a>
    
            </div>
        </div>
        </>
    )
};
export default Navbar;