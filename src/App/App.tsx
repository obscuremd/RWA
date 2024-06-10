import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navigation from "../Navigation/Navigation";
import Auth from "../Auth/Auth";

const App = () => {
  return (
    <div className=" text-[#fff] min-h-screen">
      <SignedIn>
        <Navigation />
      </SignedIn>
      <SignedOut>
        <Auth />
      </SignedOut>
    </div>
  );
};

export default App;
