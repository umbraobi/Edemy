import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";
import { motion } from "framer-motion";
const TestimonialsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="pb-14 px-8 md:px-0">
            <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
            <p className="md:text-base text-gray-500 mt-3">
                Hear from Our learners as they share their journeys of transformation,
                success, and how our <br />
                platform has made a difference in their lives.
            </p>


            <div className="grid grid-cols-auto gap-8 mt-14">
                {dummyTestimonial.map((testimonial, index) => (
                    <div key={index} className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden">
                        <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
                            <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                                <p className="text-gray-800/80">{testimonial.role}</p>
                            </div>

                        </div>
                        <div className="p-5 pb-7">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((__, i) => (
                                    <img
                                        key={i}
                                        src={
                                            i < Math.floor(testimonial.rating)
                                                ? assets.star
                                                : assets.star_blank
                                        }
                                        alt="star"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
                        </div>
                        <a href="#" className="text-blue-500 underline px-5">Read more</a>

                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TestimonialsSection;
