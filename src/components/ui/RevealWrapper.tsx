"use client";

import React, { ElementType } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: ElementType;
  id?: string;
}

export default function RevealWrapper({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  threshold,
  once = true,
  as: Component = motion.div,
  id,
}: RevealWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionComponent =
    typeof Component === "string"
      ? (motion as unknown as Record<string, ElementType>)[Component] || motion.div
      : Component;

  const Tag = motionComponent as typeof motion.div;

  return (
    <Tag
      id={id}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
      }
      viewport={{
        once,
        amount: threshold ?? "some",
      }}
      transition={{
        duration: shouldReduceMotion ? 0.6 : duration,
        delay,
        ease: shouldReduceMotion ? "easeOut" : [0.65, 0, 0.35, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
