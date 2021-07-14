import React from "react";
import {useState, useEffect} from "react";
import sanityClient from "../client.js";

const Project = () => {


const [projectData, setProjectData] = useState(null);

useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
        title,
        date,
        place, 
        description,
        projectType,
        link,
        tags
    }`)
    .then((data) => setProjectData(data))
    .catch(console.error);
}, [])

    return (
        <main className = "bg-green-200 min-h-screen p-12">
            <section className = "container mx-auto ">
                <h1 className = "text-5xl text-black flex justify-center font-serif">My Projects</h1>
                <h2 className = "text-lg text-black flex justify-center mb-12 font-serif">Welcome to my Project Page!</h2>
                <section className = "grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className = "relative roubnded-lg shadow-xl bg-white p-16">
                        <h3 className = "text-black text-3xl font-bold mb-2 hover:text-blue-600">
                            <a
                                href = {project.link}
                                alt = {project.title}
                                target = "_blank"
                                rel = "noopener noreferrer"
                            >{project.title} 
                            </a>
                        </h3>
                            <div className = "text=gray-500 text-xs space-x-4">
                                <span>
                                    <strong className = "font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className = "font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>

                                <span>
                                    <strong className = "font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                
                                <p className = "my-6 text-lg text-gray-900 leading-relaxed">{project.description}</p>
                                
                                <a href = {project.link} rel = "noopener noreferrer" target = "_blank" className = "text-red-500 font-bold hover:underline hover:text-red-400">
                                View The Project{" "}
                                <span role = "img" aria-label = "right pointer">👉</span>
                                </a>
                             
                            </div>      
                    </article>
                ))}
                </section>
            </section>
        </main>
    )
}


export default Project;