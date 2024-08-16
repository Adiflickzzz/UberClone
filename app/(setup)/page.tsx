import { HomeContentPage } from "@/components/pages/Home-Page/home-content-page";
import { Footer } from "@/components/pages/Home-Page/footer";
import { HomeNavbar } from "@/components/pages/Home-Page/home-navbar";

import { LandingPage } from "@/components/pages/Home-Page/landing-page";
import Wrapper from "@/components/Wrapper";

const MainPage = () => {
  return (
    <div>
      <HomeNavbar />
      <LandingPage />
      <HomeContentPage />
      <Footer />
    </div>
  );
};

export default MainPage;
