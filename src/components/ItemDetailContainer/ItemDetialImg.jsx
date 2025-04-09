import React, { useState } from 'react'

const ItemDetialImg = ({img}) => {
    const [zoomVisible, setZoomVisible] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
          
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

  return (
    <div>
        <div className="flex items-center justify-center w-[250px] h-[300px] bg-gray-200 overflow-hidden relative md:hidden">
            <img
                src={img}
                alt="Producto"
                className="w-full h-full transition-transform duration-300 transform hover:scale-110"
            />
        </div>
        <div 
            className="items-center justify-center md:w-[450px] h-[200px] md:h-[500px] bg-gray-200 hidden md:block overflow-hidden relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoomVisible(true)}
            onMouseLeave={() => setZoomVisible(false)}
        >               
            <img 
                src={img} 
                alt="Producto"
                className="w-full h-full "
            />
            
            {/* Lupa */}
            {zoomVisible && (
                <div
                    className="absolute w-22 h-22 border border-gray-400 rounded-full pointer-events-none"
                    style={{
                        left: `${zoomPosition.x}%`,
                        top: `${zoomPosition.y}%`,
                        transform: "translate(-50%, -50%)",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "600%",
                        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                    }}
                />
            )}
        </div>
    </div>
  )
}

export default ItemDetialImg