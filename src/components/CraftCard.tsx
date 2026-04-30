import { Link } from "react-router-dom";
import { MapPin, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface CraftCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  region: string;
  category: string;
  iscoCode?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CraftCard = ({ id, title, description, image, region, category, iscoCode, className, style }: CraftCardProps) => {
  return (
    <Link
      to={`/craft/${id}`}
      className={cn("card-heritage group block", className)}
      style={style}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown/80 via-transparent to-transparent" />
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary text-primary-foreground shadow-lg">
            {category}
          </span>
          {iscoCode && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-mono bg-heritage-cream/90 text-heritage-brown font-bold border border-heritage-gold/30 shadow-sm">
              CITP: {iscoCode}
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 left-4">
          <div className="flex items-center gap-2 text-heritage-cream/80 text-sm mb-2">
            <MapPin className="w-4 h-4" />
            <span>{region}</span>
          </div>
          <h3 className="font-display text-xl font-bold text-heritage-cream">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
          <span>اكتشف المزيد</span>
          <ArrowLeft className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default CraftCard;
