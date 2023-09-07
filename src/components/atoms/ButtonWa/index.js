import React, { useState } from 'react';
import WaSae from "../../../assets/images/icon/wa.svg"

const ButtonWa = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        const number = '628112221721';
        const text = 'Raffa Parabola';
        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed z-10 bottom-2 right-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative">
                {isHovering && (
                    <div className="absolute px-2 py-1 text-black bg-white rounded-md shadow-lg -top-12 right-50">
                        Hubungi Kami
                    </div>
                )}
                <img
                    src={WaSae}
                    alt="WhatsApp Raffa Parabola"
                    className="sm:w-51 w-35"
                />
            </div>
        </button>
    );
};

export default ButtonWa;
