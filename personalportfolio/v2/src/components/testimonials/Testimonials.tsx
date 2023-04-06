import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

const data = [
    {
        avatar: avatar1,
        name: "Jane Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis suscipit optio!",
    },
    {
        avatar: avatar2,
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis suscipit optio!",
    },
    {
        avatar: avatar3,
        name: "Bob Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis suscipit optio!",
    },
    {
        avatar: avatar4,
        name: "Lyann Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis suscipit optio!",
    },
];
const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => (
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={name} />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
