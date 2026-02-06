import React from 'react';
import { Play, ArrowRight, BatteryCharging, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function SecondaryButton() {
    return (
        <header className=" bg-[#e6e6e6] content-stretch flex h-[65px] items-center justify-center px-[16px] py-[12px] relative rounded-[25px] shrink-0 w-[225px]" data-name="Secondary button">
            <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.2)] border-dashed inset-[-1px] pointer-events-none rounded-[26px]" />
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[41px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#008234] text-[14px] text-center text-ellipsis tracking-[-0.07px] w-[251px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Built for India • Policy-aware • Transparent credits</p>
            </div>
        </header>
    );
}

function Text() {
    return (
        <div className="content-stretch flex flex-col gap-[25px] h-[245px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">
                <h1 className="whitespace-pre-wrap">
                    <span className="leading-[1.1]">{`Turn Your `}</span>
                    <span className="leading-[1.1] text-[#008234]">Solar Power</span>
                    <span className="leading-[1.1]">{` into `}</span>
                    <span className="leading-[1.1] text-[#008234]">Real</span>
                    <span className="leading-[1.1]">{` `}</span>
                    <span className="leading-[1.1] text-[#008234]">Value</span>
                    <span className="leading-[1.1]">.</span>
                </h1>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[80px] justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[289px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Track energy, earn solar credits, and use them to reduce electricity bills or trade responsibly.</p>
            </div>
        </div>
    );
}

function PrimaryButton() {
    return (
        <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#008234] content-stretch cursor-pointer flex h-[39px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[197px]" data-name="Primary button">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
                <p className="leading-[1.45] overflow-hidden">See How It Works?</p>
            </div>
        </button>
    );
}

const Hero = () => {
    return (
        <section className="content-stretch flex flex-col gap-[0px] items-center justify-center px-[24px] pt-48 pb-24 relative size-full" data-name="Hero 1">
            <SecondaryButton />
            <Text />
            <PrimaryButton />
        </section>
    );
};

export default Hero;
