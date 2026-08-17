import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  MapPin, 
  Tag, 
  ChevronLeft, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/content';

export const ProjectGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filterOptions = [
    'All',
    'New Construction',
    'Mini Splits',
    'Heating',
    'Cooling',
    'Installations'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.tag.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredProjects.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#0B1726] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#1677C8] font-bold text-xs uppercase tracking-[0.2em] mb-3 font-mono">
              <div className="w-8 h-px bg-[#1677C8]"></div>
              Project Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Manrope']">
              Recent Work in Southeast Idaho
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#1677C8] text-white shadow-md'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group bg-[#0e1d2f] border border-white/10 overflow-hidden cursor-pointer hover:border-[#1677C8] transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-[#0B1726]/90 text-[#1677C8] text-[10px] font-bold uppercase tracking-widest font-mono border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#1677C8] text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#1677C8] transition-colors mb-1.5 font-['Manrope']">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1677C8]" />
                    {project.location}
                  </span>
                  <span className="text-[#1677C8] font-bold">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer z-50 border border-white/20"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 w-12 h-12 bg-white/10 hover:bg-[#1677C8] text-white flex items-center justify-center cursor-pointer z-50 transition-colors border border-white/15"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 w-12 h-12 bg-white/10 hover:bg-[#1677C8] text-white flex items-center justify-center cursor-pointer z-50 transition-colors border border-white/15"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main Modal Content */}
          <div
            className="max-w-4xl w-full bg-[#0B1726] border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={filteredProjects[activeImageIndex].image}
                alt={filteredProjects[activeImageIndex].title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-[#1677C8] uppercase tracking-widest font-mono">
                  {filteredProjects[activeImageIndex].category} • {filteredProjects[activeImageIndex].location}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {activeImageIndex + 1} of {filteredProjects.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-['Manrope']">
                {filteredProjects[activeImageIndex].title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {filteredProjects[activeImageIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
