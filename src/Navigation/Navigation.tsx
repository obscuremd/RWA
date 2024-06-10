import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBarState } from "../States/NavBarState";
import {  useEffect } from "react";
import { Menu } from "iconoir-react";
import { Shared } from "../assets/Shared";

import Dashboard from "../Screens/Dashboard";
import NewProject from "../Screens/NewProject";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Docs from "../Screens/Docs";

// const Dashboard = lazy(() => import('../Screens/Dashboard'))
// const NewProject = lazy(() => import('../Screens/NewProject'))
// const SideBar = lazy(() => import('../Components/SideBar'))
// const Header = lazy(() => import('../Components/Header'))
// const Docs = lazy(() => import('../Screens/Docs'))

const Navigation = () => {
  const isMobile = window.innerWidth < 768;

  const [navbar, toggleNavBar] = useRecoilState(NavBarState);

  useEffect(() => {
    if (isMobile) {
      toggleNavBar(false);
    }
  }, []);

  return (
    <BrowserRouter>
      {isMobile && (
        <button
          onClick={() => toggleNavBar(!navbar)}
          className="absolute rounded-full border-[1px] top-[1.5%] left-[1.5%] border-[#445B8A] bg-[#2f4064] p-2 z-30"
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
