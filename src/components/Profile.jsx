import React, { useState } from 'react';
import { 
  User, 
  Heart, 
  Package, 
  Clock, 
  MapPin, 
  CreditCard, 
  Settings, 
  LogOut, 
  ChevronRight,
  Edit2,
  ShoppingBag,
  Bell,
  Globe,
  Moon,
  Sun
} from 'lucide-react';

const images = import.meta.glob('../assets/images/Perfume_img/*.png', { eager: true });

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  
  // Sample user data
  const userData = {
    name: "Emma Laurent",
    email: "emma.laurent@example.com",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    memberSince: "January 2023",
    favoriteScents: ["Woody", "Floral", "Citrus"],
    recentOrders: [
      {id: "ORD-29576", date: "Feb 12, 2025", status: "Delivered", items: 2, total: "$189.00"},
      {id: "ORD-28691", date: "Jan 28, 2025", status: "Shipped", items: 1, total: "$75.50"},
      {id: "ORD-27843", date: "Dec 15, 2024", status: "Delivered", items: 3, total: "$215.25"},
    ],
    savedAddresses: [
      {type: "Home", address: "123 Rue Cambon, Paris, 75001", default: true},
      {type: "Work", address: "45 Avenue Montaigne, Paris, 75008", default: false},
    ],
    paymentMethods: [
      {type: "Visa", last4: "4582", expires: "05/27", default: true},
      {type: "Mastercard", last4: "8723", expires: "09/26", default: false},
    ]
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // The new beige theme color
  const themeColor = '#EDDDC6';
  
  const bgClass = darkMode ? 'bg-bgdark' : 'bg-bgcolor';
  const textBodyClass = darkMode ? 'text-glasswhite' : 'text-primary';
  const textHeadingClass = darkMode ? 'text-glasswhite' : 'text-heading';
  const cardClass = darkMode ? 'bg-primarylight border-primarycat' : 'bg-glasswhite border-primarygcat2';
  const primaryButtonBg = darkMode ? 'bg-primary hover:bg-primarylight text-glasswhite' : 'bg-primarycat hover:bg-primary text-glasswhite';
  const secondaryButtonBg = darkMode ? 'border-glassblue text-glassblue hover:bg-glassblue hover:text-bgdark' : 'border-primarycat text-primary hover:bg-primarycat hover:text-glasswhite';



  const primaryColor = darkMode ? 'text-amber-400' : 'text-amber-800';
  const primaryBgLight = darkMode ? 'bg-amber-900/30' : 'bg-amber-100';


  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`} style={{
      backgroundColor: darkMode ? '' : themeColor,
      background: darkMode ? '' : `linear-gradient(to bottom right, #F5F1E6, ${themeColor})`
    }}>
      {/* Header with glass effect */}
      {/* <header className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/80'} backdrop-blur-md py-4 border-b ${darkMode ? 'border-gray-700' : 'border-amber-200'} sticky top-0 z-10 transition-colors duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${primaryBgLight} ${primaryColor}`}>
              <ShoppingBag size={20} />
            </div>
            <h1 className={`${textHeadingClass} text-2xl font-serif transition-colors duration-300`}>My Profile</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-amber-200 text-amber-800'} transition-colors duration-300`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-amber-200'} ${textBodyClass} transition-colors duration-300`}>
                <Bell size={20} />
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
      </header> */}
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Profile Sidebar with glass morphism */}
          <div className="lg:w-1/4">
            <div className={`${cardClass} rounded-xl shadow-lg p-6 mb-6 border transition-colors duration-300`}>
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-6 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 animate-pulse blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <img 
                    src={userData.profileImage} 
                    alt={userData.name} 
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute bottom-0 right-0 bg-amber-600 text-white rounded-full p-2 shadow-lg hover:bg-amber-700 transition-colors">
                    <Edit2 size={16} />
                  </button>
                </div>
                <h2 className={`${textHeadingClass} font-medium text-xl transition-colors duration-300`}>{userData.name}</h2>
                <p className={`${textBodyClass} text-sm transition-colors duration-300`}>{userData.email}</p>
                <p className={`${primaryColor} text-xs mt-1 transition-colors duration-300`}>Member since {userData.memberSince}</p>
                
                <div className="w-full mt-4 h-2 bg-amber-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                    style={{ width: '65%' }}
                  ></div>
                </div>
                <p className={`w-full text-xs ${textBodyClass} mt-1 transition-colors duration-300`}>Elite Member (65% to VIP)</p>
              </div>
              
              <nav>
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab('profile')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'profile' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <User size={18} />
                        <span>Profile</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'profile' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'orders' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Package size={18} />
                        <span>Orders</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'orders' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('wishlist')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'wishlist' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Heart size={18} />
                        <span>Wishlist</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'wishlist' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('addresses')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'addresses' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <MapPin size={18} />
                        <span>Addresses</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'addresses' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('payment')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'payment' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <CreditCard size={18} />
                        <span>Payment Methods</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'payment' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        activeTab === 'settings' 
                          ? `${primaryBgLight} ${primaryColor} shadow-sm` 
                          : `${textBodyClass} hover:${primaryBgLight} hover:${primaryColor}`
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Settings size={18} />
                        <span>Settings</span>
                      </span>
                      <ChevronRight size={16} className={activeTab === 'settings' ? 'opacity-100' : 'opacity-0'} />
                    </button>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-amber-200 dark:border-gray-700">
                <button className={`w-full flex items-center justify-center gap-2 p-3 text-red-500 hover:text-red-600 transition-colors duration-300`}>
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
            
            <div className={`${cardClass} rounded-xl shadow-lg p-6 border overflow-hidden relative transition-colors duration-300`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200 to-transparent rounded-bl-full opacity-50 dark:from-amber-900 dark:opacity-30"></div>
              <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>My Fragrance Profile</h3>
              <div className="space-y-4">
                <div>
                  <p className={`${textBodyClass} text-sm mb-2 transition-colors duration-300`}>Favorite Scent Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {userData.favoriteScents.map(scent => (
                      <span key={scent} className={`px-3 py-1 ${primaryBgLight} ${primaryColor} text-xs rounded-full transition-colors duration-300`}>
                        {scent}
                      </span>
                    ))}
                  </div>
                </div>
                <button className={`w-full mt-4 px-4 py-2 border rounded-lg ${secondaryButtonBg} transition-all duration-300 hover:shadow-md text-sm`}>
                  Update Preferences
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-amber-200 dark:border-gray-700">
                <h4 className={`${textHeadingClass} text-sm font-medium mb-2 transition-colors duration-300`}>Scent of the Month</h4>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-md">
                    <span className="text-white text-xs">NEW</span>
                  </div>
                  <div>
                    <p className={`${textHeadingClass} text-sm font-medium transition-colors duration-300`}>Amber Mystique</p>
                    <p className={`${textBodyClass} text-xs transition-colors duration-300`}>Perfect for your preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Area with glass morphism */}
          <div className="lg:w-3/4">
            {activeTab === 'profile' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border overflow-hidden relative transition-colors duration-300`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-100 via-amber-200 to-transparent rounded-bl-full opacity-30 dark:from-amber-900 dark:via-amber-800 dark:opacity-20"></div>
                
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`${textHeadingClass} text-xl font-medium transition-colors duration-300`}>Personal Information</h2>
                  <button className={`flex items-center gap-1 ${primaryColor} hover:opacity-80 transition-colors duration-300 text-sm`}>
                    <Edit2 size={16} />
                    <span>Edit</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Full Name</label>
                    <p className={`${textHeadingClass} font-medium group-hover:${primaryColor} transition-colors duration-300`}>{userData.name}</p>
                  </div>
                  <div className="group">
                    <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Email Address</label>
                    <p className={`${textHeadingClass} font-medium group-hover:${primaryColor} transition-colors duration-300`}>{userData.email}</p>
                  </div>
                  <div className="group">
                    <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Phone Number</label>
                    <p className={`${textHeadingClass} font-medium group-hover:${primaryColor} transition-colors duration-300`}>+33 6 12 34 56 78</p>
                  </div>
                  <div className="group">
                    <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Date of Birth</label>
                    <p className={`${textHeadingClass} font-medium group-hover:${primaryColor} transition-colors duration-300`}>May 15, 1988</p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className={`${textHeadingClass} text-lg font-medium mb-6 transition-colors duration-300`}>Communication Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="email-newsletter" 
                        className={`w-5 h-5 rounded text-amber-600 border-amber-300 focus:ring-amber-500 transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600' : ''}`} 
                        defaultChecked 
                      />
                      <label htmlFor="email-newsletter" className={`ml-3 ${textBodyClass} transition-colors duration-300`}>Email newsletters about new products and collections</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="email-promos" 
                        className={`w-5 h-5 rounded text-amber-600 border-amber-300 focus:ring-amber-500 transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600' : ''}`} 
                        defaultChecked 
                      />
                      <label htmlFor="email-promos" className={`ml-3 ${textBodyClass} transition-colors duration-300`}>Exclusive offers and promotions</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="sms-updates" 
                        className={`w-5 h-5 rounded text-amber-600 border-amber-300 focus:ring-amber-500 transition-colors duration-300 ${darkMode ? 'bg-gray-700 border-gray-600' : ''}`} 
                      />
                      <label htmlFor="sms-updates" className={`ml-3 ${textBodyClass} transition-colors duration-300`}>SMS updates about your orders</label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-amber-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-1">
                      <h4 className={`${textHeadingClass} font-medium mb-1 transition-colors duration-300`}>Beauty Profile Analysis</h4>
                      <p className={`${textBodyClass} text-sm transition-colors duration-300`}>Based on your preferences and purchase history</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 dark:from-amber-900 dark:to-amber-700 mx-auto flex items-center justify-center shadow-sm">
                          <span className={`text-amber-800 dark:text-amber-300 font-medium`}>80%</span>
                        </div>
                        <p className={`${textBodyClass} text-xs mt-2 transition-colors duration-300`}>Amber</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-300 dark:from-rose-900 dark:to-rose-700 mx-auto flex items-center justify-center shadow-sm">
                          <span className={`text-rose-800 dark:text-rose-300 font-medium`}>65%</span>
                        </div>
                        <p className={`${textBodyClass} text-xs mt-2 transition-colors duration-300`}>Floral</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lime-100 to-lime-300 dark:from-lime-900 dark:to-lime-700 mx-auto flex items-center justify-center shadow-sm">
                          <span className={`text-lime-800 dark:text-lime-300 font-medium`}>45%</span>
                        </div>
                        <p className={`${textBodyClass} text-xs mt-2 transition-colors duration-300`}>Fresh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border transition-colors duration-300`}>
                <h2 className={`${textHeadingClass} text-xl font-medium mb-6 transition-colors duration-300`}>My Orders</h2>
                
                <div className="space-y-6">
                  {userData.recentOrders.map(order => (
                    <div key={order.id} className={`${darkMode ? 'bg-gray-700/50' : 'bg-amber-50/80'} border ${darkMode ? 'border-gray-600' : 'border-amber-200'} rounded-xl p-4 transition-all duration-300 hover:shadow-md group`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <p className={`${primaryColor} font-medium group-hover:text-amber-600 transition-colors duration-300`}>{order.id}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock size={14} className={`${textBodyClass} transition-colors duration-300`} />
                            <span className={`${textBodyClass} text-sm transition-colors duration-300`}>{order.date}</span>
                          </div>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                              : order.status === 'Shipped' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                          } transition-colors duration-300`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between mt-4">
                        <div className="text-sm">
                          <span className={`${textBodyClass} transition-colors duration-300`}>{order.items} item{order.items > 1 ? 's' : ''}</span>
                          <span className={`mx-2 ${textBodyClass} opacity-30 transition-colors duration-300`}>•</span>
                          <span className={`font-medium ${textHeadingClass} transition-colors duration-300`}>{order.total}</span>
                        </div>
                        <button className={`mt-3 md:mt-0 px-4 py-2 border rounded-lg ${secondaryButtonBg} transition-all duration-300 text-sm`}>
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full mt-8 px-4 py-3 rounded-lg ${primaryButtonBg} text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium`}>
                  View All Orders
                </button>
              </div>
            )}
            
            {activeTab === 'addresses' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border transition-colors duration-300`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`${textHeadingClass} text-xl font-medium transition-colors duration-300`}>My Addresses</h2>
                  <button className={`flex items-center gap-1 ${primaryColor} hover:opacity-80 transition-colors duration-300 text-sm`}>
                    <span>Add New Address</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userData.savedAddresses.map((address, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700/50' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-amber-200'} rounded-xl p-5 relative group hover:shadow-md transition-all duration-300`}>
                      {address.default && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs rounded-md">
                          Default
                        </span>
                      )}
                      <p className={`${textHeadingClass} font-medium mb-1 group-hover:${primaryColor} transition-colors duration-300`}>{address.type}</p>
                      <p className={`${textBodyClass} text-sm mb-6 transition-colors duration-300`}>{address.address}</p>
                      <div className="flex gap-2">
                        <button className={`px-3 py-1.5 rounded-lg ${secondaryButtonBg} transition-all duration-300 text-xs`}>
                          Edit
                        </button>
                        {!address.default && (
                          <button className={`px-3 py-1.5 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-amber-300 text-amber-700 hover:bg-amber-100'} transition-all duration-300 text-xs`}>
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border transition-colors duration-300`}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`${textHeadingClass} text-xl font-medium transition-colors duration-300`}>Payment Methods</h2>
                  <button className={`flex items-center gap-1 ${primaryColor} hover:opacity-80 transition-colors duration-300 text-sm`}>
                    <span>Add New Card</span>
                  </button>
                </div>
                
                <div className="space-y-6">
                  {userData.paymentMethods.map((payment, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700/50' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-amber-200'} rounded-xl p-5 relative group hover:shadow-md transition-all duration-300`}>
                      {payment.default && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs rounded-md">
                          Default
                        </span>
                      )}
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`${textHeadingClass} font-medium group-hover:${primaryColor} transition-colors duration-300`}>{payment.type} •••• {payment.last4}</span>
                      </div>
                      <p className={`${textBodyClass} text-sm mb-6 transition-colors duration-300`}>Expires {payment.expires}</p>
                      <div className="flex gap-2">
                        <button className={`px-3 py-1.5 rounded-lg ${secondaryButtonBg} transition-all duration-300 text-xs`}>
                          Edit
                        </button>
                        {!payment.default && (
                          <button className={`px-3 py-1.5 border rounded-lg ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-amber-300 text-amber-700 hover:bg-amber-100'} transition-all duration-300 text-xs`}>
                            Set as Default
                          </button>
                        )}
                        <button className="px-3 py-1.5 border border-red-300 text-red-500 rounded-lg hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-900/30 transition-all duration-300 text-xs">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border transition-colors duration-300`}>
                <h2 className={`${textHeadingClass} text-xl font-medium mb-6 transition-colors duration-300`}>My Wishlist</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className={`group relative overflow-hidden rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-100'} shadow-sm hover:shadow-md transition-all duration-300`}>
                      <div className="aspect-square relative overflow-hidden">
                      <img 
                          src={images[`../assets/images/Perfume_img/at${item}.png`]?.default} 
                          alt={`Wishlist item ${item}`} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-rose-500 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 cursor-pointer">
                          <Heart size={18} className="fill-current" />
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className={`${textHeadingClass} font-medium mb-1 transition-colors duration-300 group-hover:${primaryColor}`}>Signature Scent #{item}</h3>
                        <p className={`${textBodyClass} text-sm transition-colors duration-300`}>Eau de Parfum</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className={`${textHeadingClass} font-bold transition-colors duration-300`}>${(60 + item * 10).toFixed(2)}</span>
                          <button className={`px-3 py-1.5 rounded-lg ${primaryButtonBg} text-white transition-all duration-300 text-xs`}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
                        <div className="w-full p-4 text-white">
                          <button className="w-full py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-lg hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 text-sm font-medium">
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex items-center justify-center">
                  <button className={`px-6 py-3 rounded-lg ${primaryButtonBg} text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium`}>
                    View More Items
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className={`${cardClass} rounded-xl shadow-lg p-6 border transition-colors duration-300`}>
                <h2 className={`${textHeadingClass} text-xl font-medium mb-6 transition-colors duration-300`}>Account Settings</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>Password Management</h3>
                    <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-xl p-5 transition-all duration-300`}>
                      <div className="mb-4">
                        <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Current Password</label>
                        <input 
                          type="password" 
                          className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="mb-4">
                        <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>New Password</label>
                        <input 
                          type="password" 
                          className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="mb-6">
                        <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Confirm New Password</label>
                        <input 
                          type="password" 
                          className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                          placeholder="••••••••"
                        />
                      </div>
                      <button className={`px-4 py-2 rounded-lg ${primaryButtonBg} text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium`}>
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>Notification Settings</h3>
                    <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-xl p-5 transition-all duration-300`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`${textHeadingClass} font-medium transition-colors duration-300`}>Order Updates</p>
                            <p className={`${textBodyClass} text-sm transition-colors duration-300`}>Receive notifications about your orders</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" />
                            <div className={`w-11 h-6 bg-gray-300 rounded-full peer ${darkMode ? 'dark:bg-gray-600' : ''} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600`}></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`${textHeadingClass} font-medium transition-colors duration-300`}>Special Offers</p>
                            <p className={`${textBodyClass} text-sm transition-colors duration-300`}>Receive notifications about promotions</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" />
                            <div className={`w-11 h-6 bg-gray-300 rounded-full peer ${darkMode ? 'dark:bg-gray-600' : ''} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600`}></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`${textHeadingClass} font-medium transition-colors duration-300`}>New Arrivals</p>
                            <p className={`${textBodyClass} text-sm transition-colors duration-300`}>Receive notifications about new products</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className={`w-11 h-6 bg-gray-300 rounded-full peer ${darkMode ? 'dark:bg-gray-600' : ''} peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600`}></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>Language & Region</h3>
                    <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-xl p-5 transition-all duration-300`}>
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                          <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Language</label>
                          <div className="relative">
                            <select 
                              className={`w-full appearance-none px-4 py-2 pr-8 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                            >
                              <option>English (US)</option>
                              <option>French</option>
                              <option>German</option>
                              <option>Spanish</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <Globe size={16} className={textBodyClass} />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <label className={`block ${textBodyClass} text-sm mb-1 transition-colors duration-300`}>Region</label>
                          <div className="relative">
                            <select 
                              className={`w-full appearance-none px-4 py-2 pr-8 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                            >
                              <option>France</option>
                              <option>United States</option>
                              <option>United Kingdom</option>
                              <option>Germany</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <MapPin size={16} className={textBodyClass} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <button className={`px-4 py-2 border rounded-lg ${secondaryButtonBg} transition-all duration-300 text-sm`}>
                    Reset to Defaults
                  </button>
                  <button className={`px-4 py-2 rounded-lg ${primaryButtonBg} text-white transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium`}>
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer with glass effect */}
        {/* <footer className={`mt-12 ${darkMode ? 'bg-gray-800/70' : 'bg-white/80'} backdrop-blur-md py-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className={`${textHeadingClass} font-serif text-lg mb-4 transition-colors duration-300`}>Luxury Fragrances</h3>
                <p className={`${textBodyClass} text-sm mb-6 transition-colors duration-300`}>Curated scents that evoke emotions and memories, crafted with the finest ingredients from around the world.</p>
                <div className="flex space-x-4">
                  {['Facebook', 'Instagram', 'Twitter', 'Pinterest'].map(social => (
                    <a key={social} href="#" className={`${textBodyClass} hover:${primaryColor} transition-colors duration-300`}>
                      <span className="sr-only">{social}</span>
                      <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center hover:${primaryBgLight} transition-colors duration-300`}>
                        {social === 'Facebook' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
                        {social === 'Instagram' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
                        {social === 'Twitter' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>}
                        {social === 'Pinterest' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8"></path><path d="M12 8v8"></path><circle cx="12" cy="12" r="10"></circle></svg>}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>Quick Links</h3>
                <ul className="space-y-3">
                  {['Shop All', 'New Arrivals', 'Best Sellers', 'Gift Guide', 'Fragrance Finder', 'Our Story'].map(link => (
                    <li key={link}>
                      <a href="#" className={`${textBodyClass} hover:${primaryColor} transition-colors duration-300 text-sm`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`${textHeadingClass} font-medium mb-4 transition-colors duration-300`}>Customer Care</h3>
                <ul className="space-y-3">
                  {['Contact Us', 'FAQs', 'Shipping & Returns', 'Track Order', 'Privacy Policy', 'Terms of Service'].map(link => (
                    <li key={link}>
                      <a href="#" className={`${textBodyClass} hover:${primaryColor} transition-colors duration-300 text-sm`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex flex-col md:flex-row md:justify-between md:items-center`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4 md:mb-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${primaryBgLight} ${primaryColor}`}>
                  <ShoppingBag size={20} />
                </div>
                <p className={`${textBodyClass} text-sm transition-colors duration-300`}>&copy; 2025 Luxury Fragrances. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/api/placeholder/40/25?text=Visa" alt="Visa" className="h-6" />
                <img src="/api/placeholder/40/25?text=Mastercard" alt="Mastercard" className="h-6" />
                <img src="/api/placeholder/40/25?text=Amex" alt="American Express" className="h-6" />
                <img src="/api/placeholder/40/25?text=PayPal" alt="PayPal" className="h-6" />
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default ProfilePage;