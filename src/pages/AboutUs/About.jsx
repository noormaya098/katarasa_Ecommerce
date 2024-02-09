import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import BackgroundAbout from "../../assets/AboutUs/Background.png";
import Gambar1 from "../../assets/AboutUs/Gambar1.png";
import Gambar2 from "../../assets/AboutUs/Gambar2.png";
import Star2 from "../../assets/AboutUs/Star2.png";
import Star1 from "../../assets/AboutUs/Star1.png";
import Kiri from "../../assets/AboutUs/kiri.png";
import Kanan from "../../assets/AboutUs/kanan.png";
import gambar1 from "../../assets/Locations/Gambar1.png";
import gambar2 from "../../assets/Locations/Gambar2.png";
import grab from "../../assets/Locations/Grab.png";
import sendok from "../../assets/Locations/sendok.png";
import shoppee from "../../assets/Locations/shoppee.png";

function About() {
  const images = [
    {
      src: gambar1,
      title: "Jl. Haji Baping Raya",
      address:
        "Jl. Haji Baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    {
      src: gambar2,
      title: "Taman Mini - LRT City",
      address:
        "Jl. Haji baping Raya No.100. Ciracas, Jakarta Timur. 13750 (PT Penerbit Erlangga)",
    },
    // Add more image data as needed
  ];

  return (
    <div className="w-screen h-screen  ">
      <Navbar />
      {/* Layar Besar */}
      <div className="">
        <div className="hidden sm:inline lg:inline ">
          <div className="flex flex-col sm:flex-row md:justify-between h-screen w-screen  space-x-5  mx-auto ">
            <div className=" mt-20 mx-auto w-screen  h-auto  ">
              <>
                <div
                  className="w-full h-[900px] p-4 mb-4 md:mb-0 relative text-white flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${BackgroundAbout})`,
                    backgroundSize: "cover", // Menentukan lebar gambar latar belakang
                  }}
                >
                  {/* Konten Anda di sini */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#41644A] to-transparent"></div>
                  <div className="z-0 text-center relative">
                    <h1 className="text-8xl font-bold relative">
                      <span
                        className="text-transparent"
                        style={{
                          WebkitTextStroke: "1px white",
                        }}
                      >
                        About Kata Rasa
                      </span>
                    </h1>
                  </div>
                </div>
              </>

              <>
                <div>
                  <div className="h-1/2 bg-slate-600">
                    <div className="bg-[#41644A] h-auto relative">
                      <div className="flex mx-auto w-[85rem]">
                        {/* Konten 1 */}
                        <div className="w-1/2 mb-20 mt-10">
                          <div className="p-16 text-white">
                            <p className="text-5xl w-[70%] font-semibold">
                              Secangkir Kata, Penuh Rasa.
                            </p>
                            <p className="mt-10">
                              Kata & Rasa Hadir dalam konsep kedai kopi dan teh,
                              secangkir kafein mampu membangkitkan inspirasi,
                              memori dan daya kreasi anda.
                            </p>
                            <p className="mt-5">
                              Kata & Rasa menjadi tempat bagi pengunjungnya
                              untuk mengembangkan imajinasi kreatif yang
                              menghasilkan narasi, puisi bahkan gambar yang
                              mengandung banyak makna.
                            </p>
                            <p className="mt-5">
                              Dalam Kata & Rasa, Kami merangkul terciptanya
                              segala ekspresi komunikasi yang mampu mengalihkan
                              ide-ide inovasi bagi penikmatnya.
                            </p>
                          </div>
                        </div>

                        {/* Gambar */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-14 w-1/2 h-full flex justify-center items-center ">
                          <img
                            src={Gambar1}
                            alt=""
                            className="w-[589px] h-[580px] self-start mt-28 mr-[18rem]"
                          />
                          <div className="absolute top-[7rem] right-[22rem]">
                            <img
                              src={Star1}
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="absolute top-[8rem] right-[21rem]">
                            <img
                              src={Star2}
                              alt=""
                              className="w-[30px] h-[30px] mt-4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <>
                    <div className="h-1/2 bg-[#FFF3E9] ">
                      <div className="relative">
                        <div className="absolute top-1/2 left-0 transform translate-y-[10rem]">
                          <img
                            src={Kiri}
                            alt=""
                            className="w-[35rem] h-[35rem]"
                          />
                        </div>
                        <div className="absolute top-1/2 right-0 transform translate-y-[39rem]">
                          <img
                            src={Kanan}
                            alt=""
                            className="w-[15rem] h-[25rem]"
                          />
                        </div>
                      </div>
                      <div className="h-auto relative">
                        <div className="flex mx-auto w-[85rem]">
                          {/* Konten 1 */}
                          <div className="w-1/2">
                            <div className="absolute top-24  transform  w-1/2 h-full flex justify-center items-center ">
                              <img
                                src={Gambar2}
                                alt=""
                                className="w-[589px] h-[580px] self-start mt-32 mr-[18rem]"
                              />
                            </div>
                          </div>

                          {/* Konten 2 */}
                          <div className="w-1/2 mb-20 mt-40">
                            <div className="p-16 text-[#41644A]">
                              <p className="text-5xl w-[70%] font-semibold">
                                Sedia Kata untuk kesatuan Rasa.
                              </p>
                              <p className="mt-10">
                                Kata & Rasa tersaji sebagai bagian dari
                                komunitas pecinta kopi yang akan terus
                                menghargai, mengedukasi, dan mengeksplorasi
                                kenikmatan dari sajian kopi, sebagai bagian dari
                                komoditas nusantara dan budaya dunia.
                              </p>
                              <p className="mt-5">
                                Kata & Rasa menyajikan serangkaian menu kopi
                                pilihan. Salah satu menu inovatif kami adalah
                                Tekopresso, paduan kuatnya kafein dengan
                                harumnya seduhan daun teh.
                              </p>
                              <p className="mt-5">
                                Kata & Rasa juga menghadirkan ragam varian kue
                                pastry sebagai teman minum kopi anda, seperti
                                Croissant, Danish dan Cromboloni.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />

                      {/* locations */}
                      <>
                        <div className="flex mx-auto w-[80rem]">
                          <h1 className="font-semibold text-4xl">
                            Store Locations
                          </h1>
                        </div>

                        <div className="mx-auto max-w-[80rem] mt-5 ">
                          <div className="grid grid-cols-2 gap-2 ">
                            {images.map((image, index) => (
                              <div key={index} className="w-full">
                                <div className="bg-white rounded-lg shadow-md p-6 mb-20">
                                  <img src={image.src} alt="" />
                                  <div className="w-full flex mt-2">
                                    <div className="w-full">
                                      <h1 className="text-[22px] font-medium">
                                        {image.title}
                                      </h1>
                                      <p className="text-[16px] font-normal text-gray-400">
                                        {image.address}
                                      </p>
                                    </div>
                                    <div className="flex w-1/2 justify-between items-center">
                                      <div className="w-1/3 ">
                                        <img
                                          src={sendok}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                      <div className="w-1/3 ">
                                        <img
                                          src={shoppee}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                      <div className="w-1/3 ">
                                        <img
                                          src={grab}
                                          alt=""
                                          className="cursor-pointer"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Footer />
                      </>
                    </div>
                  </>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
