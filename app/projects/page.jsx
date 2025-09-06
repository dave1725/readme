import React from 'react';
import { IoHardwareChip } from "react-icons/io5";

const Projects = () => {
  return (
    <>
        <div id="projects" className="mb-[100px]"></div>

        <div className="flex h-[100vh] w-[100vw] justify-center">
            <div className="flex flex-col">
                <p className="flex mb-[100px] flex-row gap-5 justify-center text-center items-center text-[50px] font-mono">My Projects <IoHardwareChip /></p>
            </div>
        </div>

    </>
  )
}

export default Projects;
