"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import useMyPoint from "@/hooks/useMyPoint";
import { useRouter } from "next/router";
import axios from "axios";
const Header = () => {
  // const [myPoint, setMyPoint] = useState<number | null>();
  const { currentUser, clearUser } = useCurrentUser();
  const { myPoint, getPoint } = useMyPoint();

  return (
    <>
      <div className="bg-[#1A94FF] text-white hidden 2xl:block xl:block lg:block">
        <div className=" container mx-auto  px-16 ">
          {/* wrap menu */}
          <div className="flex items-center  pt-4 pb-2.5">
            {/* menu đầu */}
            <div className="flex items-center  justify-between flex-1  ">
              <div className="w-48 h-10 mr-4">
                <Link href="/">
                  {" "}
                  <img
                    className="w-14 "
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3  ">
              <div className="flex gap-2 ml-4 hidden 2xl:flex xl:flex">
                <img
                  className="w-8 h-8 mr-2"
                  src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png"
                  alt=""
                />
                {currentUser?.username ? (
                  <div className="flex flex-col gap-1">
                    <span className="flex flex-col gap-1">
                      <span className="inline-block text-xs">
                        {currentUser?.first_name} {currentUser?.last_name}
                      </span>
                      <a
                        href="/"
                        onClick={() => {
                          clearUser();
                          localStorage.removeItem("carts");
                        }}
                        className="text-xs logout"
                      >
                        Logout
                      </a>
                    </span>
                    <div className="dropdown inline-block relative">
                      <Link
                        href="/order"
                        className=" flex items-center text-sm "
                      >
                        My Order
                      </Link>
                    </div>
                  </div>
                ) : (
                  <span className="inline-block text-xs">
                    <Link href="/login">Login</Link> /
                    <Link href="/register">Register</Link>
                  </span>
                )}
              </div>
              <div className="flex items-center cursor-pointer ">
                <div className="relative">
                  <Link href="/cart">
                    <img
                      className="w-8 h-8"
                      src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
                    />
                  </Link>
                  <a href="/cart"></a>
                </div>
                <a href="/cart">
                  {" "}
                  {/* <span className="text-xs ml-1   ">Cart</span> */}
                </a>
              </div>

              {currentUser && (
                <div className="flex items-center text-md mt-2">
                  My point : {myPoint}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A94FF] 2xl:hidden  xl:hidden lg:hidden md:block sm:block">
        <div className=" px-3 mb-3 py-1 ">
          <div className="flex items-center justify-between h-11">
            <div>
              <Link href="/" style={{}}>
                <img
                  src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
                  alt="free-ship-badge"
                  height={14}
                  width={97}
                />
              </Link>
            </div>
            <div>
              <img
                src="https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png"
                alt="logo tiki"
                width={40}
              />
            </div>
            <div className=" flex  ">
              <Link href="/order">
                <img
                  className="mx-[14px] relative top-1 "
                  src="https://github.com/nhatminh6112003/ITJOBS-FRONTEND/assets/106549349/1edf9de1-797a-41bc-b71d-7c4418b3a754"
                  width={24}
                  height={24}
                />
              </Link>
              <div className="relative">
                <Link href="/cart">
                  <img
                    className=" relative top-1"
                    src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png"
                    width={24}
                    height={24}
                    alt="icon cart"
                  />
                </Link>
              </div>
            </div>
          </div>
          {currentUser ? (
            <div className="flex  items-center justify-between text-md mt-2 text-white">
              <p>My point : {myPoint}</p>
              <div className="flex gap-4 items-center">
                <span className="inline-block text-base">
                  {currentUser?.first_name} {currentUser?.last_name}
                </span>
                <a
                  href="/"
                  onClick={() => {
                    clearUser();
                    localStorage.removeItem("carts");
                  }}
                  className="text-base "
                >
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div className="flex  items-center justify-between text-md mt-2 text-white">
              <div></div>
              <div className="flex gap-4">
                <Link href="/login">Login</Link> /
                <Link href="/register">Register</Link>
              </div>
            </div>
          )}
          {/* <div className="flex items-center bg-white   mt-1   rounded-[3px] ">
            <input
              placeholder="Bạn tìm gì hôm nay?"
              className=" h-10 px-3 w-full outline-0 rounded-[3px] input_mobile"
              type="search"
            />
            <img
              className=" w-10 h-10 px-3 object-contain cursor-pointer btn_mobile rounded-r-[3px] search_mobile"
              src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
              alt="icon-search"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
