import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
 const projects = [
    {
      href: "https://intervio-ai-bqpv.vercel.app/",
      src: "/ai-resume-builder.png",
      title: "INTERVIO.AI",
      description:
        "A production-ready AI Interview Agent SaaS — upload your resume, get AI-generated technical & HR questions, and receive intelligent feedback. Credit-based Razorpay payments, Firebase Google Auth with JWT-secured routes, and an MVC-structured Express.js + MongoDB backend.",
    },
    {
      href: "https://ai-resume-builder-328.pages.dev/",
      src: "/intervio.png",
      title: "AI Resume Builder",
      description:
        "An AI-powered SaaS platform using the OpenAI API for intelligent resume content generation, cutting resume creation time by 40%. Multi-tenant Clerk Auth + JWT, Strapi CMS + PostgreSQL backend with 99.9% uptime, and real-time PDF export in under 30 seconds.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-5" id="projects">
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Featured Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.href}
            />
            <div className="absolute top-3 right-3 text-gray-400 hover:text-white transition duration-300">
              <FiExternalLink size={20} />
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
