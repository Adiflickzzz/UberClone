import { NavBar } from "@/components/navigation/navbar";
import ContentPage from "@/components/pages/Home-Page/content-page";
import { Footer } from "@/components/pages/Home-Page/footer";
import { LandingPage } from "@/components/pages/Home-Page/landing-page";
import Wrapper from "@/components/Wrapper";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <ContentPage />
      <Footer />
    </div>
  );
};

export default MainPage;
