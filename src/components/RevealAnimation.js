import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"

const Reveal = ({ children }) => {
    const variants = {
        hidden: { opacity: 0.5, y: 75 },
        reveal: { opacity: 1, y: 0 }
    }
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    const mainControl = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControl.start(variants.reveal);
        }
    }, [inView])

    return (
        <div ref={ref} style={{position: "relative", width: "fit-content", overflow: "hidden"}}>
            <motion.div
                variants={{variants}}
                initial={variants.hidden}
                animate={mainControl}
                transition={{duration: 0.5}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal