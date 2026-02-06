import React from 'react';
import { Sun, Battery, DollarSign, ArrowRight } from 'lucide-react';

function Header() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.48px] w-full">
                <h3 className="text-[24px] whitespace-pre-wrap">
                    <span className="leading-[1.2]">{`How `}</span>
                    <span className="leading-[1.2] text-[#008234]">SolarCredit</span>
                    <span className="leading-[1.2]">{` Works`}</span>
                </h3>
            </div>
        </div>
    );
}

function Text() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Step 1 – Track</p>
            </div>
        </div>
    );
}

function Author() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Author">
            <Text />
        </div>
    );
}

function Card() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 2">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
                    <Author />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full">
                        <p className="leading-[1.45] whitespace-pre-wrap">Connect or log your solar energy generation</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Text1() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Step 2 – Convert</p>
            </div>
        </div>
    );
}

function Author1() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Author">
            <Text1 />
        </div>
    );
}

function Card1() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
                    <Author1 />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full">
                        <p className="leading-[1.45] whitespace-pre-wrap">Surplus energy converts into verified Solar Credits</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Column() {
    return (
        <li className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Column 1">
            <Card />
            <Card1 />
        </li>
    );
}

function Text2() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Step 3 – Use or Trade</p>
            </div>
        </div>
    );
}

function Author2() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Author">
            <Text2 />
        </div>
    );
}

function Card2() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
                    <Author2 />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.09px] w-full">
                        <p className="leading-[1.45] whitespace-pre-wrap">Use credits to reduce bills or trade in the marketplace</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Text3() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Step 4 – Impact</p>
            </div>
        </div>
    );
}

function Author3() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Author">
            <Text3 />
        </div>
    );
}

function Card3() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 5">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
                    <Author3 />
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                        <p className="leading-[1.45] whitespace-pre-wrap">See real-world environmental impact automatically</p>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Column1() {
    return (
        <li className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Column 2">
            <Card2 />
            <Card3 />
        </li>
    );
}

function Column2() {
    return (
        <a className="bg-[#008234] block content-stretch cursor-pointer flex flex-col items-center rounded-[20px] size-full" data-name="Column 3" href="https://solar-credit.lovable.app/auth">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] w-[244px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Start Earning Credits</p>
            </div>
        </a>
    );
}

function Gallery() {
    return (
        <ul className="content-stretch flex flex-col gap-[24px] h-[842px] items-center relative shrink-0 w-full" data-name="Gallery">
            <Column />
            <Column1 />
            <li className="h-[48px] relative shrink-0 w-[191px]">
                <Column2 />
            </li>
        </ul>
    );
}
function Group() {
    return (
        <div className="relative size-full">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-px not-italic text-[11px] text-black top-[7.5px] tracking-[-0.055px] w-[321px]">
                <p className="whitespace-pre-wrap">
                    <span className="leading-[1.45]">{`To know more about `}</span>
                    <span className="leading-[1.45] text-[#008234]">SolarCredit</span>
                </p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-0 not-italic text-[24px] text-black top-[25px] tracking-[-0.12px] w-[321px]">
                <p className="leading-[1.45] whitespace-pre-wrap">{`Watch Video `}</p>
            </div>
            <div className="absolute h-[214px] left-[0.5px] top-[48px] w-full" data-name="Embed 2">
                <div className="embed overflow-clip size-full"><iframe width="380" height="214" src="https://www.youtube.com/embed/UcJmJoxA8r4?si=3UHhQYtsXZFKxBX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            </div>
        </div>
    );
}

export default function TestimonialWall() {
    return (
        <section id="how-it-works" className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[24px] pt-10 pb-80 relative size-full" data-name="Testimonial wall 1">
            <Header />
            <Gallery />
            <Group />
        </section>
    );
}