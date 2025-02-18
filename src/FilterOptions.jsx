import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, ChevronUp, RefreshCw, Star, X } from 'lucide-react';

// FilterSection subcomponent for consistent filter sections
const FilterSection = ({ title, expanded, onToggle, children }) => (
  <div className="mb-6">
    <div 
      className="flex justify-between items-center cursor-pointer mb-2 group" 
      onClick={onToggle}
    >
      <h3 className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{title}</h3>
      <div className="w-6 h-6 rounded-full bg-[#F4EBE0] group-hover:bg-[#EDDDC6] flex items-center justify-center transition-all">
        {expanded ? <ChevronUp size={16} className="text-[#8A7A63]" /> : <ChevronDown size={16} className="text-[#8A7A63]" />}
      </div>
    </div>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="pl-1 space-y-2 py-1">
        {children}
      </div>
    </div>
  </div>
);

const FilterOptions = ({ 
  filters, 
  setFilters, 
  resetFilters, 
  activeFiltersCount,
  showFilters,
  setShowFilters,
  expandedFilters,
  setExpandedFilters 
}) => {
  
  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      // Create a copy of the current category array
      const current = [...prev[category]];
      
      // Check if the value is already in the array
      if (current.includes(value)) {
        // If it is, remove it by creating a new array without it
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        // If it's not, add it to the array
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  // Desktop filter sidebar
  const DesktopFilters = () => (
    <div className="w-full lg:w-72 hidden lg:block flex-shrink-0">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 sticky top-4 transition-all duration-300"
        style={{
          boxShadow: '0 4px 30px rgba(237, 221, 198, 0.3)'
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-[#8A7A63]" />
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
          </div>
          
          {activeFiltersCount > 0 && (
            <div className="bg-[#EDDDC6] text-[#8A7A63] text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </div>
          )}
          
          {activeFiltersCount > 0 && (
            <button 
              onClick={resetFilters}
              className="text-sm text-[#8A7A63] flex items-center gap-1 hover:text-[#6B5D48] transition-colors"
            >
              <RefreshCw size={14} />
              Reset
            </button>
          )}
        </div>

        <FilterContent />
      </div>
    </div>
  );

  // Mobile filter button
  const MobileFilterButton = () => (
    <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="bg-[#EDDDC6] text-[#8A7A63] px-5 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#E5D4B7] transition-all duration-300"
      >
        <Filter size={18} />
        Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
      </button>
    </div>
  );

  // Mobile filter sidebar
  const MobileFilters = () => (
    <div className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${showFilters ? 'translate-x-0' : 'translate-x-full'}`}>
      <div 
        className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={() => setShowFilters(false)}
      />
      <div className="absolute right-0 h-full w-80 bg-white transform transition-all duration-500 ease-in-out overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-[#8A7A63]" />
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            </div>
            
            <button 
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          {activeFiltersCount > 0 && (
            <button 
              onClick={resetFilters}
              className="mb-4 text-sm text-[#8A7A63] flex items-center gap-1 hover:text-[#6B5D48] transition-colors"
            >
              <RefreshCw size={14} />
              Reset all filters
            </button>
          )}
          
          <FilterContent />
          
          <div className="mt-8">
            <button 
              onClick={() => setShowFilters(false)}
              className="w-full bg-[#EDDDC6] text-[#8A7A63] py-3 rounded-full hover:bg-[#E5D4B7] transition-all duration-300"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Reusable filter content for both desktop and mobile
  const FilterContent = () => (
    <>
      <FilterSection 
        title="Price Range" 
        expanded={expandedFilters.price}
        onToggle={() => setExpandedFilters(prev => ({...prev, price: !prev.price}))}
      >
        <div className="space-y-4 px-1 pt-2">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            step="50"
            className="w-full accent-[#EDDDC6]"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters(prev => ({...prev, priceRange: [0, parseInt(e.target.value)]}))}
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span className="font-medium">${filters.priceRange[1]}</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection 
        title="Gender" 
        expanded={expandedFilters.gender}
        onToggle={() => setExpandedFilters(prev => ({...prev, gender: !prev.gender}))}
      >
        <div className="space-y-3 px-1 pt-2">
          {['Women', 'Men', 'Unisex'].map(gender => (
            <label key={gender} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-[#EDDDC6]"
                checked={filters.gender.includes(gender)}
                onChange={() => handleCheckboxChange('gender', gender)}
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{gender}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection 
        title="Brands" 
        expanded={expandedFilters.brands}
        onToggle={() => setExpandedFilters(prev => ({...prev, brands: !prev.brands}))}
      >
        <div className="space-y-3 px-1 pt-2">
          {['Luxury Scents', 'Azure', 'Arabian Nights', 'Sweet Essence', 'Fresh Vibes'].map(brand => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-[#EDDDC6]"
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckboxChange('brands', brand)}
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection 
        title="Scent Notes" 
        expanded={expandedFilters.scents}
        onToggle={() => setExpandedFilters(prev => ({...prev, scents: !prev.scents}))}
      >
        <div className="space-y-3 px-1 pt-2">
          {['Floral', 'Woody', 'Fresh', 'Sweet', 'Oriental', 'Citrus'].map(scent => (
            <label key={scent} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-[#EDDDC6]"
                checked={filters.scents.includes(scent)}
                onChange={() => handleCheckboxChange('scents', scent)}
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{scent}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection 
        title="Size" 
        expanded={expandedFilters.size}
        onToggle={() => setExpandedFilters(prev => ({...prev, size: !prev.size}))}
      >
        <div className="space-y-3 px-1 pt-2">
          {['30ml', '50ml', '75ml', '100ml'].map(size => (
            <label key={size} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-[#EDDDC6]"
                checked={filters.size.includes(size)}
                onChange={() => handleCheckboxChange('size', size)}
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{size}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection 
        title="Rating" 
        expanded={expandedFilters.ratings}
        onToggle={() => setExpandedFilters(prev => ({...prev, ratings: !prev.ratings}))}
      >
        <div className="space-y-3 px-1 pt-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="rating"
                className="w-5 h-5 accent-[#EDDDC6]"
                checked={filters.ratings === rating}
                onChange={() => setFilters(prev => ({...prev, ratings: rating}))}
              />
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16}
                    className={i < rating 
                      ? "fill-yellow-400 stroke-yellow-400" 
                      : "fill-gray-200 stroke-gray-200"
                    }
                  />
                ))}
                <span className="text-gray-700 ml-2 group-hover:text-gray-900 transition-colors">& up</span>
              </div>
            </label>
          ))}
          {filters.ratings && (
            <button 
              onClick={() => setFilters(prev => ({...prev, ratings: null}))}
              className="text-sm text-[#8A7A63] flex items-center gap-1 hover:text-[#6B5D48] transition-colors"
            >
              <X size={14} />
              Clear rating filter
            </button>
          )}
        </div>
      </FilterSection>

      <FilterSection 
        title="Other Filters" 
        expanded={expandedFilters.other}
        onToggle={() => setExpandedFilters(prev => ({...prev, other: !prev.other}))}
      >
        <div className="space-y-3 px-1 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-[#EDDDC6]"
              checked={filters.newArrivals}
              onChange={() => setFilters(prev => ({...prev, newArrivals: !prev.newArrivals}))}
            />
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">New Arrivals</span>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-[#EDDDC6]"
              checked={filters.onSale}
              onChange={() => setFilters(prev => ({...prev, onSale: !prev.onSale}))}
            />
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">On Sale</span>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-[#EDDDC6]"
              checked={filters.exclusive}
              onChange={() => setFilters(prev => ({...prev, exclusive: !prev.exclusive}))}
            />
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Exclusive Items</span>
          </label>
        </div>
      </FilterSection>
    </>
  );

  return (
    <>
      <DesktopFilters />
      <MobileFilterButton />
      <MobileFilters />
    </>
  );
};

export default FilterOptions;