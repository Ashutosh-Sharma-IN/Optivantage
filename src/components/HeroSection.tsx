"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Users2, Zap } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stagger = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE },
    },
  },
};

function AnimatedCounter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(val) {
        el.textContent = Math.round(val) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const trustBadges = [
  { icon: ShieldCheck, text: "Cisco Registered Partner" },
  { icon: Award, text: "ISO 42001 Certified" },
  { icon: Users2, text: "Microsoft & Google Certified Trainer" },
  { icon: Zap, text: "Vertiv Authorised Reseller" },
];

const stats = [
  { value: 25, suffix: "+", label: "Years IT Expertise" },
  { value: 1000, suffix: "+", label: "Professionals Trained in AI" },
  { value: 15, suffix: "+", label: "Enterprise Clients" },
  { value: 3, suffix: "", label: "Focused Areas. Zero Generalism." },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-brand/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/5 w-[400px] h-[400px] bg-blue-700/5 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Main content — staggered reveal */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={stagger.container}
          initial="hidden"
          animate="visible"
        >
          {/* Tag */}
          <motion.div variants={stagger.item} className="mb-7">
            <span className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 rounded-full px-4 py-1.5 text-brand text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Founder-Led · Enterprise IT Specialists · Delhi, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="font-heading text-5xl md:text-[72px] font-bold tracking-tight text-white mb-5 leading-[1.06]"
          >
            AI. Infrastructure.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-400 to-brand bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
              Equipment.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={stagger.item}
            className="text-xl md:text-2xl text-brand font-semibold mb-4"
          >
            Three things we do exceptionally well.
          </motion.p>

          <motion.p
            variants={stagger.item}
            className="text-lg text-text-muted mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We help enterprises adopt AI safely, build resilient networks, and
            equip teams to deliver — backed by{" "}
            <strong className="text-white font-semibold">
              25 years of battle-tested expertise
            </strong>
            .
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-brand hover:bg-brand-hover text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 cursor-pointer"
            >
              Start a Conversation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 hover:border-white/40 text-white font-semibold rounded-lg transition-all cursor-pointer"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Trust badge pills */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-text-muted hover:border-brand/30 hover:text-white transition-colors duration-200 cursor-default"
              >
                <Icon size={14} className="text-brand flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated stat counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.65, ease: EASE }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-heading font-bold text-white group-hover:text-brand transition-colors duration-300">
                <AnimatedCounter to={value} suffix={suffix} />
              </div>
              <div className="text-sm text-text-muted mt-2 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
