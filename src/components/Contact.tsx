import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'Gmail', url: 'mailto:triet2one@gmail.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/triet-nguyen-minh' },
  { name: 'Facebook', url: 'https://www.facebook.com/bryann510/' }
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background pt-12 pb-18 md:pt-16 md:pb-32">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6">

        {/* Contact label */}
        <div className="mb-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              Contact
            </p>
          </motion.div>
        </div>

        {/* Links List */}
        <div className="-mx-3 flex flex-col border-t border-border md:-mx-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name !== 'Gmail' ? '_blank' : undefined}
              rel={link.name !== 'Gmail' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.08 }}
              className="group relative flex w-full items-center justify-between border-b border-border px-3 py-4 md:px-6 md:py-8"
            >
              <span className="font-display text-[2rem] font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-lime-600 md:text-5xl lg:text-6xl dark:group-hover:text-lime-400">
                {link.name}
              </span>
              <div className="translate-x-0 opacity-70 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-4 md:opacity-0">
                <ArrowUpRight className="h-6 w-6 text-lime-600 md:h-10 md:w-10 dark:text-lime-400" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground/70 md:mt-12"
        >
          Singapore
        </motion.div>

      </div>

      {/* Subtle Glow Background */}
      <div className="absolute bottom-0 right-0 max-w-full overflow-hidden pointer-events-none -z-10">
        <div className="w-[600px] h-[600px] bg-lime-500/5 dark:bg-lime-400/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      </div>
    </section>
  );
}
