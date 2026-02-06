import React from 'react';


function Header() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black tracking-[-0.48px]">
                <h3 className="block leading-[1.2] whitespace-pre-wrap">Who Is This For?</h3>
            </div>
        </div>
    );
}

function Icon() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Icon">
                    <circle cx="12.5" cy="12" fill="var(--fill-0, black)" fillOpacity="0.45" id="Shape" r="9" />
                </g>
            </svg>
        </div>
    );
}

function Header1() {
    return (
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Header">
            <Icon />
            <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.27px]">For Solar Producers</h5>
        </div>
    );
}

function Column() {
    return (
        <a className="bg-[#008234] content-stretch cursor-pointer flex flex-col h-[35px] items-center justify-center relative rounded-[20px] shrink-0 w-[168px]" data-name="Column 3" href="https://solar-credit.lovable.app/auth">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] w-[199px]">
                <p className="leading-[1.45] whitespace-pre-wrap">I Generate Solar</p>
            </div>
        </a>
    );
}

function Row() {
    return (
        <li className="bg-[rgba(0,0,0,0.05)] h-[249px] relative rounded-[16px] shrink-0 w-full" data-name="Row 1">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
                <Header1 />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[min-content]">
                    <ul className="list-disc whitespace-pre-wrap">
                        <li className="mb-0 ms-[24px]">
                            <span className="leading-[1.45]">Monetize surplus solar energy.</span>
                        </li>
                        <li className="mb-0 ms-[24px]">
                            <span className="leading-[1.45]">Transparent credit calculation.</span>
                        </li>
                        <li className="ms-[24px]">
                            <span className="leading-[1.45]">No technical complexity.</span>
                        </li>
                    </ul>
                </div>
                <Column />
            </div>
        </li>
    );
}

function Icon1() {
    return (
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.5px)] size-[21.213px] top-[calc(50%+0.5px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" }} >
                <div className="flex-none rotate-45">
                    <div className="bg-[rgba(0,0,0,0.45)] size-[15px]" data-name="Shape" />
                </div>
            </div>
        </div>
    );
}

function Header2() {
    return (
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Header">
            <Icon1 />
            <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.27px]">For Consumers</h5>
        </div>
    );
}

function Column1() {
    return (
        <a className="bg-[#008234] content-stretch cursor-pointer flex flex-col h-[35px] items-center justify-center relative rounded-[20px] shrink-0 w-[194px]" data-name="Column 3" href="https://solar-credit.lovable.app/auth">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] w-[220px]">
                <p className="leading-[1.45] whitespace-pre-wrap">I Want Clean Energy</p>
            </div>
        </a>
    );
}

function Row1() {
    return (
        <li className="bg-[rgba(0,0,0,0.05)] h-[269px] relative rounded-[16px] shrink-0 w-full" data-name="Row 2">
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
                <Header2 />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
                    <ul className="list-disc whitespace-pre-wrap">
                        <li className="mb-0 ms-[27px]">
                            <span className="leading-[1.45]">Support clean energy.</span>
                        </li>
                        <li className="mb-0 ms-[27px]">
                            <span className="leading-[1.45]">Reduce electricity bills using credits.</span>
                        </li>
                        <li className="ms-[27px]">
                            <span className="leading-[1.45]">No solar installation needed.</span>
                        </li>
                    </ul>
                </div>
                <Column1 />
            </div>
        </li>
    );
}

function List() {
    return (
        <ul className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
            <Row />
            <Row1 />
        </ul>
    );
}

function Header3() {
    return (
        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black tracking-[-0.48px] w-full">
                <h3 className="text-[24px] whitespace-pre-wrap">
                    <span className="leading-[1.2]">{`Key `}</span>
                    <span className="leading-[1.2] text-[#008234]">Features</span>
                </h3>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">We used AI to improve our solution, rather than making it an AI-Powered solution.</p>
            </div>
        </div>
    );
}

function Text() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Smart Energy Dashboard</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Real-time tracking without complexity</p>
            </div>
        </div>
    );
}

