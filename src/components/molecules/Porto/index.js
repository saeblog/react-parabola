import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portofolio from "../../../utils/Portofolio"
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation"
import { BottomLine } from "../..";

const Porto = () => {
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
    <div className="py-16 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Hasil Pemasangan</h3>
        <h1 className="text-4xl font-semibold text-center">
          Porto <span className="text-primary">Folio</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {Portofolio?.map((Portofolio) => (
          <div
            key={Portofolio.id}
            className={`${Portofolio.id % 2 === 0
              ? "bg-base-100"
              : "bg-base-100"
              } rounded-lg p-6 duration-300`}
          >
            <div className="mx-auto text-center w-45">
              {Portofolio.icon}
            </div>
            <div className="relative bg-white shadow-lg bottom-8">
              <h2 className="text-[20px] font-semibold text-center">
                {Portofolio.title}
              </h2>
              <div className="text-center">
                <div className="w-20 h-[1px] bg-primary mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto !important' }}></div>
              </div>
              <p className="text-accent text-[15px] text-center">
                {Portofolio.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Porto;