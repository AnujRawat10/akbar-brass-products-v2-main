import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

export default function ProductShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const [showMaterials, setShowMaterials] = useState(false);

  const product = {
    brand: "LUSANO",
    name: "Grant Bed",
    number: "01",
    range: "001 - 004",
    location: "Los Angeles",

    /* ✨ NEW COPY (you can change this freely) */
    description: [
      "Crafted with precision and intention, our work reflects the harmony of heritage craftsmanship and modern production techniques.",
      "Every piece is designed to deliver stability, consistency, and long-term performance backed by compliance-ready systems.",
      "",
      "Three generations of expertise, refined material selection, and rigorous in-house testing ensure enduring quality.",
    ],

    /* ✨ YOUR NEW IMAGES — replace with your uploads */
    images: [
      "/showroom1.jpeg",   // 🔥 Replace with your own image
      "/showroom2.jpeg",
      "/showroom3.jpeg",    // 🔥 Replace with your own image
    ],

    /* Keep the rest same */
    style: "G-12",
    size: "CA King",
    dimensions: "78\"W x 90\"D x 48\"H",
    com: "4 YDS / 72 SF",

    materials: "Ebonized Walnut | Blackened Steel",
  };

  return (
    <div className="min-h-screen bg-[#E8E2D8] font-serif">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#E8E2D8] border-b border-[#C9C0B0]">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl tracking-wider">{product.brand}</div>

          <button className="p-2">
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>

          <div className="flex items-center gap-8 text-sm">
            <span>{product.location}</span>
            <span className="flex items-center gap-2">
              {product.range.split(' - ')[0]}
              <span className="text-xs">⌄</span>
              {product.range.split(' - ')[1]}
            </span>
          </div>
        </div>
      </header>


      <div className="pt-20 flex">

        {/* LEFT SIDEBAR */}
        <aside className="w-64 fixed left-0 top-20 bottom-0 border-r border-[#C9C0B0] bg-[#E8E2D8] overflow-y-auto">
          <div className="p-6">
            <button className="text-sm underline mb-8 hover:opacity-70">Close</button>

            <div className="space-y-4 text-sm leading-relaxed mb-8">
              <p className="italic">i.</p>

              {/* NEW COPY RENDERED HERE */}
              {product.description.map((para, idx) => (
                <p key={idx} className="text-[#5A5449]">{para}</p>
              ))}
            </div>

            <div className="mb-8">
              <p className="italic text-sm mb-2">ii. {product.materials}</p>
            </div>

            <div className="mt-12">
              <p className="italic text-xs mb-4">(Detail)</p>

              <img 
                src={product.images[1]}
                alt="Detail view"
                className="w-full h-32 object-cover cursor-pointer hover:opacity-90"
                onClick={() => setActiveImage(1)}
              />
            </div>
          </div>
        </aside>


        {/* MAIN IMAGE SECTION */}
        <main className="ml-64 mr-96 flex-1 p-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#B8A896] rounded-sm overflow-hidden mb-8">
              
              {/* TITLE TAG */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                <button className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs flex items-center gap-2 hover:bg-white/90">
                  <span className="w-4 h-0.5 bg-black"></span>
                  <span className="w-4 h-0.5 bg-black"></span>
                  <span className="w-4 h-0.5 bg-black"></span>
                  <span className="ml-2">{product.name}</span>
                </button>
              </div>

              {/* MAIN IMAGE */}
              <img 
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <button className="p-4 hover:bg-[#D8D2C8] rounded-full transition-colors">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </main>


        {/* RIGHT SIDEBAR */}
        <aside className="w-96 fixed right-0 top-20 bottom-0 border-l border-[#C9C0B0] bg-[#E8E2D8] overflow-y-auto">
          <div className="p-8">

            <div className="mb-8 text-right">
              <div className="text-6xl font-light mb-2">{product.number}</div>
              <div className="text-xs italic text-[#8A8070]">(Scroll)</div>
            </div>

            <h1 className="text-4xl mb-12 font-light">{product.name}</h1>

            {/* PRODUCT ATTRIBUTES */}
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b pb-3 border-[#C9C0B0]">
                <span className="text-sm italic text-[#5A5449]">Style</span>
                <span className="text-sm">{product.style}</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3 border-[#C9C0B0]">
                <span className="text-sm italic text-[#5A5449]">Size</span>
                <span className="text-sm">{product.size}</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3 border-[#C9C0B0]">
                <span className="text-sm italic text-[#5A5449]">Dimensions</span>
                <span className="text-sm">{product.dimensions}</span>
              </div>

              <div className="flex justify-between items-center border-b pb-3 border-[#C9C0B0]">
                <span className="text-sm italic text-[#5A5449]">COM / COL</span>
                <span className="text-sm">{product.com}</span>
              </div>

              {/* MATERIALS DROPDOWN */}
              <div className="flex justify-between items-center border-b pb-3 border-[#C9C0B0]">
                <button 
                  onClick={() => setShowMaterials(!showMaterials)}
                  className="text-sm italic text-[#5A5449] hover:text-black transition-colors"
                >
                  Materials
                </button>
                <button 
                  onClick={() => setShowMaterials(!showMaterials)}
                  className="text-sm flex items-center gap-2 hover:opacity-70"
                >
                  Options
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {showMaterials && (
                <div className="text-sm text-[#5A5449] pl-4 animate-fadeIn">
                  {product.materials}
                </div>
              )}
            </div>

            {/* CTA BUTTON (UPDATED) */}
            <button className="w-full mt-12 bg-[#3D2817] text-white py-4 text-sm tracking-wide hover:bg-[#2D1807] transition-colors">
              Explore Our Approach
            </button>

          </div>
        </aside>
      </div>


      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

    </div>
  );
}
