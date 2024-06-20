import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navigation from "../Navigation/Navigation";
import Auth from "../Auth/Auth";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { app } from "../assets/firebaseConfig";

app

const App = () => {
  return (
    <MotionConfig >
      <AnimatePresence>
        <div className=" text-[#fff] min-h-screen">
          <Toaster toastOptions={{className:'toast'}}/>
          <SignedIn>
            <Navigation />
          </SignedIn>
          <SignedOut>
            <Auth />
          </SignedOut>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default App;