function Author() {
    return (
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Author">
            <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/motion_blur_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" />
            </div>
            <Text />
        </div>
    );
}

function Card() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 2">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <Author />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Text1() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Verified Solar Credits</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">No greenwashing, no fake claims</p>
            </div>
        </div>
    );
}

function Author1() {
    return (
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Author">
            <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/motion_blur_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" />
            </div>
            <Text1 />
        </div>
    );
}

function Card1() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <Author1 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Column2() {
    return (
        <li className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Column 1">
            <Card />
            <Card1 />
        </li>
    );
}

function Text2() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Bill Payment Integration (Simulated)</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Credits feel usable, not theoretical</p>
            </div>
        </div>
    );
}

function Author2() {
    return (
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Author">
            <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/motion_blur_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" />
            </div>
            <Text2 />
        </div>
    );
}

function Card2() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <Author2 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Text3() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">AI-Powered Impact Insights</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Human-readable, not charts overload</p>
            </div>
        </div>
    );
}

function Author3() {
    return (
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Author">
            <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/motion_blur_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" />
            </div>
            <Text3 />
        </div>
    );
}

function Card3() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 5">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <Author3 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Text4() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Policy-Aware Design</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Built with Indian regulations in mind</p>
            </div>
        </div>
    );
}

function Author4() {
    return (
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Author">
            <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/motion_blur_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg" />
            </div>
            <Text4 />
        </div>
    );
}

function Card4() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 4">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <Author4 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function Column3() {
    return (
        <li className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Column 2">
            <Card2 />
            <Card3 />
            <Card4 />
        </li>
    );
}

function Gallery() {
    return (
        <ul className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Gallery">
            <Column2 />
            <Column3 />
        </ul>
    );
}

function Column4() {
    return (
        <a className="bg-[#008234] content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[20px] shrink-0 w-[194px]" data-name="Column 3" href="https://solar-credit.lovable.app/auth">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] w-[220px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Explore the Platform</p>
            </div>
        </a>
    );
}

function TestimonialWall() {
    return (
        <section className="content-stretch flex flex-col gap-[48px] items-center justify-center pb-[80px] px-[24px] relative size-full" data-name="Testimonial wall 1">
            <Header3 />
            <Gallery />
            <Column4 />
        </section>
    );
}
function Header5() {
    return (
        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[0px] text-black tracking-[-0.48px] w-full">
                <h3 className="text-[24px] whitespace-pre-wrap">
                    <span className="leading-[1.2]">{`We Create `}</span>
                    <span className="leading-[1.2] text-[#008234]">{`Impact `}</span>
                    <span className="leading-[1.2]">from Numbers.</span>
                </h3>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">AI-Driven Impact in the dashboard.</p>
            </div>
        </div>
    );
}

function Text5() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="whitespace-pre-wrap">
                    <span className="leading-[1.5]">{`by `}</span>
                    <span className="leading-[1.5] text-[#008234]">OpenAI</span>
                </p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Transcripted using OpenAI API's</p>
            </div>
        </div>
    );
}

function Author5() {
    return (
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Author">
            <Text5 />
        </div>
    );
}

function ImpactCard1() {
    return (
        <div className="bg-white relative rounded-[16px] w-[280px] flex-shrink-0" data-name="Card 1">
            <div className="content-stretch flex flex-col gap-[120px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[32px] relative rounded-[inherit] h-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.45] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full whitespace-pre-wrap">You prevented 15 units of fossil fuel use</p>
                <Author5 />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_12px_32px_0px_rgba(0,0,0,0.04)]" />
        </div>
    );
}

function Text6() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="whitespace-pre-wrap">
                    <span className="leading-[1.5]">{`by `}</span>
                    <span className="leading-[1.5] text-[#008234]">OpenAI</span>
                </p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Transcripted using OpenAI API's</p>
            </div>
        </div>
    );
}

function Author6() {
    return (
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Author">
            <Text6 />
        </div>
    );
}

