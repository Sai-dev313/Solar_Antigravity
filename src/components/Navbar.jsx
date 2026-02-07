import React from 'react';

const Navbar = () => {
    return (
        <nav className="absolute h-[60px] top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-[#00A651] rounded-full px-8 py-4 shadow-2xl flex items-center justify-between w-full max-w-5xl">

                {/* Logo */}
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <span className="text-2xl font-bold text-white tracking-tight">
                        SolarCredit
                    </span>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center h-[25px]">
                    <button onClick={() => window.location.href='https://solar-credit.lovable.app/auth'} className="bg-white pb-8 text-center text-black px-8 py-3 rounded-full font-bold text-md hover:bg-gray-100 transition-all shadow-md h-[35px] p-0">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
