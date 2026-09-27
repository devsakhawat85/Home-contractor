import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Maximize2, X, Quote } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/contractorData';

interface ProjectsGalleryProps {
  onOpenEstimate: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenEstimate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectingProject, setInspectingProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Kitchen', 'Bathroom', 'Whole Home', 'Addition'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FAF9F5] text-[#191919] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#8C6D46]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C6D46]">
                Featured Portfolio
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-neutral-900 leading-tight">
              Work We&apos;re Proud Of.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 max-w-xl">
              Every project is a reflection of our commitment to craftsmanship, detail, and thoughtful design.
            </p>
          </div>

          {/* Interactive Category Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2EFE9] border border-neutral-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#181D1B] text-white shadow-sm'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Architectural Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            // Asymmetrical layout: Project 0 & 3 span 7 cols, Project 1 & 2 span 5 cols
            const colSpan = idx % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={project.id}
                onClick={() => setInspectingProject(project)}
                className={`group cursor-pointer flex flex-col justify-between ${colSpan}`}
              >
                {/* Image Card */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-200 shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top metadata tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white/90">
                    <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 uppercase tracking-wider text-[11px] font-semibold">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] bg-black/50 backdrop-blur-sm px-2.5 py-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      {project.duration}
                    </span>
                  </div>

                  {/* Bottom title & view affordance on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-white/80 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{project.location}</span>
                      <span className="text-white/40">·</span>
                      <span>{project.sqft}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-[#F2EFE9] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Corner inspect icon */}
                  <div className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Text summary below image */}
                <div className="pt-4 flex items-start justify-between gap-4">
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="shrink-0 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-[#8C6D46] transition-colors pt-0.5">
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 font-medium">
            Have a custom architectural plan or specific home in mind?
          </p>
          <button
            type="button"
            onClick={onOpenEstimate}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#121514] bg-[#F2EFE9] hover:bg-white border border-neutral-300 hover:border-neutral-900 transition-colors shadow-sm"
          >
            Request Project Feasibility Consultation
          </button>
        </div>
      </div>

      {/* Project Inspector Modal */}
      {inspectingProject && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-[#FAF9F5] border border-neutral-300 max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-5 py-3.5 sm:px-6 border-b border-neutral-200 bg-[#FAF9F5] shrink-0 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D46] block">
                  {inspectingProject.category} Architectural Case Study
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 mt-0.5">
                  {inspectingProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectingProject(null)}
                className="p-1.5 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80 transition-colors border border-neutral-300 cursor-pointer shrink-0"
                aria-label="Close project view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 flex-1 space-y-5">
              {/* Modal Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
                <img
                  src={inspectingProject.image}
                  alt={inspectingProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-neutral-500 pb-3 border-b border-neutral-200">
                <span className="flex items-center gap-1 text-neutral-800 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6D46]" />
                  {inspectingProject.location}
                </span>
                <span>·</span>
                <span>Timeline: {inspectingProject.duration}</span>
                <span>·</span>
                <span>Scope: {inspectingProject.sqft}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {inspectingProject.description}
              </p>

              {/* Architectural Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
                  Architectural &amp; Engineering Highlights:
                </h4>
                <ul className="space-y-2">
                  {inspectingProject.architecturalHighlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D46] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote */}
              <div className="p-4 bg-white border border-neutral-200 relative">
                <Quote className="w-6 h-6 text-[#8C6D46]/20 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm italic text-neutral-700 leading-relaxed mb-2">
                  &ldquo;{inspectingProject.quote.text}&rdquo;
                </p>
                <p className="text-xs font-bold text-neutral-900">
                  — {inspectingProject.quote.client}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="px-5 py-3 sm:px-6 border-t border-neutral-200 bg-[#FAF9F5] shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setInspectingProject(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-900 text-center cursor-pointer"
              >
                Close Case Study
              </button>

              <button
                type="button"
                onClick={() => {
                  setInspectingProject(null);
                  onOpenEstimate();
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181D1B] hover:bg-neutral-800 transition-colors text-center cursor-pointer"
              >
                Start A Project Like This
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
