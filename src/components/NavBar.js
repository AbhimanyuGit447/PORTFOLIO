import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

// <header className="bg-blue-700">
const NavBar = () => {
    return (
        <header className="bg-red-50">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-current"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-black hover:text-gray-600 text-4xl font-serif tracking-widest">
                        ABHI
                  </NavLink>

                    <NavLink to="/post"
                        activeClassName="text-black bg-indigo-200"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-black hover:text-gray-600"
                    >
                        Blog Posts
                  </NavLink>

                    <NavLink to="/projects"
                        activeClassName="text-black bg-indigo-200"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-black hover:text-gray-600" >
                        Projects
                  </NavLink>

                    <NavLink to="/about"
                        activeClassName="text-black bg-indigo-200"
                        className="inflex-flex items-center py-3 px-3 my-6 rounded text-black hover:text-gray-600" >
                        About Me!
                  </NavLink>
                </nav>

                <div className = "inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/abhi-shaktawat-b30b55173/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />

                    <SocialIcon url="https://github.com/AbhimanyuGit447"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />

                    <SocialIcon
                        url="https://leetcode.com/abhi474747/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>

            </div>
        </header>
    )
}

export default NavBar;