function ImpactCard2() {
    return (
        <div className="bg-white relative rounded-[16px] w-[280px] flex-shrink-0" data-name="Card 2">
            <div className="content-stretch flex flex-col gap-[145px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[32px] relative rounded-[inherit] h-full">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                    <p className="leading-[1.45] whitespace-pre-wrap">Today you saved 2 kg CO₂</p>
                </div>
                <Author6 />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_12px_32px_0px_rgba(0,0,0,0.04)]" />
        </div>
    );
}

function Text7() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="whitespace-pre-wrap">
                    <span className="leading-[1.5]">{`by `}</span>
                    <span className="leading-[1.5] text-[#008234]">OpenAI</span>
                </p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Transcripted using OpenAI API's</p>
            </div>
        </div>
    );
}

function Author7() {
    return (
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Author">
            <Text7 />
        </div>
    );
}

function ImpactCard3() {
    return (
        <div className="bg-white relative rounded-[16px] w-[280px] flex-shrink-0" data-name="Card 3">
            <div className="content-stretch flex flex-col gap-[120px] items-start max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[32px] relative rounded-[inherit] h-full">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">
                    <p className="leading-[1.45] whitespace-pre-wrap">Your energy powered 3 homes in 2 days</p>
                </div>
                <Author7 />
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_12px_32px_0px_rgba(0,0,0,0.04)]" />
        </div>
    );
}

function Cards() {
    return (
        <div className="relative w-full overflow-hidden" data-name="Cards">
            <div className="flex gap-6 animate-scroll-left">
                <ImpactCard1 />
                <ImpactCard2 />
                <ImpactCard3 />
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <section className="content-stretch flex flex-col gap-[48px] items-start px-[24px] py-[48px] relative size-full" data-name="Testimonials 1">
            <Header5 />
            <Cards />
        </section>
    );
}

function Logos() {
    return <div className="shrink-0 w-full" data-name="Logos" />;
}

function Logos1() {
    return (
        <section className="content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[48px] relative size-full" data-name="Logos 1">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.09px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">{`Credibility & Trust`}</p>
            </div>
            <Logos />
        </section>
    );
}

function Trust1() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 1">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Designed with policy realism</p>
            </div>
        </div>
    );
}



function Trust2() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 2">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">No financial guarantees</p>
            </div>
        </div>
    );
}

function Trust3() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 3">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Educational & experimental platform</p>
            </div>
        </div>
    );
}

function Trust4() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 4">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Inspired by India’s renewable mission</p>
            </div>
        </div>
    );
}

function Trust5() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 5">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Hackathon prototype.</p>
            </div>
        </div>
    );
}

function Trust6() {
    return (
        <div className="flex flex-col items-center justify-center p-[16px] w-[220px] flex-shrink-0" data-name="Logo 6">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic text-[18px] text-black text-center tracking-[-0.09px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Transparent assumptions</p>
            </div>
        </div>
    );
}

function Trust() {
    return (
        <div className="relative w-full overflow-hidden" data-name="Trust">
            <div className="flex gap-6 animate-scroll-right">
                <Trust1 />
                <Trust2 />
                <Trust3 />
                <Trust4 />
                <Trust5 />
                <Trust6 />
            </div>
        </div>
    );
}





function Header7() {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-full">
                <h3 className="block leading-[1.2] whitespace-pre-wrap">Smart FAQ</h3>
            </div>
        </div>
    );
}

function QText1() {
    return (
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[-0.08px]" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Q: Is this real money or just points?</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">SolarCredits represent energy value. In this prototype, financial flows are simulated to demonstrate feasibility.</p>
            </div>
        </div>
    );
}

function QAuthor1() {
    return (
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Author">
            <QText1 />
        </div>
    );
}

function QCard() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 2">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <QAuthor1 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function QText2() {
    return (
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[16px] tracking-[-0.08px] w-full" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Q: Can I earn monthly income?</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">No. Credits are aggregated and verified periodically. This is supplemental, not a salary.</p>
            </div>
        </div>
    );
}

