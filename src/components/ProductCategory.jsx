import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Star, ShoppingCart, Filter, ChevronDown, ChevronUp, Heart, RefreshCw, Search, X, Sparkles } from 'lucide-react';
import at2Image from '../assets/images/Perfume_img/at2.png';
import at3Image from '../assets/images/Perfume_img/at3.png';
import at4Image from '../assets/images/Perfume_img/at4.png';
import at5Image from '../assets/images/Perfume_img/at5.png';
import at1Image from '../assets/images/Perfume_img/at1.png';
import pr1Image from '../assets/images/Perfume_img/pr1.png';


const PerfumeCategory = () => {
  // States remain the same as in original code
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    brands: [],
    scents: [],
    ratings: null,
    gender: [],
    size: [],
    newArrivals: false,
    onSale: false,
    exclusive: false
  });
  
  const [expandedFilters, setExpandedFilters] = useState({
    brands: true,
    price: true,
    scents: true,
    ratings: true,
    gender: true,
    size: true,
    other: true
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [favourites, setFavourites] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorVariant, setCursorVariant] = useState("default");
  const headerRef = useRef(null);
  const parallaxLayers = useRef([]);


  // Mouse position for gradient effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax effect for products
  const productRefs = useRef([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      const progress = (scrolled / (docHeight - winHeight)) * 100;
      setScrollProgress(progress);

      // Parallax effect for floating elements
      parallaxLayers.current.forEach((layer, index) => {
        if (layer) {
          const speed = 0.2 + (index * 0.1);
          const yPos = -(scrolled * speed);
          layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced mouse effect with throttling
  useEffect(() => {
    let lastUpdate = 0;
    const throttleDelay = 100; // Only update every 100ms
    
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) return;
      
      lastUpdate = now;
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
      
      const hoverable = e.target.closest('[data-hoverable]');
      setCursorVariant(hoverable ? "hover" : "default");
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
      

  // Sample product data (same as original)
  const products = [
    {
      id: 1,
      name: "Eternal Rose",
      brand: "Luxury Scents",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.8,
      image: at2Image,
      scent: "Floral",
      gender: "Unisex",
      size: "100ml",
      isNew: true,
      onSale: true,
      isExclusive: true,
      description: "A timeless fragrance that captures the essence of fresh roses in full bloom, with subtle notes of jasmine and vanilla."
    },
    {
      id: 2,
      name: "Ocean Breeze",
      brand: "Azure",
      price: 189.99,
      rating: 4.5,
      image: at3Image,
      scent: "Fresh",
      gender: "Women",
      size: "50ml",
      isNew: false,
      onSale: false,
      isExclusive: false,
      description: "A refreshing scent reminiscent of a cool sea breeze, with hints of citrus and marine notes."
    },
    {
      id: 3,
      name: "Midnight Oud",
      brand: "Arabian Nights",
      price: 399.99,
      originalPrice: 459.99,
      rating: 4.9,
      image: at4Image,
      scent: "Woody",
      gender: "Men",
      size: "100ml",
      isNew: false,
      onSale: true,
      isExclusive: true,
      description: "A sophisticated blend of rare oud, amber, and spices that evokes the mystery of Arabian nights."
    },
    {
      id: 4,
      name: "Vanilla Dreams",
      brand: "Sweet Essence",
      price: 159.99,
      rating: 4.3,
      image: at5Image,
      scent: "Sweet",
      gender: "Women",
      size: "30ml",
      isNew: false,
      onSale: false,
      isExclusive: false,
      description: "A warm and inviting fragrance with Madagascar vanilla, caramel, and a touch of sandalwood."
    },
    {
      id: 5,
      name: "Citrus Explosion",
      brand: "Fresh Vibes",
      price: 219.99,
      rating: 4.6,
      image: at1Image,
      scent: "Citrus",
      gender: "Unisex",
      size: "75ml",
      isNew: true,
      onSale: false,
      isExclusive: false,
      description: "An energizing blend of Sicilian lemon, bergamot, and grapefruit that awakens the senses."
    },
    {
      id: 6,
      name: "Amber Mystery",
      brand: "Arabian Nights",
      price: 289.99,
      originalPrice: 329.99,
      rating: 4.7,
      image: pr1Image,
      scent: "Oriental",
      gender: "Unisex",
      size: "100ml",
      isNew: false,
      onSale: true,
      isExclusive: false,
      description: "A rich and complex fragrance with amber, patchouli, and exotic spices for a luxurious experience."
    },
    {
        id: 7,
        name: "x1 Rose",
        brand: "Luxury Scents",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        image: at2Image,
        scent: "Floral",
        gender: "Unisex",
        size: "100ml",
        isNew: true,
        onSale: true,
        isExclusive: true,
        description: "A timeless fragrance that captures the essence of fresh roses in full bloom, with subtle notes of jasmine and vanilla."
      },
      {
        id: 8,
        name: "x2 Breeze",
        brand: "Azure",
        price: 189.99,
        rating: 4.5,
        image: at3Image,
        scent: "Fresh",
        gender: "Women",
        size: "50ml",
        isNew: false,
        onSale: false,
        isExclusive: false,
        description: "A refreshing scent reminiscent of a cool sea breeze, with hints of citrus and marine notes."
      },
      {
        id: 9,
        name: "x3 Oud",
        brand: "Arabian Nights",
        price: 399.99,
        originalPrice: 459.99,
        rating: 4.9,
        image: at4Image,
        scent: "Woody",
        gender: "Men",
        size: "100ml",
        isNew: false,
        onSale: true,
        isExclusive: true,
        description: "A sophisticated blend of rare oud, amber, and spices that evokes the mystery of Arabian nights."
      },
      {
        id: 10,
        name: "x6 Dreams",
        brand: "Sweet Essence",
        price: 159.99,
        rating: 4.3,
        image: at5Image,
        scent: "Sweet",
        gender: "Women",
        size: "30ml",
        isNew: false,
        onSale: false,
        isExclusive: false,
        description: "A warm and inviting fragrance with Madagascar vanilla, caramel, and a touch of sandalwood."
      },
      {
        id: 11,
        name: "y9 Explosion",
        brand: "Fresh Vibes",
        price: 219.99,
        rating: 4.6,
        image: at1Image,
        scent: "Citrus",
        gender: "Unisex",
        size: "75ml",
        isNew: true,
        onSale: false,
        isExclusive: false,
        description: "An energizing blend of Sicilian lemon, bergamot, and grapefruit that awakens the senses."
      },
      {
        id: 12,
        name: "y7 Mystery",
        brand: "Arabian Nights",
        price: 289.99,
        originalPrice: 329.99,
        rating: 4.7,
        image: pr1Image,
        scent: "Oriental",
        gender: "Unisex",
        size: "100ml",
        isNew: false,
        onSale: true,
        isExclusive: false,
        description: "A rich and complex fragrance with amber, patchouli, and exotic spices for a luxurious experience."
      }
  ];

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.brands.length > 0) count++;
    if (filters.scents.length > 0) count++;
    if (filters.gender.length > 0) count++;
    if (filters.size.length > 0) count++;
    if (filters.ratings) count++;
    if (filters.newArrivals) count++;
    if (filters.onSale) count++;
    if (filters.exclusive) count++;
    if (filters.priceRange[1] < 1000) count++;
    return count;
  }, [filters]);
  
  

  // Apply filters to products
  useEffect(() => {
    let result = [...products];
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) ||
        p.scent.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    
    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter(p => filters.brands.includes(p.brand));
    }
    
    // Filter by scents
    if (filters.scents.length > 0) {
      result = result.filter(p => filters.scents.includes(p.scent));
    }
    
    // Filter by ratings
    if (filters.ratings) {
      result = result.filter(p => p.rating >= filters.ratings);
    }
    
    // Filter by gender
    if (filters.gender.length > 0) {
      result = result.filter(p => filters.gender.includes(p.gender));
    }
    
    // Filter by size
    if (filters.size.length > 0) {
      result = result.filter(p => filters.size.includes(p.size));
    }
    
    // Filter new arrivals
    if (filters.newArrivals) {
      result = result.filter(p => p.isNew);
    }
    
    // Filter on sale items
    if (filters.onSale) {
      result = result.filter(p => p.onSale);
    }
    
    // Filter exclusive items
    if (filters.exclusive) {
      result = result.filter(p => p.isExclusive);
    }
    
    // Apply sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.isNew - a.isNew);
    }
    
    setFilteredProducts(result);
    
    // Reset product refs array
    productRefs.current = result.map((_, i) => productRefs.current[i] || null);
  }, [filters, sortBy, products, searchQuery]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter(fav => fav !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const handleCheckboxChange = (category, value) => {
    setFilters(prevFilters => {
      // Special handling for boolean filters (newArrivals, onSale, exclusive)
      if (value === undefined) {
        return {
          ...prevFilters,
          [category]: !prevFilters[category]
        };
      }
      
      // For array filters (brands, scents, gender, size)
      const currentCategory = prevFilters[category] || [];
      const updatedCategory = currentCategory.includes(value)
        ? currentCategory.filter(item => item !== value)
        : [...currentCategory, value];
      
      return { 
        ...prevFilters, 
        [category]: updatedCategory 
      };
    });
  };
  
  
  

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      brands: [],
      scents: [],
      ratings: null,
      gender: [],
      size: [],
      newArrivals: false,
      onSale: false,
      exclusive: false
    });
    setSearchQuery('');
  };

  // Enhanced Filter Section component
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



  // Enhanced ProductCard component
  const ProductCard = ({ product, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isFavourite = favourites.includes(product.id);
    
    const setProductRef = (el) => {
      productRefs.current[index] = el;
    };
  
    return (
      <div 
        ref={setProductRef}
        className={`group relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl ${isHovered ? 'scale-[1.02] -translate-y-1 z-10' : 'scale-100 z-0'}`}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredProduct(product.id);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredProduct(null);
        }}
      >
        <div className="relative overflow-hidden">
          {/* Custom spotlight effect */}
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
                toggleFavourite(product.id);
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
              // Add to cart logic here
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
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.gender}
            </span>
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.scent}
            </span>
            <span className="text-xs bg-[#F4EBE0] text-[#8A7A63] px-2 py-1 rounded-full transition-all duration-300 group-hover:bg-[#EDDDC6] group-hover:text-[#6B5D48]">
              {product.size}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#EDDDC6]/20 to-[#F9F5F0]/80 transition-all duration-1000 ease-out"
          style={{
            backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
          }}
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#EDDDC6]/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-[#EDDDC6]/10 blur-3xl animate-float-slower" />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full bg-[#F4EBE0]/20 blur-3xl animate-float" />
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header with elegant animated underline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 relative inline-block">
              <span className="relative z-10">Exquisite Perfumes</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#EDDDC6]/60 -z-10 transform origin-left transition-all duration-1000 ease-out" 
                style={{
                  transform: hasScrolled ? 'scaleX(0.6)' : 'scaleX(1)'
                }}
              />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EDDDC6] -z-10" />
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 opacity-90 transition-all duration-1000"
              style={{
                transform: hasScrolled ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              Discover our curated collection of luxury fragrances that capture the essence of elegance and sophistication
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12 transform transition-all duration-1000"
            style={{
              transform: hasScrolled ? 'scale(0.95)' : 'scale(1)'
            }}
          >
            <input
              type="text"
              placeholder="Search by name, brand, or scent..."
              className="w-full bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-5 py-4 pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EDDDC6] transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                boxShadow: '0 4px 20px rgba(237, 221, 198, 0.3)'
              }}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8A7A63]" size={20} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Enhanced Filter Sidebar - Desktop */}
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
                          className="w-5 h-5 rounded-full accent-[#EDDDC6]"
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
                          className="w-5 h-5 rounded-full accent-[#EDDDC6]"
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
                          className="w-5 h-5 rounded-full accent-[#EDDDC6]"
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
                          className="w-5 h-5 rounded-full accent-[#EDDDC6]"
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
                          className="w-5 h-5 rounded-full accent-[#EDDDC6]"
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
                      className="w-5 h-5 rounded-full accent-[#EDDDC6]"
                      checked={filters.newArrivals}
                      onChange={() => handleCheckboxChange('newArrivals')} // No need for value here
                    />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">New Arrivals</span>
                  </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded-full accent-[#EDDDC6]"
                        checked={filters.onSale}
                        onChange={() => setFilters(prev => ({...prev, onSale: !prev.onSale}))}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">On Sale</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded-full accent-[#EDDDC6]"
                        checked={filters.exclusive}
                        onChange={() => setFilters(prev => ({...prev, exclusive: !prev.exclusive}))}
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Exclusive Items</span>
                    </label>
                  </div>
                </FilterSection>
              </div>
            </div>
            
            {/* Mobile filter button */}
            <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-[#EDDDC6] text-[#8A7A63] px-5 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#E5D4B7] transition-all duration-300"
              >
                <Filter size={18} />
                Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              </button>
            </div>
            
            {/* Mobile filter sidebar */}
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
                  
                  {/* Mobile filter sections - same as desktop but in a drawer */}
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
                  
                  {/* Repeat other filter sections here... */}
                  
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
            
            {/* Main content section */}
            <div className="flex-1">
              {/* Sorting and view options */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="text-gray-700 font-medium">{filteredProducts.length} products found</span>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-sm">Sort by:</span>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-[#F4EBE0] text-[#8A7A63] text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDDDC6] cursor-pointer"
                    >
                      <option value="popularity">Popularity</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                      <option value="newest">Newest First</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm mr-1">View:</span>
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-[#EDDDC6] text-[#8A7A63]' : 'bg-transparent text-gray-400 hover:text-gray-600'}`}
                  >
                    {/* Grid icon */}
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={viewMode === 'grid' ? 'bg-[#8A7A63]' : 'bg-gray-400'} style={{width: '9px', height: '9px'}}></div>
                      ))}
                    </div>
                  </button>
                  
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-[#EDDDC6] text-[#8A7A63]' : 'bg-transparent text-gray-400 hover:text-gray-600'}`}
                  >
                    {/* List icon */}
                    <div className="w-5 h-5 flex flex-col justify-between">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`h-1 ${viewMode === 'list' ? 'bg-[#8A7A63]' : 'bg-gray-400'}`}></div>
                      ))}
                    </div>
                  </button>
                </div>
              </div>
              
              {/* No products found */}
              {filteredProducts.length === 0 && (
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-[#F4EBE0] p-4 rounded-full">
                      <Search size={32} className="text-[#8A7A63]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">No products found</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We couldn't find any products matching your criteria. Try adjusting your filters or search term.
                    </p>
                    <button 
                      onClick={resetFilters}
                      className="mt-2 bg-[#EDDDC6] text-[#8A7A63] px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#E5D4B7] transition-all duration-300"
                    >
                      <RefreshCw size={16} />
                      Reset all filters
                    </button>
                  </div>
                </div>
              )}
              
              {/* Product grid */}
              {filteredProducts.length > 0 && (
                <div className={`
                  ${viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6' 
                    : 'flex flex-col gap-6'
                  }
                `}>
                  {filteredProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCategory;