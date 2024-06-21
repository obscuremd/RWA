import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBarState } from "../States/NavBarState";
import {  useEffect, useState } from "react";
import { Menu } from "iconoir-react";
import { Shared } from "../assets/Shared";

import Dashboard from "../Screens/Dashboard";
import NewProject from "../Screens/NewProject";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Docs from "../Screens/Docs";
import MetaAuth from "../Auth/MetaAuth";
import { Ethlog } from "../utils/EthLog";
import { MetaData } from "../States/MetaData";
import UserForm from "../Screens/UserForm";
import axios from "axios";
import toast from "react-hot-toast";
import { useClerk } from "@clerk/clerk-react";
import { MongoUser } from "../States/LoggedInState";

// const Dashboard = lazy(() => import('../Screens/Dashboard'))
// const NewProject = lazy(() => import('../Screens/NewProject'))
// const SideBar = lazy(() => import('../Components/SideBar'))
// const Header = lazy(() => import('../Components/Header'))
// const Docs = lazy(() => import('../Screens/Docs'))

const Navigation = () => {

  const { user } = useClerk();

  const isMobile = window.innerWidth < 768;

  const [navbar, toggleNavBar] = useRecoilState(NavBarState);

  
  const [metaData, setMetaData] = useRecoilState(MetaData);
  metaData

  const [Loading, setLoading] = useState(false)

  const [userState, setUserState] = useState(0)

  const [User, setUser] = useRecoilState(MongoUser)
  User

  const fetchUser =async() => {
    setLoading(true)
    try {
      const res = await axios.get(`https://rwa-tpsg.onrender.com/api/user/${user?.emailAddresses[0].emailAddress}`)
      setUserState(res?.status)
      setUser(res.data)
      setLoading(false)
    } catch (error) {
      toast.error('error')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser();
    Ethlog(setMetaData);
    if (isMobile) {
      toggleNavBar(false);
    }
  }, []);


  if(Loading){
    return(
      <div className="flex justify-center items-center min-h-screen">
        <l-waveform size="35" stroke="3.5" speed="1" color="white" />
      </div>
    )
  }
 

  if (userState === 0){
    return(
      <div>
        <UserForm/>
      </div>
    )
  }

  return (
    <BrowserRouter>
      {isMobile && (
        <button
          onClick={() => toggleNavBar(!navbar)}
          className="fixed rounded-full border-[1px] top-[1.5%] left-[1.5%] border-[#445B8A] bg-[#2f4064] p-2 z-30"
          style={{ fontSize: Shared.Text.xl }}
        >
          <Menu />
        </button>
      )}

      <div className="flex">
        {navbar && <SideBar />}
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/MetaAuth" element={<MetaAuth />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/documents" element={<Docs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
