import React, { useState } from 'react'
import FriendList from '../card/FriendList';
import Search from '../card/Search';
import Chat from '../card/Chat';
import HomePage from '../card/HomePage';
import Lottie from "lottie-react";
import friendsAnimation from "../assets/98723-search-users.json";
import searchAnimation from "../assets/96916-searching.json";
import chatAnimation from "../assets/97169-bubble-chat.json";
import homeAnimation from "../assets/animation_lk027sqg.json";

const BottomBar = ({ accountDetails, account, contract }) => {
  const [selected, setselected] = useState(1);
  const toProfile = (event) => {
    setselected(0);
  }
  const toChat = (event) => {
    setselected(2);
  }
  const toFriends = (event) => {
    setselected(3);
  }
  const toHome = (event) => {
    setselected(1);
  }
  return (
    <div>
      <div className="flex flex-col items-center bg-black mt-4 py-1 h-[550px]  sm:w-[600px] rounded-lg ">
        {selected === 0 &&
          <div>
            <Search contract={contract} />
          </div>
        }
        {selected === 1 &&
          <div>
            <HomePage contract={contract} />
          </div>
        }
        {selected === 2 &&
          <div>
            <Chat contract={contract} />

          </div>
        }
        {selected === 3 &&
          <div>
            <FriendList contract={contract} />
          </div>
        }
      </div>
      <div className="flex flex-row items-center justify-around py-1  bg-black  sm:w-[600px] rounded-xl ">
        <button onClick={toProfile} className={` rounded-xl px-7 py-4 sm:px-3 mx-4 items-center flex flex-row ${selected === 0 ? " bg-[#0b2f42]" : "hover:bg-[#0b2f42]"}`}>
          <Lottie animationData={friendsAnimation} className=" scale-[210%] h-[30px]" />
          <div className="ml-4 text-lg font-light font-sans sm:flex hidden ">
            Search
          </div>
        </button>
        <button onClick={toHome} className={` rounded-xl px-7 py-4 sm:px-3 mx-4  items-center flex flex-row ${selected === 1 ? " bg-[#0b2f42]" : "hover:bg-[#0b2f42]"}`}>
          <Lottie animationData={homeAnimation} className=" scale-[140%] h-[30px]" />
          <div className="ml-4 px-1 text-lg font-light font-sans sm:flex hidden ">
            Home
          </div>
        </button>
        <button onClick={toChat} className={` rounded-xl px-7 py-4 sm:px-3 mx-4 items-center flex flex-row ${selected === 2 ? " bg-[#0b2f42]" : "hover:bg-[#0b2f42]"}`}>
          <Lottie animationData={chatAnimation} className=" scale-[250%] w-[30px]" />
          <div className="ml-4 text-lg font-light font-sans sm:flex hidden ">
            Chat
          </div>
        </button>
        <button onClick={toFriends} className={` rounded-xl px-7 py-4 sm:px-3 mx-4  items-center flex flex-row ${selected === 3 ? " bg-[#0b2f42]" : "hover:bg-[#0b2f42]"}`}>
          <Lottie animationData={searchAnimation} className=" scale-[190%] h-[30px]" />
          <div className="ml-4 text-lg font-light font-sans sm:flex hidden ">
            Friends
          </div>
        </button>


      </div>
    </div>

  )
}

export default BottomBar