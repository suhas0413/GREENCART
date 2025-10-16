import React, { useState } from 'react';

const Login = ({ onClose, onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative animate-fadeIn">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 text-gray-400 hover:text-green-600 text-2xl font-bold">&times;</button>
        <h2 className="text-2xl font-extrabold text-green-700 mb-4 text-center">{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form className="flex flex-col gap-4">
          {isSignup && <input type="text" placeholder="Full Name" className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" />}
          <input type="email" placeholder="Email" className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <input type="password" placeholder="Password" className="px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" />
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold px-6 py-2 rounded-full shadow transition">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475700/facebook-color.svg" alt="Facebook" className="w-5 h-5" /> Continue with Facebook
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button className="ml-1 text-green-700 font-bold hover:underline" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
