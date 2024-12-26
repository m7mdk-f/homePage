import React, { MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion';

function AnimationDiv({ initial, animate, exit, whileInView, transition, children, className, onClick }: { onClick?: (event: MouseEvent<HTMLDivElement>) => void, className?: string, children: ReactNode, initial?: any, animate?: any, exit?: any, whileInView?: any, transition?: any }) {
    return (
        <motion.div
            className={`${className || ''}`}
            initial={initial}
            animate={animate}
            exit={exit}
            whileInView={whileInView}
            transition={transition}
            onClick={onClick && onClick}
        >
            {children}
        </motion.div>
    )
}

export default AnimationDiv