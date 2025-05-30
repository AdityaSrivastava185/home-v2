'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string | number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <img
        alt={product.imageAlt}
        src={product.imageSrc}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-white">{product.name}</h3>
        </div>
        <p className="text-sm font-medium text-white">{product.price}</p>
      </div>
    </div>
  );
}
