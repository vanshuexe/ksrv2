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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProducts.map((product) => (
            <button
              type="button"
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="overflow-hidden rounded-xl border border-neutral-700 bg-[#151515] text-left shadow-2xs transition-all duration-150 hover:border-neutral-500 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c59b4e] group cursor-pointer"
            >
              <div className="relative h-36 overflow-hidden bg-neutral-800">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: product.imagePosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="flex min-h-[140px] flex-col justify-between p-4">
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-extrabold text-sm tracking-tight text-white transition-colors group-hover:text-neutral-200">
                      {product.name}
                    </h3>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-200" />
                  </div>
                  <p className="text-xs font-normal leading-relaxed text-neutral-300">
                    {product.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-neutral-700 pt-3 text-[10px] text-neutral-400">
                  <span className="font-semibold uppercase tracking-wider">Product category</span>
                  <span className="font-bold text-[#c59b4e] group-hover:underline">Enquire</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
