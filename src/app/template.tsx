"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  const reduced = useReducedMotion();
  return <motion.div
    className="page-transition"
    initial={reduced ? false : { opacity: 0, y: 7 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
