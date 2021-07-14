import React from "react";
import BgImage1 from "../BgImage1.jpeg";
import londonsky from "../londonsky.jpeg";

const Home = () => {
    return (
        <main>
            <img src = {BgImage1} alt = "London" className = "absolute object-cover w-full h-full"/>
            <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className = "mr-auto text-6xl text-white font-serif leading-none lg:leading-snug home-name">Bonjour. I'm ABHI.</h1>
            </section>
        </main>
    )
}

export default Home;


