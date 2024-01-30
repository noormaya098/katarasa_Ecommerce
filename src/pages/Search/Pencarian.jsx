import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import ProductCoffee from "../../assets/ProductCoffeeBeans/product coffee beans.png";
import ProductCoffee2 from "../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import ProductCoffee3 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import ProductCoffee4 from "../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import Choco1 from "../../assets/ProductChocolate/productChocolateJar2.png";
import Choco2 from "../../assets/ProductChocolate/productChocolateJar1.png";
import Choco3 from "../../assets/ProductChocolate/productChocolateJar4.png";
import Choco4 from "../../assets/ProductChocolate/productChocolateJar3.png";
import Bar1 from "../../assets/ChocoBar/productChocobar3.png";
import Bar2 from "../../assets/ChocoBar/productChocobar1.png";
import Bar3 from "../../assets/ChocoBar/productChocobar2.png";
import Bar4 from "../../assets/ChocoBar/productChocobar4.png";
import Tea1 from "../../assets/ProductTea/productTea.png";
import Tea2 from "../../assets/ProductTea/product Tea-1.png";
import Tea3 from "../../assets/ProductTea/product Tea-2.png";
import Tea4 from "../../assets/ProductTea/product Tea-3.png";
import { Button, Pagination, Slider } from "antd";

function Pencarian() {
  const [priceRange, setPriceRange] = useState([0, 100000]); // Nilai awal untuk range harga

  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const products = [
    {
      image: ProductCoffee,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee2,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee3,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: ProductCoffee4,
      name: "Coffee Beans - Temanggung",
      description: "Coffee",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco1,
      name: "Hazelnut ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco2,
      name: "Melon ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco3,
      name: "Matcha ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Choco4,
      name: "Taro ChocoBox",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar1,
      name: "Taro Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar2,
      name: "Hazelnut Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar3,
      name: "Strawberry Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Bar4,
      name: "Sea Salt Chocobar",
      description: "Chocolate",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp24.000",
      rating: 4,
    },
    {
      image: Tea1,
      name: "Teh Dewi-Sakura Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea2,
      name: "Teh Dewi-Jasmine Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea3,
      name: "Teh Dewi-Lechyee Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
    {
      image: Tea4,
      name: "Teh Dewi-Mint Tea",
      description: "Tea",
      originalPrice: "Rp28.000",
      discountedPrice: "Rp22.000",
      rating: 4,
    },
  ];

 
  
  return (
    <div>
      <Navbar />
      <div className="mx-auto justify-center flex px-4 sm:px-8 md:px-16 py-2 mt-32 sm:mt-20 lg:mt-10 p-4 text-black">
        <div className="flex flex-col sm:flex-row mt-24">
          {/* Konten sebelah kiri - Pencarian */}

          <div className=" lg:block sm:w-1/3">
            <h2 className="text-lg font-bold  mb-4">Filter Pencarian</h2>
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-0">
              {/* Isi konten pencarian */}
              {/* Dropdown select untuk filter */}

              <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                Urutkan Menu
              </h2>

              <select className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:border-[#3B8F51] mt-2 border-[#3B8F51] text-[#3B8F51]">
                <option value="terfavorite">Ter-Favorite</option>
                <option value="kategori1">Kategori 1</option>
                <option value="kategori2">Kategori 2</option>
                {/* Tambahkan lebih banyak opsi jika diperlukan */}
              </select>

              <br />
              <br />
              <br />

              {/* Tombol pencarian */}
              <>
                <div className="w-80 h-auto ">
                  <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                    Variasi Menu
                  </h2>
                  <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                    Coffee Bean
                  </button>
                  <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                    Snack Bar
                  </button>
                  <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                    Pastery
                  </button>
                  <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                    Merchandise
                  </button>
                  <button className="border border-[#3B8F51] text-[#3B8F51] py-2 px-4 rounded-full mt-2 hover:bg-[#41644A] hover:text-white mr-2">
                    Box/Hampers
                  </button>
                </div>
              </>

              <br />
              <br />
              <br />

              {/* Range Harga */}

              <>
                <div>
                  <h2 className="text-lg text-[#41644A] font-medium  mb-4">
                    Range Harga
                  </h2>
                  <Slider
                    range
                    min={0}
                    max={100000}
                    defaultValue={[0, 100000]}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    className="slider-track-color"
                  />

                  {/* Tampilkan nilai range harga dalam format rupiah */}
                  <div className="flex justify-between">
                    <span>
                      Min:{" "}
                      {priceRange[0].toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                    <span>
                      Max:{" "}
                      {priceRange[1].toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                  </div>

                  {/* CSS custom dengan Tailwind */}
                  <style>{`
                      .slider-track-color .ant-slider-track {
                        background-color: #3B8F51; /* Ganti warna garis slider menjadi hijau */
                      }
                      .slider-track-color .ant-slider-handle {
                        border-color: #3B8F51; /* Ganti warna border buletan menjadi hijau */
                        background-color: #3B8F51; /* Ganti warna buletan menjadi hijau */
                      }
                      
                    `}</style>
                </div>
              </>
            </div>
          </div>

          {/* Konten sebelah kanan - Produk */}
          <div className="sm:w-2/3 ml-0 sm:ml-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Looping untuk menampilkan konten produk */}
             <>
             {products.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  {/* Isi konten produk */}
                  <img
                    className="rounded-md"
                    src={product.image}
                    alt={`Product ${index}`}
                  />
                  <h3 className="text-md font-semibold mb-2 mt-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-[#E53C3C] font-semibold text-sm">
                    <s>{product.originalPrice}</s>
                  </p>
                  <div className="mt-2">
                    <div className="text-lg font-semibold text-[#3B8F51]">
                      {product.discountedPrice}{" "}
                      <span className="text-[#FFCA0C] ml-5">
                        &#9733;
                        <span className="text-sm text-[#3B8F51] ml-1">
                          {product.rating}/5
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* Informasi lebih lanjut atau tombol beli */}
                </div>
              ))}
             </>
            </div>
            <Pagination className="mt-3 text-end" />
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pencarian;
