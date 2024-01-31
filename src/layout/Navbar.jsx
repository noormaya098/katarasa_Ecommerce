import React, { useState } from "react";
import LogoKatarasa from "../assets/Katarasa/KataRasa.png";
import IconOrder from "../assets/Katarasa/IconOrder.png";
import IconGoogle from "../assets/logo/Google.png";
import IconElogs from "../assets/logo/Elogs.png";
import SearchIcon from "../assets/Search.png";
import keranjangIcon from "../assets/Keranjang.png";
import { Button, Dropdown, Input, Menu, Modal } from "antd";
import {
  SearchOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [staticName, setStaticName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const menu = (
    <Menu className="w-36">
      <br />
      <Menu.Item key="menu">
        <Link to="/menu" className=" px-8 py-1  ">
          <span className="text-[#3B8F51] text-base ">Menu</span>
        </Link>
      </Menu.Item>
      <br />
      <Menu.Item key="promo">
        <Link className=" px-8 py-1  ">
          {" "}
          <span className="text-[#3B8F51] text-base">Promo</span>
        </Link>
      </Menu.Item>
      <br />
      <Menu  className="flex justify-center">
        <Menu.Item >
          <Link>
            <img src={keranjangIcon} alt="keranjang" className="w-7 h-6 ml-8" />
          </Link>
        </Menu.Item>
      </Menu>
      <hr className="border border-[#3B8F51]"/>
      <br />
      <Menu.Item key="signup">
        <Button // Buka modal login saat tombol ditekan
          className="text-[#3B8F51] border border-[#3B8F51] rounded-full px-7 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
        >
          Sign In
        </Button>
      </Menu.Item>
      <Menu.Item
        key="login"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {!isLoggedIn && (
          <Button
            onClick={() => setModalVisible(true)} // Buka modal login saat tombol ditekan
            className="text-[#3B8F51] border border-[#3B8F51] rounded-full px-8 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
          >
            Login
          </Button>
        )}
      </Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e) => {
    if (e.key === "menu") {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    // Menggunakan email dan password statis
    const staticEmail = "nmaya7371@gmail.com";
    const staticPassword = "akumaya098";
    const staticName = "maya";

    // Proses validasi login
    if (email === staticEmail && password === staticPassword) {
      setIsLoggedIn(true);
      setStaticName(staticName); // Set nama pengguna setelah berhasil login
      setModalVisible(false);
    } else {
      // Handle jika login gagal (misalnya, menampilkan pesan kesalahan)
    }
  };

  return (
    <nav className=" w-full shadow-lg fixed top-0 z-10 mx-auto  bg-[#41644A] fixe  md:pb-5 md:pt-5 flex justify-center items-center  ">
      <div className="flex items-center  mx-auto ">
        <div className="md:hidden mr-12">
          <img src={SearchIcon} alt="order" className="w-[30px] h-[30px]" />
        </div>
        <div className="mr-20 ">
          {/* Logo */}
          <img
            src={LogoKatarasa}
            alt="Logo"
            className=" h-[59px]  w-[163px] "
          />
        </div>
        {/* Tampilkan tab pada layar besar */}
        <div className="hidden md:flex md:space-x-5">
          <a
            className="text-white hover:text-white rounded-full px-2 py-1  hover:bg-[#3B8F51] hover:border-none"
            style={{ fontFamily: "Special Elite, sans-serif" }}
          >
            <Link to="/menu">Menu</Link>
          </a>
          <a
            href="#promo"
            className="text-white hover:text-white rounded-full px-2 py-1 hover:bg-[#3B8F51] hover:border-none"
          >
            Promo
          </a>

          <Input
            placeholder="Cari disini"
            suffix={
              <Link to="/pencarian">
                <SearchOutlined
                  style={{ color: "rgba(0, 0, 0, 0.25)" }}
                  className="cursor-pointer "
                />
              </Link>
            }
            style={{
              width: "447px",
              borderRadius: "40px",
              paddingLeft: "36px", // Sesuaikan dengan lebar ikon
            }}
          />
          <div>
            {/* <Link to="/cart"> */}
            <img src={IconOrder} alt="order" className="w-[30px] h-[30px]" />
            {/* </Link> */}
          </div>
          <div className="text-white font-bold">|</div>
          <>
            {isLoggedIn ? (
              // Dropdown ketika sudah login
              <>
                <div>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)} // Mengatur visibilitas dropdown menu saat nama pengguna diklik
                    className="flex items-center cursor-pointer"
                  >
                    <img
                      className="rounded-full w-5 h-5"
                      src={LogoKatarasa}
                      alt="Avatar"
                    />
                    <span className="mr-2 ml-5">{staticName}</span>{" "}
                    {/* Menampilkan nama pengguna setelah login */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${
                        showDropdown ? "transform rotate-180" : ""
                      }`} // Menyesuaikan rotasi ikon panah
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {showDropdown && ( // Menampilkan dropdown menu jika showDropdown true
                    <div className="absolute bg-white border rounded-md mt-2">
                      <ul>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          Akun
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          <Link to="/history">History</Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          Pengaturan
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <a
                href="#signin"
                onClick={() => setModalVisible(true)} // Buka modal login saat tombol ditekan
                className="text-white border border-white rounded-full px-3 py-1 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
              >
                Sign In
              </a>
            )}

            {/* Tambahkan kondisional untuk menampilkan tombol "Login" */}
            {!isLoggedIn && (
              <Button
                onClick={() => setModalVisible(true)} // Buka modal login saat tombol ditekan
                className="text-white border border-white rounded-full px-3 py-1 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
              >
                Login
              </Button>
            )}

            <Modal
              width={600}
              visible={modalVisible}
              onCancel={() => {
                setModalVisible(false);
                setEmail(""); // Reset email setelah modal ditutup
                setPassword(""); // Reset password setelah modal ditutup
              }}
              footer={null}
              title={
                <span
                  style={{ color: "#3B8F51" }}
                  className="font-semibold text-3xl"
                >
                  Masuk
                </span>
              }
            >
              <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="mt-10">
                  <label className=" font-medium text-xl">Email</label>
                  <Input
                    className="mt-3 border-none rounded-none"
                    placeholder="Masukkan Email Anda"
                    style={{ backgroundColor: "#E1DFDF" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-medium text-xl">Password</label>
                  <Input.Password
                    className="mt-3 border-none rounded-none"
                    placeholder="Masukkan Password Anda"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeTwoTone onClick={togglePasswordVisibility} />
                      ) : (
                        <EyeInvisibleOutlined
                          onClick={togglePasswordVisibility}
                        />
                      )
                    }
                    type={passwordVisible ? "text" : "password"}
                    bordered={false}
                    style={{ backgroundColor: "#E1DFDF" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  className="mt-5 justify-center w-full rounded-full bg-[#3B8F51] text-white hover:bg-transparent hover:border-green-500 hover:text-green-500"
                  onClick={handleLogin}
                >
                  Login
                </Button>

                <p className="text-end mt-5 text-[#3B8F51] font-medium text-sm cursor-pointer">
                  lupa password ?
                </p>
                <br />
                <br />
                <br />

                <hr className="border-1 border-solid border-[#3B8F51]" />
                <br />
                <br />

                <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                  Login Via Google
                </Button>
                <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                  Eureka Log In
                </Button>
              </div>
            </Modal>
          </>
        </div>
        {/* Hanya tampilkan hamburger icon saat layar kecil */}
        <div className="md:hidden absolute top-0 right-0 mt-4 mr-4 ">
          <Dropdown overlay={menu} trigger={["click"]} visible={isMenuOpen}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                F
                strokeLinejoin="round"
                className="lucide lucide-align-justify"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
