import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";
import {
    sectionBodyAnimation,
} from "../../../hooks/useAnimation"

const Tentang = () => {
    const [ref, inView] = useInView();
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);
    return (
        <div className="pt-2 my-16 parent">
            <div className="">
                <motion.div
                    className="mb-12"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >
                    <h3 className="text-center text-accent">Mengapa harus kami ?</h3>
                    <h1 className="text-4xl font-semibold text-center drop-shadow-md">
                        Tentang <span className="text-primary">Kami</span>
                    </h1>
                    <BottomLine />
                </motion.div>
                <div className="items-center px-5 pt-4 text-center sm:px-20">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={sectionBodyAnimation}
                    >
                        <p className="font-medium text-accent">
                        Kami melayani perbaikan dan pemasangan antena tv digital dan parabola jaringan satelit parabola Telkom, Chinasat, Ses9, Measat, Asiasat, Thaicom, Intelsat, ST2 dll.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Tentang;
