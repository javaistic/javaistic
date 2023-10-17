import React from 'react';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline'

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
            
                <button onClick={scrollUp} className ="fixed bottom-12 right-12 w-12 h-12 text-5xl text-white bg-sky-500  rounded-full flex items-center justify-center hover:shadow-xl hover:ring-2 hover:ring-rose-500 hover:ring-offset-2 focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:bg-gray-700" > <ArrowUpIcon className="h-8 w-8" /> </button>
                
                
            )}
            

        </div>
    )
}

export default BackToTopButton;