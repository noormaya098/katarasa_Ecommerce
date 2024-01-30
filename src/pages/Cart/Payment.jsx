import React, { useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { EditOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
const { Option } = Select;
import LogoGrab from "../../assets/logo/logoGrab.png";
import Image1 from "../../assets/ProductCoffeeBeans/product coffee beans-2.png";

function Payment() {
  const [priceRange, setPriceRange] = useState([0, 100000]); // Nilai awal untuk range harga

  const handlePriceRangeChange = (value) => {
    // Mengatur range harga yang dipilih
    setPriceRange(value);
  };

  const deliveryOptions = [
    {
      id: 1,
      name: "Grab Instant",
      estimate: "Estimasi 20 menit",
      price: "Rp 20.000",
      logo: LogoGrab,
    },
    // Tambahkan opsi pengiriman lainnya di sini jika diperlukan
  ];

  const dataItems = [
    {
      id: 1,
      image: Image1,
      title: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      price: "Rp 24.000",
      quantity: 1,
    },
    {
      id: 1,
      image: Image1,
      title: "Coffee Beans - Robusta Temanggung",
      description: "500gr, Exclude, Plastics",
      price: "Rp 24.000",
      quantity: 1,
    },
    // Tambahkan item lainnya di sini jika diperlukan
  ];

  const DataDetailPesanan = [
    {
      id: 1,
      title: "Coffee Beans - Robusta Te..",
      quantity: 1,
      price: "Rp24.000",
    },
    {
      id: 2,
      title: "Tea Leaves - Green",
      quantity: 2,
      price: "Rp20.000",
    },
  ];

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

  const grabInstantDeliveryCost = "20.000"; // Assuming Grab Instant delivery cost is fixed

  const totalPrice = orderDetails.reduce((sum, order) => {
    const price = parseFloat(order.price.replace("Rp ", "").replace(".", ""));
    return sum + price;
  }, 0);

  const totalWithGrab =
    totalPrice + parseFloat(grabInstantDeliveryCost.replace(".", ""));

  return (
    <div>
      <Navbar />
      <div className="mx-auto justify-center flex flex-col-reverse sm:flex-row px-4 sm:px-8 md:px-16 py-2 mt-32 sm:mt-20 lg:mt-16 p-4 text-black space-x-7">
        <div className="sm:w-2/3 mt-14 text-black">
          <div className="mt-5">
            <h1 className="text-xl font-medium">Alamat Anda</h1>
            <div className="flex flex-col sm:flex-row mt-2 border rounded-lg border-[#41644A] bg-[#fbfff1]">
              <div className="w-full sm:w-5/6 p-4 text-[#41644A] text-base  font-medium">
                Jl. Raya Poncol No.36 8 9, RT.8/RW.9, Susukan, Kec. Ciracas,
                Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                <p className="mt-2">Kode Pos: 13750</p>
              </div>
              <div className="w-full sm:w-1/6 p-4 sm:p-2 flex justify-center items-center">
                <div className="rounded-full bg-[#e1eedd] md:w-10 md:h-10 sm:w-10 sm:h-10 px-3 py-1">
                  <EditOutlined className="mt-3 text-[#41644a] font-bold cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-xl font-medium">Pilih Pengiriman Anda</h1>
            <Select
              className="mt-5 w-full h-auto"
              defaultValue={deliveryOptions[0].name}
            >
              {deliveryOptions.map((option) => (
                <Option key={option.id} value={option.name}>
                  <div className="flex flex-col sm:flex-row items-center p-2">
                    <div className="flex justify-center items-center w-20 h-12 sm:mr-5">
                      <img
                        src={option.logo}
                        alt={option.name}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="font-medium text-lg">{option.name}</div>
                      <p className="text-base text-[#787878]">
                        {option.estimate}
                      </p>
                    </div>
                    <div className="flex items-center justify-center md:ml-auto text-[#41644A] text-lg font-medium">
                      {option.price}
                    </div>
                  </div>
                </Option>
              ))}
            </Select>
          </div>
          <div className="mt-10 ">
            <h1 className="text-xl font-medium">Pesanan Anda</h1>
            <>
              {dataItems.map((item) => (
                <div key={item.id} className="mt-5 w-full flex">
                  <div className=" w-1/6">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className=" w-full">
                    <h1 className="font-medium text-lg">{item.title}</h1>
                    <p className="text-[#41644A] text-lg font-normal p-2">
                      {item.description}
                    </p>
                    <p className="text-[#41644A] md:text-lg font-medium">
                      {item.price} <span> x {item.quantity}</span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          </div>
        </div>

        <div className="lg:block sm:w-1/3 mt-16 md:w-1/3  shadow-xl">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-0">
            {/* Isi konten pencarian */}
            {/* Dropdown select untuk filter */}

            <h2 className="text-lg text-[#41644A] font-medium  mb-4">
              Detail Pesanan
            </h2>
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
              {" "}
              <div className="w-[230px]">
                {" "}
                <p className="truncate text-lg text-[#3B8F51] ">
                  {" "}
                  Grab Instant{" "}
                </p>{" "}
                <p className="text-[#3B8F51] ">Pengiriman</p>{" "}
              </div>{" "}
              <div className="w-1/4 text-[#3B8F51] text-end mt-5">
                Rp {grabInstantDeliveryCost}
              </div>{" "}
            </div>
            <div className="flex justify-between mb-4">
              <div className="w-1/2">
                <p className="text-lg font-medium">Total Pesanan</p>
                <p className="text-gray-400">Items {orderDetails.length}</p>
              </div>
              <div className="w-1/4 text-[#3B8F51] text-center mt-5 md:text-lg sm:text-sm font-medium">
                Rp {totalWithGrab.toLocaleString()}
              </div>
            </div>

            <Input
              placeholder="Silahkan Masukkan Voucher"
              className="w-full h-14 mt-3 border border-[#3B8F51] placeholder-[#41644A] font-normal text-base"
            />
            <button className="bg-[#3B8F51] text-white py-2 px-4 rounded-full mt-8 w-full hover:bg-[#41644A]">
              Bayar Sekarang
            </button>

            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
