'use client';

import { motion } from 'framer-motion';
import {JSX} from "react";

// если нет утилиты cn — временно заменим
const cn = (...args: (string | undefined | null | false)[]) =>
    args.filter(Boolean).join(' ');

interface FlipTextProps {
    children: string;
    duration?: number;
    delayMultiple?: number;
    className?: string;
}

export function FlipText({
                             children,
                             duration = 0.3,
                             delayMultiple = 0.05,
                             className,
                         }: FlipTextProps): JSX.Element {
    return (
        <span className={cn('inline-block', className)}>
      {children.split('').map((char, index) => (
          <motion.span
              key={index}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{
                  duration,
                  delay: index * delayMultiple,
              }}
              className="inline-block"
          >
              {char === ' ' ? '\u00A0' : char}
          </motion.span>
      ))}
    </span>
    );
}
