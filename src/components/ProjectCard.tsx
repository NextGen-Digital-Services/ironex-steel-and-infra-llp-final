import { MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  name: string;
  location: string;
  category: string;
  year: string;
  path: string;
}

export default function ProjectCard({ image, name, location, category, year, path }: ProjectCardProps) {
  return (
    <Link
      to={path}
      className="group block relative h-[420px] rounded-xl overflow-hidden border border-gray-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out focus:outline-none"
    >
      {/* Project Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-primary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle premium dark gradient overlay (20-35%) */}
        {/* We have a base gradient for readability and a subtle additional dark mask on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-all duration-300" />
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content permanently anchored at the bottom of the card */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-10 text-left text-white">
        {/* Category Label */}
        <span className="text-[11px] font-bold uppercase tracking-widest text-secondary mb-1.5 block">
          {category}
        </span>
        
        {/* Orange Accent Line Animation */}
        <div className="h-[2px] bg-secondary w-8 group-hover:w-16 transition-all duration-300 ease-out mb-3" />

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold font-heading line-clamp-2 leading-tight mb-4">
          {name}
        </h3>
        
        {/* Metadata section (Location and Year) */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-gray-300 pt-3.5 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-secondary shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Calendar size={13} className="text-secondary shrink-0" />
            <span>{year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

