import React from 'react';
import { Sun, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

function Company() {
    return (
        <div className="content-stretch flex items-center relative shrink-0 w-[101px]" data-name="Company">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[103px]">
                <p className="whitespace-pre-wrap">
                    <span className="leading-[1.45]">Solar</span>
                    <span className="leading-[1.45] text-[#008234]">Credit</span>
                </p>
            </div>
        </div>
    );
}

function Text() {
    return (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
            <Company />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[min-content]">
                <p className="leading-[1.45] whitespace-pre-wrap">We create a transparent system where excess rooftop solar becomes verifiable credits—rewarding producers and enabling clean-energy participation for everyone.</p>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Content">
            <Text />
        </div>
    );
}

function Header() {
    return (
        <div className="content-stretch flex items-start pb-[8px] relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
                <p className="leading-[1.45]">Features</p>
            </div>
        </div>
    );
}

function Column() {
    return (
        <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[172px]" data-name="Column 1">
            <Header />
            <button className="cursor-pointer flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] text-left tracking-[-0.08px] w-[min-content]">
                <p className="leading-[1.45] whitespace-pre-wrap">Core features</p>
            </button>
            <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[163px]" href="https://solar-credit.lovable.app/auth">
                <p className="cursor-pointer decoration-solid leading-[1.45] underline whitespace-pre-wrap">Producer Dashboard</p>
            </a>
            <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[172px]" href="https://solar-credit.lovable.app/auth">
                <p className="cursor-pointer decoration-solid leading-[1.45] underline whitespace-pre-wrap">Consumer Dashboard</p>
            </a>
        </nav>
    );
}

function Header1() {
    return (
        <div className="content-stretch flex items-start pb-[8px] relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
                <p className="leading-[1.45]">Learn more</p>
            </div>
        </div>
    );
}

function Column1() {
    return (
        <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[286px]" data-name="Column 2">
            <Header1 />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">What is SolarCredit ?</p>
            </div>
            <button className="cursor-pointer flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] text-left tracking-[-0.08px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">How can we pay Electricity Bills?</p>
            </button>
            <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full" href="https://chatgpt.com/g/g-p-697cf3f65cf48191afc6b12a72968d58-solar-credit/project">
                <p className="cursor-pointer decoration-solid leading-[1.45] underline whitespace-pre-wrap">SolarGPT</p>
            </a>
        </nav>
    );
}

function Nav() {
    return (
        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Nav">
            <Column />
            <Column1 />
        </div>
    );
}

export default function Container() {
    return (
        <div className="content-stretch flex flex-col gap-[31px] items-start p-10 h-[550px] relative size-full" data-name="Container">
            <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
            <Content />
            <Nav />
        </div>
    );
}