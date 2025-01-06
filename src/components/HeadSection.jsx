import React from "react";

function HeadSection() {
  return (
    <div className="container mx-auto">
      <section id="HeadSection " className="">
        <div className="">
          <figure>
            <div className="min-h-screen relative md:min-h-screen">
              <img
                className="hidden md:block md:absolute -left-1/4 top-11 z-0 w-full md:w-9/12 md:-left-54 md:-top-1 "
                src="https://www.certosoftware.com/images/tmp/shapes/bg-circle.svg"
                alt=""
              />
              <div className="absolute bg-indigo-700 right-1 w-5/12 h-full z-0 ">
                <img
                  className="absolute flex justify-self-end  z-0 w-11/12 top-36 right-0 "
                  src="https://certo-software.imgix.net/app/uploads/2022/08/home-header-2.png?w=1300&h=&auto=format"
                  alt=""
                />
              </div>
            </div>
          </figure>
        </div>
        <div className="absolute z-10 top-64 flex w-6/12 space-x-20 ">
          <div className="header_Detail">
            <h1 className="font-bold text-6xl">
              Your mobile privacy is our mission
            </h1>
            <h2 className="text-2xl font-semibold py-10">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </h2>
            <div className="box_h-detail flex justify-around px-16">
                <a href="#">              
                    <div className="bg-[#ffc247] font-semibold px-10 py-2 text-2xl rounded-full">Get Certo for iPhone</div>
                </a>

                <a href="#">              
                    <div className=" font-semibold px-10 py-2 text-2xl rounded-full border-solid border-2 border-black" >Get Certo for Android</div>
                </a>
            </div>
          </div>
          <div className="">
            <img
              className="absolute z-10 -top-16 w-4/12"
              src="https://certo-software.imgix.net/app/uploads/2022/10/android-dashboard-certo-2.png?w=1300&h=&auto=format"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeadSection;
