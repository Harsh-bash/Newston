function Footer() {
    return (
        <>
            <hr />
            <div className="flex row justify-center md:text-4xl lg:text-lg space-x-16 md:p-8 lg:p-2 bg-black text-gray-300 ">
                <span>
                    <span>Project @ React-2  -</span>
                    <span className="font-semibold">Ishu</span>
                </span>
                <span>
                    <a className='underline' style={{ "WebkitTapHighlightColor": "transparent" }} href="https://github.com/Harsh-bash">Source Code</a>
                </span>
            </div>
        </>
    )
}

export default Footer;