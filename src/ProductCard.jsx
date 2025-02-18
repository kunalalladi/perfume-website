import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Sparkles } from 'lucide-react';

export const ProductCard = ({ product, index, toggleFavourite, favourites, mousePosition }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFavourite = favourites.includes(product.id);

  return (
    <div 
      className={`group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl ${isHovered ? 'scale-[1.02] -translate-y-1 z-10' : 'scale-100 z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(237, 221, 198, 0.3) 0%, rgba(237, 221, 198, 0) 50%)`
          }}
        />
        
        {/* Badge container */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <div className="bg-emerald-500 px-3 py-1 rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1">
              <span className="text-white text-xs font-medium flex items-center gap-1">
                <Sparkles size={12} />
                NEW
              </span>
            </div>
          )}
          
          {product.onSale && (
            <div className="bg-rose-500 px-3 py-1 rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 delay-75">
              <span className="text-white text-xs font-medium">SALE</span>
            </div>
          )}
          
          {product.isExclusive && (
            <div className="bg-amber-500 px-3 py-1 rounded-full shadow-md transform transition-all duration-300 group-hover:translate-x-1 delay-150">
              <span className="text-white text-xs font-medium">EXCLUSIVE</span>
            </div>
          )}
        </div>
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-[380px] object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
        />
        
        {/* Elegant overlay gradient */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0) 60%)'
          }}
        />
        
        <div 
          className="absolute top-4 right-4 z-10 transform transition-all duration-300"
          style={{
            transform: isHovered ? 'translateY(0) scale(1.1)' : 'translateY(0) scale(1)'
          }}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onFavouriteToggle(product.id);
            }} 
            className={`${isFavourite ? 'bg-rose-50' : 'bg-white/90 backdrop-blur-sm'} p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${isFavourite ? 'scale-110' : 'scale-100'}`}
          >
            <Heart 
              size={18} 
              className={isFavourite ? "fill-rose-500 stroke-rose-500" : "stroke-gray-600"} 
            />
          </button>
        </div>
        
        <div 
          className={`absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg transition-all duration-300 ${isHovered ? 'transform -translate-y-2' : ''}`}
        >
          <span className="text-gray-800 font-semibold">
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <span className="text-rose-500 line-through text-sm ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </span>
        </div>
        
        <button 
          className={`absolute bottom-4 right-4 bg-[#EDDDC6] hover:bg-[#E5D4B7] text-gray-800 px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 flex items-center gap-2 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product.id);
          }}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-[#8A7A63] text-sm mb-1 font-medium transition-all duration-300 group-hover:text-[#6B5D48]">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1 transition-all duration-300 group-hover:text-gray-900">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={16}
                className={i < Math.floor(product.rating) 
                  ? "fill-yellow-400 stroke-yellow-400 transition-transform duration-300 group-hover:scale-110" 
                  : i < product.rating 
                    ? "fill-yellow-400/50 stroke-yellow-400 transition-transform duration-300 group-hover:scale-110" 
                    : "fill-gray-200 stroke-gray-200 transition-transform duration-300 group-hover:scale-110"
                }
                style={{
                  transitionDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 group-hover:line-clamp-3 transition-all duration-500">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.gender && (
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.gender}
            </span>
          )}
          {product.scent && (
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.scent}
            </span>
          )}
          {product.size && (
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.size}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;