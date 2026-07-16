import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';
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
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200/60 flex flex-col h-full lg:min-h-[620px] md:min-h-[580px] min-h-0 shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 ease-out">
      {/* Top Section: Project Image Only (Fixed Height for Aspect Ratio Consistency) */}
      <div className="relative w-full h-[300px] overflow-hidden bg-primary shrink-0 rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Bottom Section: Dedicated Content Area (Flex Layout for Aligned Button Placement) */}
      <div className="flex flex-col flex-1 p-6 pb-7 bg-white text-left">
        <div className="flex flex-col space-y-3">
          {/* Category Label */}
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block">
            {category}
          </span>
          
          {/* Orange Accent Line Animation */}
          <div className="h-[2px] bg-secondary w-8 group-hover:w-16 transition-all duration-300 ease-out" />

          {/* Project Title (Fixed Area Height for Max 2 Lines & Equal Vert Alignment) */}
          <div className="h-14 flex items-start">
            <h3 className="text-lg font-bold text-primary font-heading line-clamp-2 leading-tight">
              {name}
            </h3>
          </div>

          {/* Information Section: Location + Completion Year (Lucide Icons) */}
          <div className="space-y-2.5 pt-3.5 border-t border-gray-100 text-xs font-semibold text-gray-500 font-body">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-secondary shrink-0" />
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={14} className="text-secondary shrink-0" />
              <span>Completion Year: {year}</span>
            </div>
          </div>
        </div>

        {/* Spacer & View Project Button (Pushed to bottom of card via margin-top: auto) */}
        <div className="mt-auto pt-6">
          <Link
            to={path}
            className="inline-flex items-center justify-center gap-2 w-full h-[50px] bg-secondary hover:bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 focus:outline-none shadow-sm"
          >
            <span>VIEW PROJECT</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

