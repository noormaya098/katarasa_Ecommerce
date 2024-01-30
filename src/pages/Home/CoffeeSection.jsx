import React, { useEffect, useRef, useState } from "react";
import BG1 from "../../assets/BannerBelakang/Coklat.png";
import PCB1 from "../../assets/ProductCoffeeBeans/product coffee beans.png";
import PCB2 from "../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import PCB3 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import PCB4 from "../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import PCB5 from "../../assets/ProductCoffeeBeans/productCoffeeBean.png";
import { Button } from "antd";

function CoffeeSection() {
  const products = [
    {
      image: PCB1,
      title: "Coffee Beans - Tem..",
      type: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: PCB2,
      title: "Coffee Beans - Tem..",
      type: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: PCB3,
      title: "Coffee Beans - Tem..",
      type: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: PCB4,
      title: "Coffee Beans - Tem..",
      type: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: PCB5,
      title: "Coffee Beans - Tem..",
      type: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
  ];

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);
  
  return (
    <div>
      {/* Layar Besar */}
      <>
        <div className="hidden lg:inline md:inline">
          <div className="text-black  mx-auto justify-center flex px-20 py-2 mt-10 ">
            <div className=" md:inline lg:inline hidden">
              <div
                className="justify-start mt-2"
                style={{ position: "relative" }}
              >
                <img src={BG1} className="w-[1200px] h-[300px]" />
                <div
                  style={{
                    position: "absolute",
                    top: "75%", // Atur posisi ke tengah secara vertikal
                    left: "50%", // Atur posisi ke tengah secara horizontal
                    transform: "translate(-50%, -50%)", // Geser sejauh setengah dari width dan height elemen
                    color: "white",
                  }}
                >
                  <div className="text-center">
                    <p className="font-semibold text-[40px] ">
                      Coffee Beans Section
                    </p>
                  </div>
                  {/* Kolom baru */}
                  <div className="flex">
                    <div className="w-full flex space-x-3">
                      {/* Konten produk di kolom kiri */}
                      {products.map((product, index) => (
                        <div
                          key={index}
                          className="shadow-2xl md:w-[200px] md:h-[299px] mt-2 bg-white rounded-lg"
                        >
                          <img
                            className="rounded-md"
                            src={product.image}
                            alt={`Product ${index}`}
                          />
                          <div className="ml-2">
                            <p className="font-bold text-sm text-black">
                              {product.title}
                            </p>
                            <p className="text-slate-400 text-xs">
                              {product.type}
                            </p>
                            <p className="text-[#E53C3C] font-semibold text-sm">
                              <s>{product.originalPrice}</s>
                            </p>
                            <div>
                              <div className="text-lg font-semibold text-[#3B8F51]">
                                {product.discountedPrice}{" "}
                                <span className="text-[#FFCA0C]  ml-16">
                                  &#9733;
                                  <span className="text-sm text-[#3B8F51] ml-1">
                                    {product.rating}/5
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
        <div className="md:hidden lg:hidden  mx-auto justify-start mt-5 px-4  py-1 ">
          <div>
            <div className="w-full p-3 mb-0">
              <p className="text-black text-lg font-bold">
                Coffee Beans Section
              </p>
            </div>
          </div>
          <div className="container mx-auto p-4 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              <div className="sm:col-span-1 lg:col-span-4">
                <div>
                  <div
                    ref={carousel}
                    className="carousel-container  relative flex gap-1 overflow-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                  >
                    {products.map((product, index) => {
                      return (
                        <div
                          key={index}
                          className="carousel-item rounded-lg relative snap-start shadow-2xl w-[140px] h-[220px] mt-2 bg-white"
                        >
                          <a
                            href={product.link}
                            className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full rounded-lg"
                            />
                            <div className="ml-2">
                              <p className="font-bold text-xs">
                                {product.title}
                              </p>
                              <p className="text-slate-400 text-[10px]">
                                {product.type}
                              </p>
                              <p className="text-[#E53C3C] font-semibold text-[10px]">
                                <s>{product.originalPrice}</s>
                              </p>
                              <div>
                                <div className="text-sm font-semibold text-[#3B8F51] mt-3">
                                  {product.discountedPrice}{" "}
                                  <span className="text-[#FFCA0C] ml-1">
                                    &#9733;
                                    <span className="text-sm text-[#3B8F51] ml-1">
                                      {product.rating}/5
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CoffeeSection;
