"use client";

import { forwardRef, useRef } from "react";
import { cn } from "../ui/cn";
import { AnimatedBeam } from "../ui/animated-beam";
import {
  WhatsAppIcon, ClaudeIcon, ChatGPTIcon,
  MessengerIcon, InstagramIcon, SMSIcon, RetraceIcon,
  platformColors,
} from "../icons/platforms";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2.5 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function ConversationHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const claudeRef = useRef<HTMLDivElement>(null);
  const chatgptRef = useRef<HTMLDivElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const smsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg p-10 mx-auto"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-12 w-full">
        {/* Left: 3 platforms */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={whatsappRef}>
            <WhatsAppIcon />
          </Circle>
          <Circle ref={claudeRef}>
            <ClaudeIcon />
          </Circle>
          <Circle ref={messengerRef}>
            <MessengerIcon />
          </Circle>
        </div>

        {/* Center: Retrace */}
        <Circle ref={centerRef} className="size-16 border-[#c8723a]">
          <RetraceIcon />
        </Circle>

        {/* Right: 3 platforms */}
        <div className="flex flex-col items-center gap-5">
          <Circle ref={chatgptRef}>
            <ChatGPTIcon />
          </Circle>
          <Circle ref={instagramRef}>
            <InstagramIcon />
          </Circle>
          <Circle ref={smsRef}>
            <SMSIcon />
          </Circle>
        </div>
      </div>

      {/* Left → Center beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={whatsappRef} toRef={centerRef} curvature={-50} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={claudeRef} toRef={centerRef} curvature={0} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={messengerRef} toRef={centerRef} curvature={50} gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.6} />

      {/* Right → Center beams (reverse so gradient flows inward, negate curvature to mirror) */}
      <AnimatedBeam containerRef={containerRef} fromRef={chatgptRef} toRef={centerRef} curvature={-50} reverse gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0} />
      <AnimatedBeam containerRef={containerRef} fromRef={instagramRef} toRef={centerRef} curvature={0} reverse gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.3} />
      <AnimatedBeam containerRef={containerRef} fromRef={smsRef} toRef={centerRef} curvature={50} reverse gradientStartColor="#c8723a" gradientStopColor="#3a8f85" duration={3.5} delay={0.6} />
    </div>
  );
}
