import React from 'react';

// Re-using product data from Products.js.
// In a real app, this might come from a shared file.
const productData = [
    { src: "https://iili.io/KxsHvVV.jpg", alt: "Recycled Material 1" },
    { src: "https://iili.io/KxsHNNj.jpg", alt: "Recycled Material 2" },
    { src: "https://iili.io/KxsHXSe.jpg", alt: "Recycled Material 3" },
    { src: "https://iili.io/KxsHVK7.jpg", alt: "Recycled Material 4" },
    { src: "https://iili.io/KxsHEV2.jpg", alt: "Recycled Material 5" },
    { src: "https://iili.io/KxsH1ol.jpg", alt: "Recycled Material 6" },
    { src: "https://iili.io/KxsHaAG.jpg", alt: "Recycled Material 7" },
    { src: "https://iili.io/KxsH5Sn.jpg", alt: "Recycled Material 8" },
    { src: "https://iili.io/KxsHFF1.jpg", alt: "Eco Packaging" },
    { src: "https://iili.io/KxsHKcF.jpg", alt: "Green Energy" },
    { src: "https://iili.io/KxsHB9a.jpg", alt: "Sustainable Living" },
    { src: "https://iili.io/KxsHotR.jpg", alt: "Eco Product" },
];

const ProductSlider = () => {
    return (
        // I'm re-using the 'services' class here for consistent padding/background
        <section id="product-slider" className="product-slider services">
            <div className="container">
                {/* I'm also re-using the 'services-header' class for consistent title styling */}
                <div className="services-header">
                    <span className="section-subtitle">FEATURED PRODUCTS</span>
                    <h2 className="section-title">
                        Explore Our Popular Items
                    </h2>
                </div>
                <div className="slider-container">
                    <div className="slider-track">
                        {productData.map((product, index) => (
                            <div className="product-card" key={index}>
                                <img
                                    src={product.src}
                                    alt={product.alt}
                                    className="product-slider-image"
                                />
                                <h3 className="product-slider-title">{product.alt}</h3>
                                <button className="btn-primary btn-slider">View Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;