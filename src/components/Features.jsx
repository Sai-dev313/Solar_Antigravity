import React from 'react';

// Placeholders for missing Figma assets
const imgImage = "src/assets/ChatGPT Image Feb 6, 2026, 02_59_44 AM.png";
const imgImage1 = "src/assets/ChatGPT Image Feb 6, 2026, 03_05_21 AM.png";
const imgImage2 = "src/assets/ChatGPT Image Feb 6, 2026, 03_07_43 AM.png";

function Header() {
    return (
        <div className="content-stretch flex flex-col h-[52px] items-start relative shrink-0 w-[350px]" data-name="Header">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-[334px]">
                <h3 className="whitespace-pre-wrap">
                    <span className="leading-[1.2]">{`Why Most `}</span>
                    <span className="leading-[1.2] text-[#008234]">Solar Energy</span>
                    <span className="leading-[1.2]">{` Goes Unrewarded`}</span>
                </h3>
            </div>
        </div>
    );
}

function Header1() {
    return (
        <header className="content-stretch flex items-center justify-center pb-[20px] pt-[10px] relative size-full" data-name="Header 1">
            <Header />
        </header>
    );
}

function Text() {
    return (
        <div className="relative shrink-0 w-full" data-name="Text">
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative w-full">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
                    <h5 className="block leading-[1.2] whitespace-pre-wrap">Rooftop solar owners export surplus without visibility</h5>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
                    <p className="leading-[1.45] whitespace-pre-wrap">Rooftop solar producers export surplus energy to the grid but lack visibility, transparency, rewards, or ownership, leaving the value and impact of their clean energy invisible.</p>
                </div>
            </div>
        </div>
    );
}

function Card() {
    return (
        <article className="bg-[rgba(0,0,0,0.05)] block content-stretch flex flex-col items-start overflow-clip rounded-[16px] size-full" data-name="Card 1">
            <Text />
            <div aria-hidden="true" className="-translate-x-1/2 -translate-y-1/2 absolute h-[158px] left-[calc(50%+0.5px)] pointer-events-none rounded-[32px] top-[calc(50%+121px)] w-[218px]" data-name="Image" role="presentation">
                {/* Replaced invalid Figma import with placeholder */}
                <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={"https://github.com/Sai-dev313/Solar_Antigravity/blob/main/src/assets/ChatGPT%20Image%20Feb%206%2C%202026%2C%2002_59_44%20AM.png"} />
                <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 rounded-[32px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
            </div>
        </article>
    );
}

function Text1() {
    return (
        <div className="relative shrink-0 w-full" data-name="Text">
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative w-full">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
                    <h5 className="block leading-[1.2] whitespace-pre-wrap">Consumers don’t benefit from clean energy participation</h5>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
                    <p className="leading-[1.45] whitespace-pre-wrap">Consumers have no direct way to participate in clean energy, lacking transparency, incentives, or proof of impact, making sustainable choices feel distant, passive, and unrewarding.</p>
                </div>
            </div>
        </div>
    );
}

function Card1() {
    return (
        <article className="bg-[rgba(0,0,0,0.05)] block content-stretch flex flex-col items-start overflow-clip rounded-[16px] size-full" data-name="Card 2">
            <Text1 />
            <div aria-hidden="true" className="-translate-x-1/2 absolute bottom-[-23px] h-[151px] left-[calc(50%+0.5px)] pointer-events-none rounded-[32px] w-[218px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgImage1} />
                <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 rounded-[32px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
            </div>
        </article>
    );
}

function Text2() {
    return (
        <div className="relative shrink-0 w-full" data-name="Text">
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative w-full">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
                    <h5 className="block leading-[1.2] whitespace-pre-wrap">Environmental impact feels invisible and unrewarding</h5>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
                    <p className="leading-[1.45] whitespace-pre-wrap">Clean energy reduces emissions, but its environmental impact feels abstract and delayed, with no real-time feedback, recognition, or rewards to motivate people to consistently participate</p>
                </div>
            </div>
        </div>
    );
}

function Card2() {
    return (
        <article className="bg-[rgba(0,0,0,0.05)] block content-stretch flex flex-col items-start overflow-clip rounded-[16px] size-full" data-name="Card 3">
            <Text2 />
            <div aria-hidden="true" className="-translate-x-1/2 absolute bottom-[-20px] h-[154px] left-[calc(50%+0.5px)] pointer-events-none rounded-[32px] w-[218px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgImage2} />
                <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 rounded-[32px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
            </div>
        </article>
    );
}

function FeatureCards() {
    return (
        <ul className="content-stretch flex flex-col gap-[24px] items-start pb-[80px] px-[24px] relative size-500px" data-name="Feature cards 1">
            <li className="h-[352px] relative shrink-0 w-full md:w-500px">
                <Card />
            </li>
            <li className="h-[375px] relative shrink-0 w-full md:w-500px">
                <Card1 />
            </li>
            <li className="h-[352px] relative shrink-0 w-full md:w-500px">
                <Card2 />
            </li>
        </ul>
    );
}
function Marquee() {
    return (
        <section className="content-stretch flex items-center justify-center relative size-full" data-name="Marquee 1">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center tracking-[-0.26px] w-[290px]">
                <p className="leading-[1.2] whitespace-pre-wrap">SolarCredit fixes this gap — simply and responsibly.</p>
            </div>
        </section>
    );
}
export default function Features() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden flex flex-col items-center">
            <Header1 />
            <FeatureCards />
            <Marquee />
        </section>
    );
}
