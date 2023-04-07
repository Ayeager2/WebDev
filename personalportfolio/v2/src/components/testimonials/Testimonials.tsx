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
        avatar: avatar3,
        name: "Loki Madcat",
        review: "Anna Human is always willing to lend a helping paw. They are the cat's whiskers when it comes to teamwork. Meowtstanding!",
    },
    {
        avatar: avatar4,
        name: "Dez Ladypaw",
        review: "I am pleased to report that this human is an excellent team player, always sharing treats and toys with the rest of us. She is also very attentive to our needs, ensuring that we have enough water and plenty of nap spots. Highly recommend!",
    },
    {
        avatar: avatar1,
        name: "Destruction DezDez",
        review: "This human is the cat's meow when it comes to problem-solving. They always find a way to land on their feet and get the job done. Pawsitively impressive!",
    },
    {
        avatar: avatar2,
        name: "Noodles Henry",
        review: "Friendly one who smells amazing is a barking-mad genius! They have an un-dog-gable work ethic and always chase their goals with gusto. Their dedication and teamwork is something to bark about!",
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
