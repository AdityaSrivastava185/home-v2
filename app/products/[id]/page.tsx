"use client";

import Image from "next/image";
import { products } from "@/data/productData";

interface Props {
  params: { id: string };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p: { id: string }) => p.id === params.id);

  if (!product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  return (
    <section className="w-full px-4 flex justify-center">
    <div className="w-full max-w-4xl rounded-2xl p-6 md:p-10 shadow-lg  text-start">
      
      {/* Section Tagline */}
      <h2 className="text-xs md:text-sm font-mono tracking-wider text-white/50 uppercase">
        PRE_BUILT_HARDWARE
      </h2>
  
      {/* Product Name */}
      <h1 className="mt-2 text-lg md:text-2xl font-mono font-semibold text-white">
        {product.name}
      </h1>
  
      {/* Product Image */}
      <div className="w-full mt-6">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-auto max-h-[500px] rounded-xl object-cover shadow-md mx-auto"
        />
      </div>
  
      {/* Name and Price */}
      <div className="mt-6 flex flex-col items-start gap-2">
        <h2 className="text-xl md:text-2xl font-mono font-semibold text-white">
          {product.name}
        </h2>
        <p className="text-white/60 text-sm font-mono">{product.price}</p>
      </div>
  
      {/* Product Description */}
      <div className="mt-4 border border-white/10 p-4 rounded-md font-mono text-sm text-white/80 bg-background/40 text-start">
        <p>{product.description}</p>
      </div>
    </div>
  </section>
  
    // <div className="min-h-screen w-full flex items-center justify-center py-16 px-4">
    //   <section className="w-full max-w-7xl rounded-2xl p-8 shadow-lg">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //       {/* Product Image */}
    //       <div className="w-full">
    //         <img
    //           src={product.imageSrc}
    //           alt={product.name}
    //           className="w-full rounded-xl object-cover shadow-md"
    //         />
    //       </div>

    //       {/* Product Info */}
    //       <div className="w-full">
    //         <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
    //           {product.name}
    //         </h1>

    //         <p className="text-white/80 text-base md:text-lg mb-6">
    //           {product.description}
    //         </p>

    //         <p className="text-indigo-400 text-2xl font-semibold mb-4">
    //           ₹{product.price}
    //         </p>

    //         {/* Rating and Reviews */}
    //         <div className="flex items-center mb-6">
    //           <div className="flex space-x-1">
    //             {[...Array(5)].map((_, idx) => (
    //               <svg
    //                 key={idx}
    //                 className="w-5 h-5 text-yellow-400"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.4 8.174L12 18.896l-7.334 3.87 1.4-8.174L.132 9.21l8.2-1.192L12 .587z" />
    //               </svg>
    //             ))}
    //           </div>
    //           <p className="text-sm text-white/60 ml-2">(5.0)</p>
    //           <a
    //             href="#"
    //             className="ml-3 text-sm text-indigo-400 underline hover:text-indigo-300"
    //           >
    //             345 Reviews
    //           </a>
    //         </div>

    //         {/* Order Button */}
    //         <a
    //           href="#"
    //           className="inline-flex items-center justify-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition-all duration-200"
    //         >
    //           <svg
    //             className="w-5 h-5 mr-2"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M3 3h2l.4 2M7 13h10l1.3-6H6.4M7 13l-1.2 6M7 13h10m-1 6a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
    //           </svg>
    //           Order Now
    //         </a>

    //         {/* Extra Info */}
    //         <hr className="my-8 border-gray-700" />

    //         <ul className="text-sm text-white/70 space-y-2">
    //           <li>✓ Up to two Thunderbolt USB 4 ports</li>
    //           <li>✓ Ultrafast Wi-Fi 6 and Bluetooth 5.0</li>
    //           <li>✓ Comes with Magic Mouse and Keyboard</li>
    //           <li>✓ Sleek & Efficient design</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}
