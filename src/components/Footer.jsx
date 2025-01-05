import React from "react";

function Footer() {
  return (
    <div className="bg-[#02033b]">
      <div className="container mx-auto pt-16 px-72 ">
        <div className="grid grid-cols-3 grid-rows-4 gap-x-6 max-h-[80vh]">
            <div className="text-white ">
                <h1 className="font-semibold text-3xl">Scan. Detect. Remove.</h1>
                <div className="flex space-x-3 py-10 ">
                    <a href="#"><img className="bg-white w-8 rounded-lg " src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000" alt="" /></a>
                    <a href="#"><img className="bg-white w-8 rounded-lg" src="https://img.icons8.com/?size=100&id=59780&format=png&color=000000" alt="" /></a>
                    <a href="#"><img className="bg-white w-8 rounded-lg" src="https://img.icons8.com/?size=100&id=37326&format=png&color=000000" alt="" /></a>
                </div>
                <div className="flex space-x-10 pb-8">
                    <div>
                        <a href="#" className="text-xs underline">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="" className="text-xs underline">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* 2222222222222222222 */}
            <div className="row-span-2 px-20">
                <h1 className="pb-5 mb-8 border-b-2 border-white text-white text-3xl" >Certo</h1>
                <a href="#" className="text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>iPhone</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>Android</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>Help</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>About</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>Insgihts</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3 pb-2">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>Resources</p>
                    </div>

                </a>
                <a href="#" className="mt-5 text-[#ffc247]">
                    
                    <div className="flex items-center space-x-3">
                    <img className="w-8" src="./images/arrow.png" alt="" />
                    <p>Affiliates</p>
                    </div>

                </a>
            </div>

            {/* 3333333333 */}
            <div className="col-start-3 row-span-2 bg-[#ffc247] rounded-3xl max-h-64 -mx-10">
                <div className="p-8">
                    <h1 className="pb-5 text-2xl font-semibold">Sign up to our <br /> newsletter</h1>
                    <p className="text-sm">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                </div>
                <input className="text-sm ml-8 px-5 rounded-l-2xl py-1" type="email" placeholder="Email address" />
                <button className="bg-black text-white px-5 py-1 text-sm rounded-r-xl">submit</button>
            </div>
            {/* 4444444444444444444 */}
            <div className="  mb-5 py-16">
                <p className="text-white pb-5 text-xs ">Copyright © 2024 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                <p className="text-white text-xs">Designed & developed by <span className="underline"><a href="#">Bigger Picture</a></span></p>
            </div>
            {/* 555555555555555555555555 */}
            <div className="col-start-1 row-start-3 pt-8 ">
                <img className="w-32 " src="https://certo-software.imgix.net/app/uploads/2021/12/coalition_against_stalkerware_logo.png" alt="" />
            </div>

            {/* 666666666666666 */}
            <div className="col-start-3 row-start-3  w-80   ">
                <div className="rounded-2xl">
                <div className="flex justify-end bg-white">
                    <img className="w-16 mx-5 " src="https://certo-software.imgix.net/app/uploads/2023/12/Globee-Award-2023.webp" alt="" />
                    <img className="w-16 mx-5 " src="https://certo-software.imgix.net/app/uploads/2023/12/Cybersecurity-Excellence-Gold-2023.webp" alt="" />
                    <img className="w-16 mx-5" src="https://certo-software.imgix.net/app/uploads/2024/05/Global-InfoSec-Awards-Winner-for-2024-250px.png" alt="" />
                </div>
                </div>
            </div>

            {/* 77777777777777777777 */}
            <div className="col-start-1 col-span-2 max-h-32 max-w-[60vh] ">
                <p className="text-white text-sm ">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
