import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis proyectos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/fcg.png"
          title="Fun code generator"
          description="Aplicacion de ia para generar codigo html, css y js solo con bocetos sencillos."
        />
        <ProjectCard
          src="/iscd.png"
          title="Landing ISCD"
          description="Landing moderna para una empresa de seguridad"
        />
        <ProjectCard
          src="/fcgt.png"
          title="Fun code generator site"
          description="Sitio de bienvenida de fun code generator."
        />
      </div>
    </div>
  );
};

export default Projects;
