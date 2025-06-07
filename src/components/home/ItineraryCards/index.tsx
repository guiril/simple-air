import type { ProductInfo } from '@/types/product-info';
import ImageCard from './ImageCard';

interface ItineraryCardsProps {
  products: ProductInfo[];
}

export default function ItineraryCards({ products }: ItineraryCardsProps) {
  return (
    <ul className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:block">
      {products.map((item) => (
        <ImageCard key={item.location} {...item} />
      ))}
    </ul>
  );
}
