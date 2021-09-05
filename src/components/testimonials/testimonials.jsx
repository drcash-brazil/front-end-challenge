import React from 'react'
import TestimonialsCarousel from './testimonialsCarousel.jsx'
import "./testimonials.css"

const Testimonials = () => {
    return (
        <div className="testimonials"> 
            <h1>Clientes Satisfeitos</h1>
            <div id="testimonials-container" className="container">
                <div className="testimonials-content">
                    <TestimonialsCarousel />
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials
