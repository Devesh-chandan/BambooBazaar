import React, { useEffect, useRef } from 'react';

const galleryImages = [
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

const Products = () => {
    const galleryItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // Animate once
                    }
                });
            },
            { threshold: 0.2 }
        );

        galleryItemsRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            galleryItemsRef.current.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    return (
        <section id="products" className="products">
            <div className="container">
                <div className="products-header">
                    <span className="section-subtitle">OUR PRODUCTS</span>
                    <h2 className="section-title">Explore Our Eco-Friendly Products</h2>
                </div>
                <div className="gallery">
                    {galleryImages.map((image, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                            ref={(el) => (galleryItemsRef.current[index] = el)}
                        >
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;