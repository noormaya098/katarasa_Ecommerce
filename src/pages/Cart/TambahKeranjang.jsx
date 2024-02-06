import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button, Input, Radio, Tag } from "antd";
import produk1 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";
import produk2 from "../../assets/ProductCoffeeBeans/product coffee beans-1.png";
import produk3 from "../../assets/ProductCoffeeBeans/product coffee beans-3.png";
import Tea from "../../assets/ProductTea/Tea.png";
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
      description: "1000gr, Exclude Gula, Plastics & no extra",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 2,
      image: produk2,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 3,
      image: produk3,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 4,
      image: produk3,
      quantity: 0,
      name: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "coffee",
    },
    {
      id: 5,
      image: Tea,
      quantity: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 6,
      image: Tea,
      quantity: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 7,
      image: Tea,
      quantity: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
    },
    {
      id: 7,
      image: Tea,
      quantity: 0,
      name: "Teh Dewi - Jasmin Tea",
      description: "500gr, Exclude, Plastics",
      harga: "24.000",
      category: "tea",
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

  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = (itemId) => {
    // Mencari index dari item yang diklik
    const index = checkedItems.indexOf(itemId);
    // Meng-copy array checkedItems
    const newCheckedItems = [...checkedItems];

    // Jika item sudah ada dalam checkedItems, maka hapus dari array
    if (index > -1) {
      newCheckedItems.splice(index, 1);
    } else {
      // Jika item belum ada dalam checkedItems, tambahkan ke array
      newCheckedItems.push(itemId);
    }

    // Update state checkedItems
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="w-screen h-screen">
      <Navbar />

      {/* Layar Besar */}
      <>
        <div>
          <div className="hidden md:inline lg:inline">
            <div className="flex flex-col md:flex-row md:justify-between h-auto w-screen md:p-20 space-x-5  mx-auto sm:w-[85rem] ">
              <div className="mt-20 mx-auto w-screen h-auto space-x-5 ">
                <h1 className="text-3xl font-medium text-[#3B8F51]">
                  Keranjang Anda
                </h1>
                <div className="flex w-full mt-5 ">
                  {/* Konten 1 */}
                  <>
                    <div className="w-full">
                      {items.map((item) => (
                        <div key={item.id} className="w-full p-4">
                          <div className="flex items-center">
                            <input
                              value={item.id}
                              type="radio"
                              className="form-radio text-green-500"
                            />
                            <div className="w-1/3 flex justify-center items-center">
                              <img
                                src={item.image}
                                className="w-28 h-24 ml-5 rounded-md"
                                alt="Coffee Beans"
                              />
                            </div>
                            <div className="w-1/2 ml-6">
                              <div className="ml-2">
                                <p className="text-base font-medium">
                                  {item.name}
                                </p>
                                <p className="text-[#41644A] mt-2 text-sm font-medium">
                                  <Tag color="#3B8F51">
                                  {item.description}
                                  </Tag>
                                </p>
                                <div className="flex items-center mt-3">
                                  <button
                                    onClick={() =>
                                      handleDecreaseQuantity(item.id)
                                    }
                                    className={`px-2 py-0 rounded-full mr-2 ${
                                      item.quantity > 0
                                        ? "bg-[#3B8F51] text-white"
                                        : "bg-gray-300"
                                    }`}
                                  >
                                    -
                                  </button>
                                  <p className="text-[#3B8F51]">
                                    {item.quantity}
                                  </p>
                                  <button
                                    onClick={() =>
                                      handleIncreaseQuantity(item.id)
                                    }
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
                    <div className="w-1/2 p-4 h-[450px] bg-white  rounded-lg shadow-xl">
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
                          <p className="text-gray-400">
                            Item x {orderDetails.length}
                          </p>
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
                        <Link to="/payment">Bayar Sekarang</Link>
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Layar HP */}
      <>
      <div className="sm:inline lg:hidden md:hidden sm:w-screen w-screen mx-auto justify-start px-4 py-2 ">
     
        <div className="  mt-24 text-black">
           <h1 className="text-[#3B8F51] text-lg font-medium">Your Chart</h1>
          <br />

          <>
            <div className=" h-[43rem] overflow-auto">
              <div className="w-full md:w-2/3">
                {items.map((item, index) => (
                  <React.Fragment key={item.id}>
                    {index === 0 ||
                    items[index - 1].category !== item.category ? (
                      <h1 className="text-lg font-bold  mb-2">
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </h1>
                    ) : null}
                    <div className="w-full p-2">
                      <div className="flex items-center">
                        <div
                          key={item.id}
                          className="flex items-center space-x-4"
                        >
                          <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={checkedItems.includes(item.id)}
                            onChange={() => handleClick(item.id)}
                            value={item.id}
                          />
                        </div>
                        <div className="w-1/3">
                          <img
                            src={item.image}
                            className="w-16 h-16 ml-2 rounded-md"
                            alt="Coffee Beans"
                          />
                        </div>
                        <div className="w-full ">
                          <p className="text-xs font-medium">{item.name}</p>
                          <p className="text-[#41644A] mt-2 text-[10px] font-medium">
                            {item.description}
                          </p>
                          <div className="flex">
                            <div className="w-1/2  text-[#3B8F51] text-xs mt-2">
                              Rp {item.harga}
                            </div>
                            <div className="w-1/2  mt-2 flex justify-end items-end">
                              {" "}
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        </div>
        </div>
      </>

      <div className=" md:hidden lg:hidden">
        <footer className=" mt-10">
          <div className="w-full mx-auto bg-[#3B8F51] p-4">
            <div className="w-full flex mt-1">
              <div className="w-1/2  text-lg text-white">
                <p className="text-[#F7FFF1] text-xs">Total</p>Rp 30.000
              </div>
              <div className="w-1/2  ">
                <Link to="/payment">
                  <Button className="bg-white rounded-full text-[#3B8F51] w-full text-xs h-full">
                    Selanjutnya
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="hidden md:inline lg:inline mt-0">
        <Footer />
      </div>
    </div>
  );
}

export default TambahKeranjang;
