import React from 'react';
import Contact from '../components/Contact/Contact';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';
function ContactPage(props) {
    return (
        <div>
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default ContactPage;