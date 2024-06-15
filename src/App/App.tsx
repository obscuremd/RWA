import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navigation from "../Navigation/Navigation";
import Auth from "../Auth/Auth";
import { Toaster } from "react-hot-toast";
import { MotionConfig } from "framer-motion";

const App = () => {
  return (
    <MotionConfig >
      <div className=" text-[#fff] min-h-screen">
        <Toaster toastOptions={{className:'toast'}}/>
        <SignedIn>
          <Navigation />
        </SignedIn>
        <SignedOut>
          <Auth />
        </SignedOut>
      </div>
    </MotionConfig>
  );
};

export default App;
