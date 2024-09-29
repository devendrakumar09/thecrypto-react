import React from 'react'
import Background from './background_image.jpg'
const HeaderUi = () => {

    const styles = {
        backgroundImage: `url(${Background})`, // Replace with your image URL
        backgroundSize: 'cover', // Use 'contain' if you want to maintain aspect ratio
        backgroundPosition: 'center', // Center the image        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Text color for contrast
      };

    return (        
        <>
            <main className="bg-white font-open-sans shadow-md" style={styles}>
                <div className="container mx-auto px-8 py-8 lg:py-28 relative flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light text-white leading-tight mb-4">Our recruiting strategy <strong className="font-black text-3xl sm:text-4xl block">hit your hiring plan</strong></h1>
                        <p className="text-center lg:text-left sm:text-lg text-white lg:pr-40 leading-relaxed">You must be able to convey information via phone, email, and in person. You want to make sure your tone is always professional but friendly.</p>
                        <a href="/" className="bg-blue-400 hover:bg-blue-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">Apply Now</a>
                        
                    </div>
                    {/* <div className="w-full sm:w-2/3 lg:absolute top-0 right-0 bottom-0 lg:mr-8">
                        <image scr={MyInage} alt="the image" />
                    </div> */}
                </div>
            </main>
        </>
    )
}

export default HeaderUi