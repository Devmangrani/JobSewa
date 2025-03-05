import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import cards from "../constants/EngineeringSimulationData";

const HorizontalScrollCarousel = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 rounded-lg">
            <div className="sticky top-0 flex h-screen items-end overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden rounded-lg"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid items-end justify-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-5 text-4xl font-black uppercase text-white backdrop-blur-lg rounded-4xl">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default HorizontalScrollCarousel;