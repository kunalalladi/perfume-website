import React, { useState } from 'react';
import { Star, ShoppingCart, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PerfumeCategory = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    brands: [],
    scents: [],
    ratings: null
  });
  
  const [expandedFilters, setExpandedFilters] = useState({
    brands: true,
    price: true,
    scents: true,
    ratings: true
  });

  const navigate = useNavigate();
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Eternal Rose",
      brand: "Luxury Scents",
      price: 299.99,
      rating: 4.8,
      image: "../../assets/images/Perfume_img/pr1.png",
      scent: "Floral"
    },
    {
      id: 2,
      name: "Ocean Breeze",
      brand: "Azure",
      price: 189.99,
      rating: 4.5,
      image: "../../assets/images/Perfume_img/pr2.png",
      scent: "Fresh"
    },
    {
      id: 3,
      name: "Midnight Oud",
      brand: "Arabian Nights",
      price: 399.99,
      rating: 4.9,
      image: "../../assets/images/Perfume_img/pr3.png",
      scent: "Woody"
    },
    {
      id: 4,
      name: "Vanilla Dreams",
      brand: "Sweet Essence",
      price: 159.99,
      rating: 4.3,
      image: "../../assets/images/Perfume_img/at1.png",
      scent: "Sweet"
    }
  ];

  const FilterSection = ({ title, expanded, onToggle, children }) => (
    <div className="mb-6">
      <div 
        className="flex justify-between items-center cursor-pointer mb-2" 
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expanded && children}
    </div>
  );

  const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="group relative bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          {/* Floating price tag */}
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg">
            <span className="text-gray-800 font-semibold">${product.price}</span>
          </div>
          
          {/* Add to cart button */}
          <button 
            className={`absolute bottom-4 right-4 bg-[#EDDDC6] hover:bg-[#E5D4B7] text-gray-800 px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 flex items-center gap-2 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 stroke-yellow-400" size={16} />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#EDDDC6]/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} />
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              </div>

              <FilterSection 
                title="Price Range" 
                expanded={expandedFilters.price}
                onToggle={() => setExpandedFilters(prev => ({...prev, price: !prev.price}))}
              >
                <div className="space-y-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    className="w-full accent-[#EDDDC6]"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({...prev, priceRange: [0, e.target.value]}))}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </FilterSection>

              <FilterSection 
                title="Brands" 
                expanded={expandedFilters.brands}
                onToggle={() => setExpandedFilters(prev => ({...prev, brands: !prev.brands}))}
              >
                <div className="space-y-2">
                  {['Luxury Scents', 'Azure', 'Arabian Nights', 'Sweet Essence'].map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#EDDDC6]" />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Scent Notes" 
                expanded={expandedFilters.scents}
                onToggle={() => setExpandedFilters(prev => ({...prev, scents: !prev.scents}))}
              >
                <div className="space-y-2">
                  {['Floral', 'Woody', 'Fresh', 'Sweet', 'Oriental', 'Citrus'].map(scent => (
                    <label key={scent} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#EDDDC6]" />
                      <span className="text-gray-700">{scent}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Rating" 
                expanded={expandedFilters.ratings}
                onToggle={() => setExpandedFilters(prev => ({...prev, ratings: !prev.ratings}))}
              >
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="rating" className="accent-[#EDDDC6]" />
                      <div className="flex items-center gap-1">
                        {Array(rating).fill(null).map((_, i) => (
                          <Star key={i} className="fill-yellow-400 stroke-yellow-400" size={16} />
                        ))}
                        <span className="text-gray-700">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              {products.map((product, index) => (
                <div key={product.id} className={`${index % 3 === 1 ? 'md:translate-y-8' : ''}`}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCategory;