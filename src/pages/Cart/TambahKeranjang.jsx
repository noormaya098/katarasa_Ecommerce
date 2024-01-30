import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Input, Radio } from "antd";
import produk1 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import produk2 from "../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import produk3 from "../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import { Link } from "react-router-dom";

function TambahKeranjang() {
  const [quantity, setQuantity] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [kurangiClicked, setKurangiClicked] = useState(false);
  const [tambahClicked, setTambahClicked] = useState(false);
  const [jumlah, setJumlah] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleRadioClick = (item) => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
    // Add your custom logic here based on the click count
    // You may want to toggle between different colors
    // (e.g., green, grey, and white), or implement your own color logic.
  };

  const kurangiJumlah = () => {
    setKurangiClicked(true);
    setJumlah(jumlah - 1);
    setTimeout(() => {
      setKurangiClicked(false);
    }, 500);
  };

  const tambahJumlah = () => {
    setTambahClicked(true);
    setJumlah(jumlah + 1);
    setTimeout(() => {
      setTambahClicked(false);
    }, 500);
  };

  const [disabled, setDisabled] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      image: produk1,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
    },
    {
      id: 2,
      image: produk2,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
    },
    {
      id: 3,
      image: produk3,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
    },
    {
      id: 4,
      image: produk3,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
    },
  ]);

  const handleDecreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const handleIncreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const orderDetails = [
    {
      name: "Coffee Beans - Robusta Temanggung",
      quantity: "Item x 1",
      price: "Rp 24.000",
    },
    {
      name: "Hazelnut Chocobar",
      quantity: "Item x 1",
      price: "Rp 24.000",
    },
  ];

  // Calculate the total order value
  const totalPrice = orderDetails.reduce((sum, order) => {
    const price = parseFloat(order.price.replace("Rp ", "").replace(".", ""));
    return sum + price;
  }, 0);

  return (
    <div>
      <Navbar />

      <div className="mt-14 md:p-20 w-full mx-auto">
        <h1 className="text-3xl font-medium text-[#3B8F51]">Keranjang Anda</h1>
        <div className="flex flex-col md:flex-row mt-5">
          {/* Konten 1 */}
          <>
            <div className="w-full md:w-2/3">
              {items.map((item) => (
                <div key={item.id} className="w-full p-4">
                  <div className="flex items-center">
                    <input
                      value={item.id}
                      type="radio"
                      className="form-radio text-green-500"
                    />
                    <div className="w-1/3">
                      <img
                        src={item.image}
                        className="w-28 h-24 ml-5 rounded-md"
                        alt="Coffee Beans"
                      />
                    </div>
                    <div className="w-2/3 ml-6">
                      <div className="ml-2">
                        <p className="text-base font-medium">{item.name}</p>
                        <p className="text-[#41644A] mt-2 text-sm font-medium">
                          {item.description}
                        </p>
                        <div className="flex items-center mt-3">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className={`px-2 py-0 rounded-full mr-2 ${
                              item.quantity > 0
                                ? "bg-[#3B8F51] text-white"
                                : "bg-gray-300"
                            }`}
                          >
                            -
                          </button>
                          <p className="text-[#3B8F51]">{item.quantity}</p>
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className={`px-2 py-0 rounded-full ml-2 ${
                              item.quantity > 0
                                ? "bg-[#3B8F51] text-white"
                                : "bg-gray-300"
                            }`}
                          >
                            +
                          </button>
                          <span className="ml-6 text-[#3B8F51] font-semibold">
                            Rp {item.harga}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
          {/* Konten 2 */}
          <>
            <div className="w-full md:w-1/3 p-4 h-auto rounded-lg shadow-xl">
              <h1 className="text-2xl font-medium mb-5 text-[#3B8F51]">
                Detail Pesanan
              </h1>
              {orderDetails.map((order, index) => (
                <div className="flex justify-between mb-4" key={index}>
                  <div className="w-[230px]">
                    <p className="truncate text-lg">{order.name}</p>
                    <p className="text-gray-400">{order.quantity}</p>
                  </div>
                  <div className="w-1/4 text-[#3B8F51] text-end mt-5">
                    {order.price}
                  </div>
                </div>
              ))}
              <div className="flex justify-between mb-4">
                <div className="w-1/2">
                  <p className="text-lg font-medium">Total Pesanan</p>
                  <p className="text-gray-400">Item x {orderDetails.length}</p>
                </div>
                <div className="w-1/4 text-[#3B8F51] text-center mt-5 text-xl font-medium">
                  Rp {totalPrice.toLocaleString()}
                </div>
              </div>
              <Input
                placeholder="Silahkan Masukkan Voucher"
                className="w-full h-14 mt-3 border border-[#3B8F51] placeholder-[#41644A] font-normal text-base"
              />

              <button className="bg-[#3B8F51] text-white py-2 px-4 rounded-full mt-8 w-full hover:bg-[#41644A]">
               <Link to="/payment">
               Bayar Sekarang
               </Link>
              </button>
            </div>
          </>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TambahKeranjang;
