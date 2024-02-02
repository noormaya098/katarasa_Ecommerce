import React, { useState } from "react";
import LogoKatarasa from "../assets/Katarasa/KataRasa.png";
import IconOrder from "../assets/KeranjangPutih.png";
import IconGoogle from "../assets/logo/Google.png";
import IconElogs from "../assets/logo/Elogs.png";
import SearchIcon from "../assets/Search.png";
import keranjangIcon from "../assets/Keranjang.png";
import { Button, Dropdown, Input, Menu, Modal } from "antd";
import {
  SearchOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function NavbarLain() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleSignIn, setPasswordVisibleSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staticName, setStaticName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleSignIn, setVisibleSignIn] = useState(false);

  const menu = (
    <Menu className="w-36">
      <br />
      <Menu.Item key="menu">
        <Link to="/menu" className=" px-8 py-1  ">
          <span className="text-[#3B8F51] text-base">Menu</span>
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
      <Menu className="flex justify-center">
        <Menu.Item>
          <Link to="/tambahkeranjang">
            <img src={keranjangIcon} alt="keranjang" className="w-7 h-6 ml-8" />
          </Link>
        </Menu.Item>
      </Menu>
      <hr className="border border-[#3B8F51]" />
      <br />

      <Menu.Item>
        <Button
          onClick={() => {
            handleLoginOrSignIn();
            setModalVisible(true);
          }}
          className="text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full px-8 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-white hover:border-[#3B8F51]"
        >
          Login
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          onClick={() => {
            handleLoginOrSignIn();
            setVisibleSignIn(true);
          }}
          className="text-[#3B8F51] border border-[#3B8F51] rounded-full px-7 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
        >
          Sign In
        </Button>
      </Menu.Item>

      <br />
    </Menu>
  );

  const showModalSignIn = () => {
    setVisibleSignIn(true);
  };

  const handleCancelSignIn = () => {
    setVisibleSignIn(false);
  };

  const handleSignIn = () => {
    // Handle sign in logic here
    setVisibleSignIn(false);
  };

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
  const togglePasswordVisibilitySignIn = () => {
    setPasswordVisibleSignIn(!setPasswordVisibleSignIn);
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

  const showModal = () => {
    setVisible(true);
  };

  // Fungsi untuk menyembunyikan modal
  const handleCancel = () => {
    setVisible(false);
  };

  const handleLoginOrSignIn = () => {
    // Logika untuk tindakan login atau sign in di sini
    // Setelah login atau sign in berhasil, tutup dropdown dengan menetapkan isMenuOpen ke false
    setIsMenuOpen(false);
  };

  const handleSignInClick = () => {
    setModalVisible(false);
    setVisibleSignIn(true);
  };

  const handleSignUpClick = () => {
    setVisibleSignIn(false);
    setModalVisible(true);
  };

  return (
    <div className="flex mx-auto bg-slate-500 w-full fixed z-[9999]">
      <nav className="  shadow-lg w-full  flex top-0 bg-[#41644A]   md:pb-5 md:pt-5  justify-center items-center  ">
        <div className="flex items-center ">
          {/* Search Layar HP */}
          <>
            <div className="md:hidden mr-12">
              <img
                src={SearchIcon}
                alt="order"
                className="w-[30px] h-[30px]"
                onClick={showModal} // Panggil showModal saat gambar diklik
              />

              <Modal
                title={
                  <span className="text-[#3B8F51]">
                    Cari menu favorite-mu!{" "}
                  </span>
                }
                closeIcon={<CloseOutlined style={{ color: "#3B8F51" }} />}
                visible={visible} // State untuk mengontrol keterlihatan modal
                onCancel={handleCancel} // Panggil handleCancel saat modal ditutup
                footer={null} // Tidak menampilkan footer
              >
                <Input
                  placeholder="Cari disini"
                  className="border border-[#3B8F51] rounded-full mt-4"
                />
                <Link to="/pencarian">
                  {" "}
                  <Button className="mt-5 w-full text-white bg-[#3B8F51] border border-[#3B8F51] rounded-full px-8 py-1  transition-colors duration-300 ease-in-out hover:bg-white hover:border-[#3B8F51]">
                    Search
                  </Button>
                </Link>
              </Modal>
            </div>
          </>

          <div className="mr-6 ">
            {/* Logo */}
            <Link to="/home">
              {" "}
              <img
                src={LogoKatarasa}
                alt="Logo"
                className=" h-[59px]  w-[163px] "
              />
            </Link>
          </div>

          {/* Tampilkan tab pada layar besar */}
          <div className="hidden md:flex md:space-x-6">
            <a
              className="text-white hover:text-white rounded-full px-4 py-2  hover:bg-[#3B8F51] hover:border-none"
              style={{ fontFamily: "Special Elite, sans-serif" }}
            >
              <Link to="/menu">Menu</Link>
            </a>
            <a
              href="#promo"
              className="text-white hover:text-white rounded-full px-4 py-2 hover:bg-[#3B8F51] hover:border-none"
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
                marginLeft: "16px",
                marginRight: "16px",
                marginTop: "8px",
                marginBottom: "8px",
                borderRadius: "40px",
                paddingLeft: "36px", // Sesuaikan dengan lebar ikon
              }}
            />
            <div className="px-3 py-3 bg-[#d0d0d0a7] rounded-full">
              <Link to="/tambahkeranjang">
                <img
                  src={IconOrder}
                  alt="order"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </div>

            <div className="text-white font-bold px-2 py-3">|</div>
            {/* Tambahkan kondisional untuk menampilkan tombol "Login" */}
            <>
              <div className="px-4 py-2">
                <Button
                  onClick={() => setModalVisible(true)}
                  className="text-white border border-white bg-[#3B8F51] rounded-full px-5 py-1 transition-colors duration-300 ease-in-out hover:bg-white hover:border-none"
                >
                  Login
                </Button>
                <>
                  <Button
                    className="text-[#3B8F51] bg-white border border-[#3B8F51] rounded-full px-7 py-1 ml-2 transition-colors duration-300 ease-in-out hover:bg-[#3B8F51] hover:border-none"
                    onClick={showModalSignIn}
                  >
                    Sign In
                  </Button>
                </>
              </div>
            </>
          </div>

          {/* Hanya tampilkan hamburger icon saat layar kecil */}
          <div className="md:hidden absolute top-0 right-0 mt-4 mr-4">
            <Dropdown overlay={menu} trigger={["click"]} visible={isMenuOpen}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-align-justify"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </Dropdown>
          </div>

          {/* Modal Login */}
          <>
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
                  className="font-semibold md:text-2xl text-lg "
                >
                  Masuk
                </span>
              }
            >
              <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                <div className="md:mt-10 mt-5">
                  <label className=" font-medium md:text-xl">Email</label>
                  <Input
                    className="mt-3 border-none rounded-full"
                    placeholder="Masukkan Email Anda"
                    style={{ backgroundColor: "#E1DFDF" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <label className="font-medium md:text-xl">Password</label>
                  <Input.Password
                    className="mt-3 border-none rounded-full"
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

                <p className="text-end mt-5 text-[#3B8F51] font-medium text-sm cursor-pointer md:mb-5">
                  lupa password ?
                </p>

                <br />
                <hr className="border-1 border-solid border-[#3B8F51] " />
                <br />

                <div>
                  <div className="justify-center items-center w-full flex">
                    Belum punya akun?{" "}
                    <span
                      className="ml-2 text-[#3B8F51] cursor-pointer"
                      onClick={() => {
                        setVisibleSignIn(true);
                        setModalVisible(false);
                      }}
                    >
                      SignIn
                    </span>
                  </div>
                  <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                    <span>
                      <img src={IconGoogle} alt="" className="w-5 h-5 mr-5" />
                    </span>{" "}
                    Login Via Google
                  </Button>
                  <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                    <span>
                      <img src={IconElogs} alt="" className="w-5 h-5 mr-5" />
                    </span>{" "}
                    Eureka Log In
                  </Button>
                </div>
              </div>
            </Modal>
          </>

          {/* Modal Sign In */}
          <>
            <Modal
              title={
                <span
                  style={{ color: "#3B8F51" }}
                  className="font-semibold sm:text-lg md:text-2xl"
                >
                  Daftar
                </span>
              }
              visible={visibleSignIn}
              onCancel={handleCancelSignIn}
              footer={null}
            >
              <div className="md:mt-10 mt-5">
                <label className=" font-medium md:text-xl">
                  Email / Nomor{" "}
                </label>
                <Input
                  className="mt-3 border-none rounded-full"
                  placeholder="Masukkan Email / Nomor Anda"
                  style={{ backgroundColor: "#E1DFDF" }}
                />
              </div>
              <div className="mt-5">
                <label className="font-medium md:text-xl">Password</label>
                <Input.Password
                  className="mt-3 border-none rounded-full"
                  placeholder="Masukkan Password Anda"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone onClick={togglePasswordVisibilitySignIn} />
                    ) : (
                      <EyeInvisibleOutlined
                        onClick={togglePasswordVisibilitySignIn}
                      />
                    )
                  }
                  type={passwordVisibleSignIn ? "text" : "password"}
                  bordered={false}
                  style={{ backgroundColor: "#E1DFDF" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                className="mt-6 mb-8 justify-center w-full rounded-full bg-[#3B8F51] text-white hover:bg-transparent hover:border-green-500 hover:text-green-500"
                onClick={handleLogin}
              >
                Daftar
              </Button>

              <br />
              <hr className="border-1 border-solid border-[#3B8F51] " />
              <br />

              <div>
                <div className="justify-center items-center w-full flex">
                  Sudah punya akun?{" "}
                  <span
                    className="ml-2 text-[#3B8F51] cursor-pointer"
                    onClick={() => {
                      setVisibleSignIn(false);
                      setModalVisible(true);
                    }}
                  >
                    Login
                  </span>
                </div>
                <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                  <span>
                    <img src={IconGoogle} alt="" className="w-5 h-5 mr-5" />
                  </span>{" "}
                  Login Via Google
                </Button>
                <Button className="mt-5 justify-center w-full rounded-full border-solid border-black flex items-center">
                  <span>
                    <img src={IconElogs} alt="" className="w-5 h-5 mr-5" />
                  </span>{" "}
                  Eureka Log In
                </Button>
              </div>
            </Modal>
          </>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLain;