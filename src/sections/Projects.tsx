
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
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-accent-violet/60 hover:ring-2 hover:ring-accent-violet/40 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] relative overflow-hidden"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* View Details Indicator */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-wider text-accent-violet group-hover:text-violet-300 transition-colors uppercase flex items-center gap-1">
          VIEW DETAILS ↗
        </span>
        {project.featured && (
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-violet/20 text-accent-violet border border-accent-violet/30 font-medium">
            Featured
          </span>
        )}
      </div>

      {/* Project Image */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-xl mb-5 transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-48 bg-white/5 rounded-xl mb-5 flex items-center justify-center text-foreground/40 border border-white/5">
          Project Preview
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-violet transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-foreground/70 leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      {/* Achievement */}
      {project.achievement && (
        <p className="text-sm text-accent-violet mb-4 font-medium flex items-center gap-1.5">
          <Award size={16} />
          {project.achievement}
        </p>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="flex items-center gap-1 text-xs px-3 py-1.5 bg-accent-violet/10 border border-accent-violet/20 rounded-full text-foreground/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Links */}
      <div className="mt-auto flex flex-wrap gap-4 pt-2 border-t border-white/5">
        {project.github && project.github !== '#' && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-medium text-foreground hover:text-accent-violet transition-colors z-10 flex items-center gap-1"
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
        className="relative z-10 max-w-7xl mx-auto px-6"
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
              transition={{ duration: 0.3 }}
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
                    <Laptop size={44} className="text-accent-violet/60" />
                    <span className="text-sm font-medium">Project Banner & Preview</span>
                  </div>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-foreground hover:text-accent-violet transition-colors z-20"
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
                      const currentIdx = projects.findIndex(p => p.id === selectedProject.id);
                      const prev = projects[(currentIdx - 1 + projects.length) % projects.length];
                      setSelectedProject(prev);
                    }}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-foreground hover:text-accent-violet transition-colors"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIdx = projects.findIndex(p => p.id === selectedProject.id);
                      const next = projects[(currentIdx + 1) % projects.length];
                      setSelectedProject(next);
                    }}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-foreground hover:text-accent-violet transition-colors"
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 text-violet-300">
                      Key Features
                    </h4>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {selectedProject.keyFeatures.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-foreground/80 bg-white/5 p-3 rounded-xl border border-white/5"
                        >
                          <CheckCircle2 size={18} className="text-accent-violet shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Role / Contribution */}
                {selectedProject.role && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 text-violet-300">
                      My Contribution
                    </h4>
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed bg-accent-violet/10 p-4 rounded-xl border border-accent-violet/30">
                      {selectedProject.role}
                    </p>
                  </div>
                )}

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 text-violet-300">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1 text-xs px-3.5 py-2 bg-accent-violet/15 border border-accent-violet/30 rounded-xl text-foreground font-medium"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-foreground text-sm font-semibold transition-colors"
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
                    className="ml-auto px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
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
