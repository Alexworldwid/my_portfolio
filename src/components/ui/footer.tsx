import React from 'react';

const Footer = () => {
    return (
        <footer id='footer' className="w-full lg:px-20 py-6 bg-color-1 inline-flex flex-col justify-center items-center">
            <article>
                <p className='flex items-center gap-2'>
                    <span className='text-2xl font-bold text-color-9'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM96,128a32,32,0,0,0,57.6,19.2,8,8,0,0,1,12.8,9.61,48,48,0,1,1,0-57.62,8,8,0,0,1-12.8,9.61A32,32,0,0,0,96,128Z"></path></svg></span>
                    <span className='flex items-center gap-1 text-color-6 text-sm font-normal font-inter leading-tight'>2025 | 
                        <a target='_blank' href="https://github.com/Alexworldwid/my_portfolio" className='underline'>coded</a>  
                        with &#10084;&#65039; by Obadun Adewale
                    </span>
                </p>
            </article>
        </footer>
    );
};

export default Footer;