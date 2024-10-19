import React, { useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCards";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const fetchProjects = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://vasu-portfolio.onrender.com/getProjects"
      );

      const projectData = data.projects.data;

      if (Array.isArray(projectData)) {
        setProjects(projectData);
        const allSkills = Array.from(
          new Set(projectData.flatMap((project) => project.technologies))
        );
        setSkills(allSkills);
      } else {
        console.error("Expected an array but got:", data.projects);
        setProjects([]);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
    return () => setProjects([]); // Cleanup on unmount
  }, [fetchProjects]);

  const handleSkillChange = (skill) => {
    setFilteredSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const filteredProjects = projects.filter(
    (project) =>
      filteredSkills.length === 0 ||
      project.technologies.every((tech) => filteredSkills.includes(tech))
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <FaSpinner className="animate-spin text-4xl" />
        <p className="ml-4 text-lg">Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p className="text-lg mb-4">Error: {error}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full  py-16 mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center my-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          My Recent <strong className="text-purple-500">Works</strong>
        </h1>
        <p className="text-gray-300 text-center mb-10 text-lg sm:text-xl">
          Here are a few projects I've worked on recently.
        </p>

        <div className="flex justify-center flex-wrap mb-8">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => handleSkillChange(skill)}
              className={`m-2 px-4 py-2 rounded-full text-sm font-semibold transition duration-300 sm:text-base ${
                !filteredSkills.includes(skill)
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-white text-center text-lg">
            No projects found that match the selected technologies. Try
            selecting different skills or check back later!
          </p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className=" bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 min-w-[400px] min-h-[450px] sm:min-w-[250px] sm:min-h-[400px] p-2"
              >
                <ProjectCard
                  imgPath={project.image}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.links?.[0]?.link || "#"}
                  demoLink={project.links?.[1]?.link || "#"}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
