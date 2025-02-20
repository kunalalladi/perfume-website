import React, { useState } from 'react';
import { Facebook, Twitter, Mail, Linkedin, User, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';

// Separate Input Component
const FormInput = React.memo(({ icon: Icon, type, placeholder, value, onChange, showPassword, onTogglePassword }) => {
  return (
    <div className="relative w-full max-w-md mb-6">
      <div className="flex items-center px-6 h-16 bg-glasswhite/30 backdrop-blur-md rounded-2xl">
        <Icon className="text-2xl text-primarylight" />
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 ml-4 bg-transparent outline-none border-none font-medium text-lg text-primary placeholder-primarycat/70"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="text-primarylight hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
});

// Separate Social Button Component
const SocialButton = React.memo(({ icon: Icon, label }) => (
  <button 
    type="button"
    className="group relative flex items-center justify-center gap-3 w-full max-w-[180px] h-12 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primarylight/10 backdrop-blur-sm" />
    <Icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={20} />
    <span className="font-medium text-primary">{label}</span>
  </button>
));

// Main Form Component
const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  
  // Sign In Form State
  const [signInForm, setSignInForm] = useState({
    username: '',
    password: '',
    showPassword: false
  });

  // Sign Up Form State
  const [signUpForm, setSignUpForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });

  // Simple input change handlers
  const handleSignInChange = (field) => (e) => {
    setSignInForm(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSignUpChange = (field) => (e) => {
    setSignUpForm(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  // Toggle password visibility
  const toggleSignInPassword = () => {
    setSignInForm(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }));
  };

  const toggleSignUpPassword = (field) => {
    setSignUpForm(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(type === 'signIn' ? signInForm : signUpForm);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brandWhite via-bgcolor to-glasswhite">
      <div className="relative container mx-auto min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[1100px] min-h-[600px] bg-glasswhite/30 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="relative grid grid-cols-2 min-h-[600px]">
            {/* Sign In Form */}
            <div className={`col-span-1 flex flex-col justify-center px-12 py-8 transition-all duration-500 ${isSignUpMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <h2 className="text-4xl font-bold text-primary mb-3">Welcome Back</h2>
              <p className="text-primarylight mb-8">Please sign in to your account</p>

              <form onSubmit={(e) => handleSubmit(e, 'signIn')} className="space-y-6">
                <FormInput
                  icon={User}
                  type="text"
                  placeholder="Username"
                  value={signInForm.username}
                  onChange={handleSignInChange('username')}
                />
                <FormInput
                  icon={Lock}
                  type="password"
                  placeholder="Password"
                  value={signInForm.password}
                  onChange={handleSignInChange('password')}
                  showPassword={signInForm.showPassword}
                  onTogglePassword={toggleSignInPassword}
                />

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-primarylight text-primary focus:ring-primary" />
                    <span className="text-primarylight">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:text-primarylight transition-colors">Forgot Password?</a>
                </div>

                <button 
                  type="submit"
                  className="group relative w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primarylight text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Sign In
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </form>

              <div className="mt-8">
                <p className="text-center text-primarylight mb-6">Or continue with</p>
                <div className="grid grid-cols-2 gap-4">
                  <SocialButton icon={Twitter} label="Twitter" />
                  <SocialButton icon={Facebook} label="Facebook" />
                </div>
              </div>
            </div>

            {/* Sign Up Form */}
            <div className={`col-span-1 flex flex-col justify-center px-12 py-8 transition-all duration-500 ${isSignUpMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <h2 className="text-4xl font-bold text-primary mb-3">Create Account</h2>
              <p className="text-primarylight mb-8">Join us today and get started</p>

              <form onSubmit={(e) => handleSubmit(e, 'signUp')} className="space-y-6">
                <FormInput
                  icon={User}
                  type="text"
                  placeholder="Full Name"
                  value={signUpForm.fullname}
                  onChange={handleSignUpChange('fullname')}
                />
                <FormInput
                  icon={Mail}
                  type="email"
                  placeholder="Email"
                  value={signUpForm.email}
                  onChange={handleSignUpChange('email')}
                />
                <FormInput
                  icon={Lock}
                  type="password"
                  placeholder="Password"
                  value={signUpForm.password}
                  onChange={handleSignUpChange('password')}
                  showPassword={signUpForm.showPassword}
                  onTogglePassword={() => toggleSignUpPassword('showPassword')}
                />
                <FormInput
                  icon={Lock}
                  type="password"
                  placeholder="Confirm Password"
                  value={signUpForm.confirmPassword}
                  onChange={handleSignUpChange('confirmPassword')}
                  showPassword={signUpForm.showConfirmPassword}
                  onTogglePassword={() => toggleSignUpPassword('showConfirmPassword')}
                />

                <button 
                  type="submit"
                  className="group relative w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primarylight text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    Sign Up
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </form>

              <div className="mt-8">
                <p className="text-center text-primarylight mb-6">Or sign up with</p>
                <div className="grid grid-cols-3 gap-4">
                  <SocialButton icon={Twitter} label="Twitter" />
                  <SocialButton icon={Facebook} label="Facebook" />
                  <SocialButton icon={Linkedin} label="LinkedIn" />
                </div>
              </div>
            </div>

            {/* Overlay Panel */}
            <div className={`absolute top-0 ${isSignUpMode ? 'left-0' : 'right-0'} w-1/2 h-full transition-transform duration-700 ease-in-out bg-gradient-to-br from-primary to-primarylight`}>
              <div className="relative h-full flex flex-col justify-center px-12 py-8 text-white text-center">
                {!isSignUpMode ? (
                  <>
                    <h2 className="text-3xl font-bold mb-6">New Here?</h2>
                    <p className="mb-8 text-glasswhite text-lg">
                      Join us today and discover a world of possibilities. Create your account in just a few clicks.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSignUpMode(true)}
                      className="group relative px-8 h-14 rounded-xl border-2 border-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        Create Account
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
                    <p className="mb-8 text-glasswhite text-lg">
                      Already have an account? Sign in to access your dashboard and continue your journey.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSignUpMode(false)}
                      className="group relative px-8 h-14 rounded-xl border-2 border-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        Sign In
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;