import React, { useState } from 'react';
import { AGRO_PRODUCTS } from '../data/content';
import { AgroProduct } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface AgroPortfolioProps {
  onSelectProduct: (product: AgroProduct) => void;
}

export const AgroPortfolio: React.FC<AgroPortfolioProps> = ({ onSelectProduct }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'grain' | 'spice' | 'pulse' | 'oil'>('all');

  const filteredProducts =
    activeFilter === 'all'
      ? AGRO_PRODUCTS
      : AGRO_PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-12 sm:py-16 bg-[#0b0b0b] border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Products &amp; processing categories
            </h2>
            <p className="text-sm text-neutral-300">
              Illustrative categories for the proposed agro-products catalogue. Specific grades, certifications, packaging and availability can be added after confirmation.
            </p>
          </div>

          {/* Clean Segmented Filter */}
          <div className="flex items-center gap-1 bg-[#151515] p-1 rounded-lg border border-neutral-700 shadow-2xs self-start md:self-auto flex-wrap">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'grain', label: 'Grains & Rice' },
              { id: 'spice', label: 'Spices' },
              { id: 'pulse', label: 'Pulses' },
              { id: 'oil', label: 'Oils' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white text-black shadow-xs'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Product Cards Grid - exactly 5 per row on desktop matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="bg-[#151515] rounded-xl p-5 border border-neutral-700 shadow-2xs hover:border-neutral-500 hover:shadow-xs transition-all duration-150 flex flex-col justify-between group cursor-pointer min-h-[140px]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={product.icon}
                      alt=""
                      aria-hidden="true"
                      className="w-9 h-9 object-contain shrink-0"
                    />
                    <h3 className="font-extrabold text-white text-sm tracking-tight group-hover:text-neutral-200 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-200 shrink-0 transition-colors" />
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-neutral-700 flex items-center justify-between text-[10px] text-neutral-400">
                <span className="uppercase tracking-wider font-semibold">Product category</span>
                <span className="text-[#c59b4e] group-hover:underline font-bold">Enquire</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
