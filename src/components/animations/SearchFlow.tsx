"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { WhatsAppIcon, ChatGPTIcon, MessengerIcon, ClaudeIcon, platformColors } from "../icons/platforms";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[10px] font-semibold text-gray-600 text-center max-w-[80px] leading-tight">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">
          {sublabel}
        </span>
      )}
    </div>
  );
});
Circle.displayName = "Circle";

const Step = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; sublabel?: string }
>(({ className, children, label, sublabel }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-14 items-center justify-center rounded-xl border-2 bg-white px-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">
          {label}
        </span>
      )}
      {sublabel && (
        <span className="text-[9px] text-gray-400 text-center max-w-[90px] leading-tight">
          {sublabel}
        </span>
      )}
    </div>
  );
});
Step.displayName = "Step";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#6b6560" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function EmbedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function RankIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h13M3 8h9M3 12h5M3 16h3M17 10l3 3-3 3" />
    </svg>
  );
}

function ResultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function SearchFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const queryRef = useRef<HTMLDivElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);

  // Platform data (stored in Retrace)
  const waRef = useRef<HTMLDivElement>(null);
  const gptRef = useRef<HTMLDivElement>(null);
  const claudeRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);

  const rankRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto"
    >
      <div className="grid grid-cols-[auto_auto_1fr_auto_auto] items-center gap-x-10 w-full">
        {/* Query */}
        <div className="flex flex-col items-center">
          <Circle ref={queryRef} className="border-gray-300" label="Your query">
            <SearchIcon />
          </Circle>
        </div>

        {/* Embed */}
        <div className="flex flex-col items-center">
          <Step ref={embedRef} className="border-[#3a8f85]" label="Embed" sublabel="384D vector">
            <EmbedIcon />
          </Step>
        </div>

        {/* Platforms (your data in Retrace) */}
        <div className="flex flex-col items-center gap-4">
          <Circle ref={waRef} className="border-[#25D366]" label="WhatsApp">
            <WhatsAppIcon />
          </Circle>
          <Circle ref={gptRef} className="border-[#10A37F]" label="ChatGPT">
            <ChatGPTIcon />
          </Circle>
          <Circle ref={claudeRef} className="border-[#D97706]" label="Claude">
            <ClaudeIcon />
          </Circle>
          <Circle ref={msgRef} className="border-[#0084FF]" label="Messenger">
            <MessengerIcon />
          </Circle>
        </div>

        {/* Rank */}
        <div className="flex flex-col items-center">
          <Step ref={rankRef} className="border-[#c8723a]" label="Rank" sublabel="By relevance">
            <RankIcon />
          </Step>
        </div>

        {/* Results */}
        <div className="flex flex-col items-center">
          <Circle ref={resultRef} className="border-[#3a8f85]" label="Results" sublabel="Best matches">
            <ResultIcon />
          </Circle>
        </div>
      </div>

      {/* Query → Embed */}
      <AnimatedBeam containerRef={containerRef} fromRef={queryRef} toRef={embedRef} gradientStartColor="#9c958e" gradientStopColor="#3a8f85" duration={3} />

      {/* Embed → each platform (vector search) */}
      <AnimatedBeam containerRef={containerRef} fromRef={embedRef} toRef={waRef} curvature={-30} gradientStartColor="#3a8f85" gradientStopColor="#25D366" duration={3} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={embedRef} toRef={gptRef} curvature={-10} gradientStartColor="#3a8f85" gradientStopColor="#10A37F" duration={3.2} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={embedRef} toRef={claudeRef} curvature={10} gradientStartColor="#3a8f85" gradientStopColor="#D97706" duration={3.4} delay={0.7} />
      <AnimatedBeam containerRef={containerRef} fromRef={embedRef} toRef={msgRef} curvature={30} gradientStartColor="#3a8f85" gradientStopColor="#0084FF" duration={3.6} delay={0.9} />

      {/* Platforms → Rank */}
      <AnimatedBeam containerRef={containerRef} fromRef={waRef} toRef={rankRef} curvature={-30} gradientStartColor="#25D366" gradientStopColor="#c8723a" duration={3} delay={1.2} />
      <AnimatedBeam containerRef={containerRef} fromRef={gptRef} toRef={rankRef} curvature={-10} gradientStartColor="#10A37F" gradientStopColor="#c8723a" duration={3.2} delay={1.4} />
      <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={rankRef} curvature={10} gradientStartColor="#D97706" gradientStopColor="#c8723a" duration={3.4} delay={1.6} />
      <AnimatedBeam containerRef={containerRef} fromRef={msgRef} toRef={rankRef} curvature={30} gradientStartColor="#0084FF" gradientStopColor="#c8723a" duration={3.6} delay={1.8} />

      {/* Rank → Results */}
      <AnimatedBeam containerRef={containerRef} fromRef={rankRef} toRef={resultRef} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3} delay={2} />
    </div>
  );
}
