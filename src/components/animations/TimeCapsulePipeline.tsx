"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import { WhatsAppIcon, ClaudeIcon, MessengerIcon, platformColors } from "../icons/platforms";

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
        <span className="text-[9px] text-gray-400 text-center max-w-[80px] leading-tight">
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

// Processing icons
function TopicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l4.328-4.328a2.25 2.25 0 000-3.182L11.159 3.66A2.25 2.25 0 009.568 3z" />
      <path d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

function LLMIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      <path d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

function EchoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="#3a8f85" strokeWidth="1.5" strokeLinecap="round">
      <path d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M12 12h.008" />
    </svg>
  );
}

function DepartureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function SurpriseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function CapsuleIcon() {
  // Hourglass from Lucide, matching the Retrace sidebar
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="#c8723a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  );
}

export function TimeCapsulePipeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Source refs
  const seg1Ref = useRef<HTMLDivElement>(null);
  const seg2Ref = useRef<HTMLDivElement>(null);
  const seg3Ref = useRef<HTMLDivElement>(null);

  // Processing refs
  const extractRef = useRef<HTMLDivElement>(null);
  const llmRef = useRef<HTMLDivElement>(null);

  // Output refs
  const echoRef = useRef<HTMLDivElement>(null);
  const departRef = useRef<HTMLDivElement>(null);
  const surpriseRef = useRef<HTMLDivElement>(null);
  const storeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg p-8 mx-auto"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-x-10 w-full">
        {/* Sources */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={seg1Ref} className="border-[#25D366]" label="WhatsApp">
            <WhatsAppIcon />
          </Circle>
          <Circle ref={seg2Ref} className="border-[#D97706]" label="Claude">
            <ClaudeIcon />
          </Circle>
          <Circle ref={seg3Ref} className="border-[#0084FF]" label="Messenger">
            <MessengerIcon />
          </Circle>
        </div>

        {/* Processing */}
        <div className="flex flex-col items-center gap-5">
          <Step ref={extractRef} className="border-[#3a8f85]" label="Extract" sublabel="Topics, sentiment, facts">
            <TopicIcon />
          </Step>
          <Step ref={llmRef} className="border-[#c8723a]" label="Reflect" sublabel="Compare then vs now">
            <LLMIcon />
          </Step>
        </div>

        {/* Outputs */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={echoRef} className="border-[#3a8f85]" label="Echoes" sublabel="What still persists">
            <EchoIcon />
          </Circle>
          <Circle ref={departRef} className="border-[#c8723a]" label="Departures" sublabel="What changed since">
            <DepartureIcon />
          </Circle>
          <Circle ref={surpriseRef} className="border-[#7C3AED]" label="Surprises" sublabel="What you forgot">
            <SurpriseIcon />
          </Circle>
        </div>

        {/* Result */}
        <div className="flex flex-col items-center">
          <Circle ref={storeRef} className="border-[#c8723a]" label="Time Capsule" sublabel="Then vs now">
            <CapsuleIcon />
          </Circle>
        </div>
      </div>

      {/* Source → Extract beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={seg1Ref} toRef={extractRef} curvature={-30} gradientStartColor="#9c958e" gradientStopColor="#3a8f85" duration={3} />
      <AnimatedBeam containerRef={containerRef} fromRef={seg2Ref} toRef={extractRef} curvature={0} gradientStartColor="#9c958e" gradientStopColor="#3a8f85" duration={3.5} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={seg3Ref} toRef={extractRef} curvature={30} gradientStartColor="#9c958e" gradientStopColor="#3a8f85" duration={4} delay={0.6} />

      {/* Extract → LLM beam */}
      <AnimatedBeam containerRef={containerRef} fromRef={extractRef} toRef={llmRef} curvature={0} gradientStartColor="#3a8f85" gradientStopColor="#c8723a" duration={3} delay={0.5} />

      {/* LLM → Output beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={llmRef} toRef={echoRef} curvature={-30} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={llmRef} toRef={departRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#c8723a" duration={3.5} delay={1.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={llmRef} toRef={surpriseRef} curvature={30} gradientStartColor="#c8723a" gradientStopColor="#7C3AED" duration={4} delay={1.6} />

      {/* Output → Store beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={echoRef} toRef={storeRef} curvature={-20} gradientStartColor="#3a8f85" gradientStopColor="#c8723a" duration={3} delay={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={departRef} toRef={storeRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#c8723a" duration={3.5} delay={2.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={surpriseRef} toRef={storeRef} curvature={20} gradientStartColor="#7C3AED" gradientStopColor="#c8723a" duration={4} delay={2.6} />
    </div>
  );
}
