'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

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
    <div className="max-w-xs w-full">
    <div
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-cover bg-center",
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        "transition-all duration-500"
      )}
      onClick={() => router.push(product.href || `/products/${product.id}`)}
      style={{
        backgroundImage: `url('${product.imageSrc}')`,
      }}
    >
      <div className="text relative z-50">
        <h1 className="font-bold text-lg md:text-xl text-white">
          {product.name}
        </h1>
        <p className="font-medium text-sm text-white mt-1 mb-4">
          {product.price}
        </p>
        <p className="text-xs text-gray-200 line-clamp-2">
          {product.href ? "Click to view product details." : ""}
        </p>
      </div>
    </div>
  </div>
  );
}
