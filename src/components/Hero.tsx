import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-16 md:pt-0">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 bg-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/50 dark:bg-background/60" />
        <div className="absolute inset-0 bg-linear-to-b from-background/10 via-transparent to-background/90" />
      </div>

      {/* Left: Business / Marketing */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 relative z-10 flex min-h-[42vh] flex-col justify-end items-start text-left px-6 pb-10 pt-14 md:min-h-0 md:justify-center md:items-end md:text-right p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-border/50 transition-colors hover:bg-background/10"
      >
        <div className="mb-6 inline-flex max-w-[18rem] items-start gap-3 border border-border/60 bg-background/35 px-4 py-3 backdrop-blur-sm md:hidden">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase leading-4 tracking-[0.18em] text-foreground/80">
            For the full experience, please view this portfolio on desktop.
          </p>
        </div>
        <h1 className="mb-4 font-serif text-[3rem] font-medium leading-[0.95] md:mb-6 md:text-6xl lg:text-7xl">
          Educator & <br />
          <span className="italic text-muted-foreground">Storyteller.</span>
        </h1>
        <p className="max-w-[18rem] text-[0.95rem] leading-6 text-muted-foreground md:max-w-md md:text-lg">
          10M+ views, two TEDx talks, and years spent making difficult ideas easier to understand.
        </p>
      </motion.div>

      {/* Center element bridging them */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
        className="relative z-20 -my-8 flex h-16 w-16 shrink-0 self-center items-center justify-center rounded-full border border-border bg-background shadow-xl md:absolute md:top-1/2 md:left-1/2 md:m-0 md:h-24 md:w-24 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        <span className="font-display text-base font-bold md:text-xl">&amp;</span>
      </motion.div>

      {/* Right: Technical / Coding */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 relative z-10 flex min-h-[36vh] flex-col justify-start items-start px-6 pb-12 pt-10 text-left md:min-h-0 md:justify-center md:p-16 lg:p-24 transition-colors hover:bg-background/10"
      >
        <h1 className="mb-4 font-display text-[3.1rem] font-bold leading-[0.95] tracking-tighter md:mb-6 md:text-6xl lg:text-7xl">
          <span className="text-primary/70">Builder_</span>
        </h1>
        <p className="max-w-[18rem] text-[11px] leading-5 text-muted-foreground font-mono md:max-w-md md:text-sm">
          &gt; I make stuff that helps people learn better—using AI, product thinking, and code.
        </p>
      </motion.div>
    </section>
  );
}
