import React from 'react'

function Navbar() {
    return (
        <div>
            {/* website name */}
            <nav className="bg-black flex row justify-center text-white font-serif md:text-7xl md:py-24 font-bold lg:text-5xl lg:py-10">
                <span>The Newston<span className='text-red-600'>.</span></span>
            </nav>

            {/* lines */}
            <div className='text-white md:text-5xl lg:text-3xl font-extrabold bg-black'>
                <div className="mx-10">
                    <hr className="w-full md:p-2 lg:p-1 bg-white"></hr>
                </div>

                {/* heading */}
                <div className='flex justify-center'>
                    <span className='md:py-10 lg:py-8 font-serif underline'>Top Stories</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;