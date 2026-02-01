import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  artisan: string;
  region: string;
  className?: string;
}

const ProductCard = ({ id, title, price, image, artisan, region, className }: ProductCardProps) => {
  return (
    <div className={cn("card-heritage group", className)}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Button
            size="icon"
            variant="secondary"
            className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-heritage-brown/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full bg-primary hover:bg-primary/90">
            <ShoppingCart className="w-4 h-4 ml-2" />
            أضف للسلة
          </Button>
        </div>
      </div>
      <Link to={`/product/${id}`} className="block p-5">
        <p className="text-xs text-muted-foreground mb-1">{artisan} • {region}</p>
        <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-primary font-bold text-lg">
          {price.toLocaleString('ar-DZ')} د.ج
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
