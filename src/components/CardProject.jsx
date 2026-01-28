import PropTypes from 'prop-types';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const CardProject = ({ Img, Video, Title, Description, TechStack = [], Link: ProjectLink }) => {
  const [imgError, setImgError] = useState(false);
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  return (
    <div className="group relative w-full h-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-t-xl">
            <div className="relative w-full">
              <div className="aspect-video w-full overflow-hidden">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300">
                    <span className="text-xs">Media not available</span>
                  </div>
                ) : Video ? (
                  <video
                    src={Video}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    muted
                    playsInline
                    loop
                    autoPlay
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <img
                    src={Img}
                    alt={Title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={() => setImgError(true)}
                    crossOrigin="anonymous"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
          
          <div className="p-5 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
            
            {TechStack?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {TechStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md text-xs bg-white/5 text-slate-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            <div className="pt-4 flex items-center justify-start">
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Project URL</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">URL Not Available</span>
              )}
            </div>
          </div>
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  Img: PropTypes.string,
  Video: PropTypes.string,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  TechStack: PropTypes.arrayOf(PropTypes.string),
  Link: PropTypes.string,
};

export default CardProject;
