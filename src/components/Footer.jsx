import React from 'react'
import github from './Images/github.svg'
import twitter from './Images/twitter.svg'
import insta from './Images/instagram.svg'

function Footer() {
    return (
        <>
            <hr />
            <div className="flex row justify-center text-4xl space-x-9 w-full p-8 bg-black text-gray-300 lg:p-4 ">
                <span>
                    Project @ React-2  -
                    <p className="font-semibold">Ishu</p>
                </span>
                <div className='md:w-16 space-x-3'>
                    <a href="https://github.com/Harsh-bash">
                        <img src={github} alt="" />
                    </a>
                </div>
                <div className='md:w-16 space-x-3'>
                    <a href="https://www.instagram.com/ishu.codes/">
                        <img src={insta} alt="" />
                    </a>
                </div>
                <div className='md:w-16 space-x-3'>
                    <a href="https://twitter.com/hashy_harsh">
                        <img src={twitter} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;