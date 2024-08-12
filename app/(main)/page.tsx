import { NavBar } from "@/components/navigation/navbar";
import ContentPage from "@/components/pages/Home-Page/content-page";
import { LandingPage } from "@/components/pages/Home-Page/landing-page";
import Wrapper from "@/components/Wrapper";

const MainPage = () => {
  return (
    <div>
      <div className="bg-black ">
        <NavBar />
        <Wrapper>
          <LandingPage />
        </Wrapper>
      </div>
      <ContentPage />
    </div>
  );
};

export default MainPage;
