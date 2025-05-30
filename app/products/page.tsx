"use client"

import React from 'react';
import { products } from '@/data/productData';
import ProductCard from '@/components/productCard';

export default function ProductsPage() {
  return (
    <div className=" min-h-screen w-full">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold text-white mb-10 text-center tracking-tight">
          Our Pre-Built Devices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
