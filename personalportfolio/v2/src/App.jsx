import React from "react";

import {
    Header,
    Nav,
    About,
    Experience,
    Services,
    Portfolio,
    Testimonials,
    Contact,
    Footer,
} from "./components/index.js";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
