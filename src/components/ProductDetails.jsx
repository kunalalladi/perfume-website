



import React, { useState, useEffect } from 'react';
import { 
  Heart, Share2, ShoppingCart, Star, Package,
  ChevronRight, Minus, Plus, ZoomIn, Truck,
  Shield, RefreshCw, Calendar, Clock
} from 'lucide-react';


import at2Image from '../assets/images/Perfume_img/at2.png';
import at3Image from '../assets/images/Perfume_img/at3.png';
import at4Image from '../assets/images/Perfume_img/at4.png';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedColor, setSelectedColor] = useState('Classic Brown');
  
  const product = {
    name: "Artisan Leather Weekend Bag",
    tagline: "Handcrafted Excellence",
    price: "$299.99",
    originalPrice: "$399.99",
    rating: 4.8,
    reviews: 128,
    description: "Meticulously handcrafted from full-grain leather, this weekend bag exemplifies luxury and sophistication. Each piece is uniquely created by master artisans using traditional techniques passed down through generations, ensuring exceptional quality and timeless elegance.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Classic Brown', code: '#8B4513' },
      { name: 'Vintage Black', code: '#1B1A17' },
      { name: 'Rich Cognac', code: '#D35400' },
      { name: 'Desert Sand', code: '#D9B08C' }
    ],
    features: [
      "Premium full-grain leather",
      "Hand-stitched details",
      "Brass hardware",
      "Interior laptop sleeve"
    ],
    deliveryTime: "2-4 business days",
    warranty: "Lifetime warranty on craftsmanship",
    images: [
      at2Image,
      at3Image,
      at4Image
      
    ]
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderImageGallery = () => (
    <div className="lg:w-3/5">
      <div className="bg-[#FAF3E0] rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className="relative overflow-hidden rounded-2xl group">
          <div className="absolute top-4 right-4 z-10 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ZoomIn className="w-6 h-6 text-[#3E2723]" />
            </button>
          </div>
          <img 
            src={mainImage} 
            alt={product.name}
            className={`w-full h-[700px] object-cover rounded-xl transition-all duration-700 ${
              isZoomed ? 'scale-125' : 'scale-100'
            } ${hoveredImage ? 'opacity-90' : 'opacity-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="mt-8 grid grid-cols-4 gap-4">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              className={`relative rounded-xl overflow-hidden group ${
                mainImage === img ? 'ring-2 ring-[#3E2723] ring-offset-2' : ''
              }`}
              onClick={() => setMainImage(img)}
              onMouseEnter={() => setHoveredImage(img)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={img}
                alt={`Product view ${idx + 1}`}
                className="w-full h-32 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProductInfo = () => (
    <div className="lg:w-2/5">
      <div className={`bg-[#FAF3E0] rounded-3xl p-8 shadow-xl transition-all duration-500 ${
        scrollPosition > 100 ? 'lg:sticky lg:top-4' : ''
      }`}>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm font-medium text-[#9D826F] tracking-wider uppercase">
                  {product.tagline}
                </span>
                <h1 className="text-4xl font-bold text-[#3E2723] mt-2">{product.name}</h1>
              </div>
              <button className="p-3 hover:bg-[#EDDDC6] rounded-full transition-all duration-300 group">
                <Heart className="w-6 h-6 text-[#3E2723] transition-all duration-300 group-hover:scale-110" />
              </button>
            </div>
            
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-[#3E2723]">{product.price}</span>
              <span className="text-xl line-through text-[#9D826F]">{product.originalPrice}</span>
              <span className="px-3 py-1 bg-[#3E2723] text-[#FAF3E0] rounded-full text-sm font-medium">
                Save 25%
              </span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4 p-4 bg-[#EDDDC6] rounded-xl">
            <div className="flex">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-5 h-5 transition-all duration-300 ${
                    idx < Math.floor(product.rating)
                      ? 'text-[#3E2723] fill-current'
                      : 'text-[#9D826F]'
                  }`}
                />
              ))}
            </div>
            <div className="h-6 w-px bg-[#C8B6A6]" />
            <span className="text-[#6E4F3A] font-medium">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Color Selection */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#5E4436]">Select Color</h3>
              <span className="text-sm text-[#9D826F]">{selectedColor}</span>
            </div>
            <div className="flex gap-3 mt-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`group relative w-12 h-12 rounded-full transition-all duration-300 ${
                    selectedColor === color.name 
                      ? 'ring-2 ring-[#3E2723] ring-offset-2' 
                      : 'hover:ring-2 hover:ring-[#9D826F] hover:ring-offset-2'
                  }`}
                  style={{ backgroundColor: color.code }}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#5E4436]">Select Size</h3>
              <button 
                className="text-sm text-[#3E2723] underline hover:text-[#6E4F3A] transition-all duration-300"
                onClick={() => setShowSizeGuide(!showSizeGuide)}
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? 'bg-[#3E2723] text-[#FAF3E0] scale-105 shadow-lg'
                      : 'bg-[#EDDDC6] text-[#3E2723] hover:bg-[#D9B08C]'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-semibold text-[#5E4436]">Quantity</h3>
            <div className="flex items-center gap-4 mt-3 p-2 bg-[#EDDDC6] rounded-xl w-fit">
              <button
                className="p-2 rounded-lg hover:bg-[#D9B08C] transition-all duration-300"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Minus className="w-5 h-5 text-[#3E2723]" />
              </button>
              <span className="text-xl font-medium text-[#3E2723] w-12 text-center">{quantity}</span>
              <button
                className="p-2 rounded-lg hover:bg-[#D9B08C] transition-all duration-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-5 h-5 text-[#3E2723]" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full py-4 bg-[#3E2723] text-[#FAF3E0] rounded-xl font-medium transition-all duration-300 hover:bg-[#6E4F3A] hover:shadow-lg group">
              <div className="flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                Add to Cart
              </div>
            </button>
            <button className="w-full py-4 bg-[#EDDDC6] text-[#3E2723] rounded-xl font-medium transition-all duration-300 hover:bg-[#D9B08C] hover:shadow-lg group">
              <div className="flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                Share Product
              </div>
            </button>
          </div>

          {/* Product Benefits */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: RefreshCw, text: "Easy Returns" },
              { icon: Shield, text: "2 Year Warranty" },
              { icon: Package, text: "Secure Packaging" }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3 bg-[#EDDDC6] rounded-xl transition-all duration-300 hover:bg-[#D9B08C]"
              >
                <benefit.icon className="w-5 h-5 text-[#3E2723]" />
                <span className="text-sm font-medium text-[#3E2723]">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Delivery Info */}
          <div className="p-4 bg-[#EDDDC6] rounded-xl space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#3E2723]" />
              <span className="text-sm text-[#3E2723]">
                Estimated Delivery: <strong>{product.deliveryTime}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#3E2723]" />
              <span className="text-sm text-[#3E2723]">
                Order within <strong>4h 32m</strong> for same-day dispatch
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#EDDDC6]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {renderImageGallery()}
          {renderProductInfo()}
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 bg-[#FAF3E0] rounded-3xl p-8 shadow-xl">
          <div className="flex justify-center border-b border-[#C8B6A6]">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-4 font-medium capitalize transition-all duration-300 relative ${
                  activeTab === tab
                    ? 'text-[#3E2723]'
                    : 'text-[#9D826F] hover:text-[#6E4F3A]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {/* Previous code remains the same until the last line where we stopped */}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E2723] transition-all duration-300" />
                )}
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-8">
            {activeTab === 'description' && (
              <div className="space-y-8">
                <p className="text-[#5E4436] leading-relaxed text-lg">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-[#EDDDC6] rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-[#3E2723] mb-4">Craftsmanship</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[#6E4F3A]">
                          <ChevronRight className="w-5 h-5 text-[#9D826F]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-[#EDDDC6] rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-[#3E2723] mb-4">Care Instructions</h4>
                    <ul className="space-y-3 text-[#6E4F3A]">
                      <li className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-[#9D826F]" />
                        <span>Clean with leather-specific products</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-[#9D826F]" />
                        <span>Store in provided dust bag</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-[#9D826F]" />
                        <span>Avoid exposure to direct sunlight</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <ChevronRight className="w-5 h-5 text-[#9D826F]" />
                        <span>Apply leather conditioner every 6 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#3E2723]">Dimensions</h4>
                    <div className="bg-[#EDDDC6] rounded-2xl p-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Length</span>
                        <span className="font-medium text-[#3E2723]">20 inches</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Width</span>
                        <span className="font-medium text-[#3E2723]">12 inches</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Height</span>
                        <span className="font-medium text-[#3E2723]">10 inches</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Weight</span>
                        <span className="font-medium text-[#3E2723]">2.5 lbs</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#3E2723]">Materials</h4>
                    <div className="bg-[#EDDDC6] rounded-2xl p-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Exterior</span>
                        <span className="font-medium text-[#3E2723]">Full-grain leather</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Lining</span>
                        <span className="font-medium text-[#3E2723]">Cotton canvas</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Hardware</span>
                        <span className="font-medium text-[#3E2723]">Brass</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6E4F3A]">Zipper</span>
                        <span className="font-medium text-[#3E2723]">YKK Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-semibold text-[#3E2723]">Customer Reviews</h4>
                    <p className="text-[#9D826F] mt-1">Based on {product.reviews} reviews</p>
                  </div>
                  <button className="px-6 py-3 bg-[#3E2723] text-[#FAF3E0] rounded-xl font-medium transition-all duration-300 hover:bg-[#6E4F3A]">
                    Write a Review
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, idx) => (
                    <div key={idx} className="bg-[#EDDDC6] rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium text-[#3E2723]">John D.</h5>
                          <p className="text-sm text-[#9D826F]">Verified Purchase</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className={`w-4 h-4 ${
                                starIdx < 4 ? 'text-[#3E2723] fill-current' : 'text-[#9D826F]'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#6E4F3A]">
                        Exceptional quality and craftsmanship. This bag exceeds all expectations
                        and has become my go-to for weekend trips.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-[#9D826F]">
                        <span>2 months ago</span>
                        <span>•</span>
                        <button className="hover:text-[#3E2723] transition-colors duration-300">
                          Helpful (12)
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-4 bg-[#EDDDC6] text-[#3E2723] rounded-xl font-medium transition-all duration-300 hover:bg-[#D9B08C]">
                  Load More Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;