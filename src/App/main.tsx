import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ClerkProvider } from "@clerk/clerk-react";

const key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!key) {
  console.log("no key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={key}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ClerkProvider>
  </React.StrictMode>
);
