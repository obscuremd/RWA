// import { signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { Shared } from "../assets/Shared";
// import { auth } from "../../firebaseConfg";

const Home = (
  // { setUser }
) => {
  // const logOut = async () => {
  //   try {
  //     await signOut(auth); // Call signOut without passing user object
  //     setUser(null); // Reset user state after signing out
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };

  // const [active, setActive] = useState(true);
  // const [account, setAccount] = useState("");

  // const log = async () => {
  //   const windowWithEthereum = window.ethereum;
  //   if (windowWithEthereum) {
  //     try {
  //       const accounts = await windowWithEthereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAccount(accounts[0]);
  //       setActive(false);
  //     } catch (error) {
  //       console.error("Error fetching accounts:", error);
  //     }
  //   } else {
  //     alert("Please install MetaMask");
  //   }
  // };

  // useEffect(() => {
  //   log();
  // }, []);

  return (
    <div>
      youre home
      {/* <p>{account}</p>
      {active && (
        <button
          onClick={log}
          style={{ fontSize: Shared.Text.large }}
          className="md:px-12 md:py-2 px-3 py-3 w-full border-[1px] border-[#445B8A] rounded-xl font-bold bg-[#2F4064BF]"
        >
          Connect Wallet
        </button>
      )}
      <button
        onClick={logOut}
        style={{ fontSize: Shared.Text.large }}
        className="md:px-12 md:py-2 px-3 py-3 w-full border-[1px] border-[#445B8A] rounded-xl font-bold bg-[#2F4064BF]"
      >
        Log-Out
      </button> */}
    </div>
  );
};

export default Home;