function QCard1() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 3">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <QText2 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function QColumn() {
    return (
        <li className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Column 1">
            <QCard />
            <QCard1 />
        </li>
    );
}

function QText3() {
    return (
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[16px] tracking-[-0.08px] w-full" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Q: Do I need solar panels to use SolarCredit?</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">No. Consumers can buy credits and support clean energy without owning solar.</p>
            </div>
        </div>
    );
}

function QCard2() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 6">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <QText3 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function QText4() {
    return (
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[16px] tracking-[-0.08px] w-full" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Q: Is this carbon trading?</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">No. This focuses on energy-based credits, not carbon offset markets.</p>
            </div>
        </div>
    );
}

function QCard3() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 7">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <QText4 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function QText5() {
    return (
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[16px] tracking-[-0.08px] w-full" data-name="Text">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-black w-full">
                <p className="leading-[1.5] whitespace-pre-wrap">Q: Is this legally approved?</p>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[rgba(0,0,0,0.55)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">This is a concept platform designed to align with existing frameworks, not replace them.</p>
            </div>
        </div>
    );
}

function QCard4() {
    return (
        <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Card 8">
            <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
                    <QText5 />
                </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
        </div>
    );
}

function QColumn1() {
    return (
        <li className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Column 2">
            <QCard2 />
            <QCard3 />
            <QCard4 />
        </li>
    );
}

function Name() {
    return (
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Name">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.09px] whitespace-nowrap">
                <p className="leading-[1.45]">Clarify through SolarGPT</p>
            </div>
        </div>
    );
}

function QAuthor2() {
    return (
        <li className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Author">
            <a aria-hidden="true" className="block cursor-pointer relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" href="https://chatgpt.com" role="presentation">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src="src/assets/logo_ai.png" />
            </a>
            <Name />
        </li>
    );
}

function QGallery() {
    return (
        <ul className="content-stretch flex flex-col gap-[24px] h-[1089px] items-center relative shrink-0 w-full" data-name="Gallery">
            <QColumn />
            <QColumn1 />
            <QAuthor2 />
        </ul>
    );
}

function QTestimonialWall() {
    return (
        <section className="content-stretch flex flex-col gap-[48px] items-center justify-center pb-[70px] pt-[80px] px-[24px] relative size-full" data-name="Testimonial wall 2">
            <Header7 />
            <QGallery />
        </section>
    );
}


function FinalColumn() {
    return (
        <a className="bg-[#008234] content-stretch cursor-pointer flex flex-col items-center justify-center pt-px relative rounded-[20px] shrink-0 w-[285px]" data-name="Column 3" href="https://solar-credit.lovable.app/auth">
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap">Get Started</p>
            </div>
        </a>
    );
}

function FinalText() {
    return (
        <figure className="h-[250px] relative shrink-0 w-full" data-name="Text">
            <div aria-hidden="true" className="absolute border-[#dadada] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[32px] items-start pl-[24px] relative size-full">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-[min-content]">
                    <p className="whitespace-pre-wrap">
                        <span className="leading-[1.3]">{`“The Future of `}</span>
                        <span className="leading-[1.3] text-[#008234]">{`Energy `}</span>
                        <span className="leading-[1.3]">Participation Starts Here”</span>
                    </p>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.24px] w-[min-content] whitespace-pre-wrap">No installation • No commitments • Transparent by design</p>
                <FinalColumn />
            </div>
        </figure>
    );
}

function FinalPullQuote() {
    return (
        <section className="content-stretch flex flex-col items-start justify-center pb-[80px] px-[24px] relative size-full" data-name="Pull quote 1">
            <FinalText />
        </section>
    );
}

export default function TextList() {
    return (
        <section className="content-stretch flex flex-col gap-[40px] items-start px-[24px] py-[80px] relative size-full" data-name="Text list 1">
            <Header />
            <List />
            <TestimonialWall />
            <Testimonials />
            <Logos1 />
            <Trust />
            <QTestimonialWall />
            <FinalPullQuote />
        </section>
    );
}
