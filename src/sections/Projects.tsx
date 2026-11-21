
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle2, Award, Laptop, Code, ArrowLeft, ArrowRight, Server, Database, Cpu } from 'lucide-react';
import { fadeUp, containerStagger } from '../utils/scrollVariants';
// Helper to map technology names to icons
const getTechIcon = (tech: string) => {
  const lower = tech.toLowerCase();
  if (lower.includes('react')) return <Code size={14} className="text-accent-violet" />;
  if (lower.includes('node')) return <Server size={14} className="text-accent-violet" />;
  if (lower.includes('typescript')) return <Code size={14} className="text-accent-violet" />;
  if (lower.includes('postgresql') || lower.includes('prisma')) return <Database size={14} className="text-accent-violet" />;
  if (lower.includes('python')) return <Code size={14} className="text-accent-violet" />;
  if (lower.includes('esp32') || lower.includes('mqtt')) return <Cpu size={14} className="text-accent-violet" />;
  // fallback icon
  return <Code size={14} className="text-accent-violet" />;
};

import GithubIcon from '../components/icons/GithubIcon';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      className="group bg-white/5 backdrop-blur-md border border-violet-600 rounded-2xl p-4 sm:p-6 flex flex-col h-full hover:border-blue-500 hover:ring-2 hover:ring-accent-violet/40 transition-all duration-250 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] relative overflow-hidden motion-reduce:transform-none motion-reduce:transition-none"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-violet/20 text-accent-violet border border-accent-violet/30 font-medium self-start mb-2">
          Featured
        </span>
      )}

      {/* Project Image */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl mb-5 transition-transform duration-250 group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      ) : (
        <div className="w-full h-48 bg-white/5 rounded-xl mb-5 flex items-center justify-center text-foreground/40 border border-white/5">
          {project.id === 'realmeta' && <Database size={32} className="text-accent-violet/60" />}
          {project.id === 'smart-grid' && <Cpu size={32} className="text-accent-violet/60" />}
          {project.id === 'karmic-canteen' && <Server size={32} className="text-accent-violet/60" />}
          {project.id === 'talentiq' && <Laptop size={32} className="text-accent-violet/60" />}
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent-violet transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-foreground/70 leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      {/* Achievement */}
      {project.achievement && (
        <p className="text-sm text-accent-violet mb-4 font-medium flex items-center gap-1.5">
          <Award size={16} />
          {project.achievement}
        </p>
      )}

      {/* View Details and Links Wrapper */}
      <div className="mt-auto">
        <button className="flex items-center gap-2 self-start mb-2 min-h-[44px] px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-blue-500 transition-all duration-250 hover:brightness-110 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 motion-reduce:transition-none">
          View Details <ExternalLink size={14} className="ml-1" />
        </button>
        <div className="flex flex-wrap gap-4 pt-2 border-t border-white/5">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-foreground hover:text-accent-violet transition-colors z-10 flex items-center gap-1 py-2 px-3"
            >
              <GithubIcon size={15} />
              GitHub Repository →
            </a>
          )}

          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue transition-colors z-10"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close overlay on Escape key and handle scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-24 bg-bg-primary overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent-violet/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        {/* Section Heading */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-center text-foreground mb-4"
          variants={fadeUp}
        >
          My Projects
        </motion.h2>

        <p className="text-center text-foreground/60 max-w-2xl mx-auto mb-14">
          Here are some of the projects I've worked on,
          exploring software development, AI and IoT.
        </p>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
            >
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Full-screen Project Details Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] bg-bg-primary/95 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Banner Area */}
              <div className="relative w-full h-48 sm:h-64 bg-gradient-to-r from-accent-violet/20 via-purple-900/30 to-blue-900/20 border-b border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-foreground/40 gap-2">
                    {selectedProject.id === 'realmeta' && <Database size={44} className="text-accent-violet/60" />}
                    {selectedProject.id === 'smart-grid' && <Cpu size={44} className="text-accent-violet/60" />}
                    {selectedProject.id === 'karmic-canteen' && <Server size={44} className="text-accent-violet/60" />}
                    {selectedProject.id === 'talentiq' && <Laptop size={44} className="text-accent-violet/60" />}
                    <span className="text-sm font-medium">Project Preview</span>
                  </div>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-gray-900 border border-violet-500 text-white hover:bg-red-600 hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors z-20"
                >
                  <X size={20} />
                </button>

                {/* Navigation Buttons */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
                      const prev = projects[(currentIdx - 1 + projects.length) % projects.length];
                      setSelectedProject(prev);
                    }}
                    className="p-2 rounded-full bg-accent-violet/80 hover:bg-accent-violet/90 border border-violet-300 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIdx = projects.findIndex((p) => p.id === selectedProject.id);
                      const next = projects[(currentIdx + 1) % projects.length];
                      setSelectedProject(next);
                    }}
                    className="p-2 rounded-full bg-accent-violet/80 hover:bg-accent-violet/90 border border-violet-300 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                {selectedProject.achievement && (
                  <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-violet text-white text-xs font-semibold shadow-lg">
                    <Award size={15} />
                    {selectedProject.achievement}
                  </div>
                )}
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[#E5E7EB] leading-relaxed text-base sm:text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-[#C4B5FD] mb-3">
                      Key Features
                    </h4>
                    <ul className="grid gap-4 md:grid-cols-2">
                      {selectedProject.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="bg-black/40 backdrop-blur-sm border border-violet-300/30 rounded-xl p-4 hover:bg-black/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-violet-300 shrink-0" />
                            <p className="font-bold text-white">{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Role / Contribution */}
                {selectedProject.role && (
                  <div>
                    <h4 className="text-lg font-semibold text-[#C4B5FD] mb-2">
                      My Contribution
                    </h4>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed bg-accent-violet/10 p-4 rounded-xl border border-accent-violet/30">
                      {selectedProject.role}
                    </p>
                  </div>
                )}

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-[#C4B5FD] mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 text-xs px-3.5 py-2 bg-accent-violet/15 border border-accent-violet/30 rounded-xl text-white font-medium"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold transition-colors"
                    >
                      <GithubIcon size={17} />
                      View on GitHub
                    </a>
                  )}

                  {selectedProject.live && selectedProject.live !== '#' && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-violet hover:bg-accent-blue text-white text-sm font-semibold transition-colors shadow-lg shadow-violet-500/20"
                    >
                      <ExternalLink size={17} />
                      Open Live Demo
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="ml-auto px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 text-white hover:text-white text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
