import { Cards } from "@/components/Cards";
import { MainCards } from "@/components/MainCards";
import Wrapper from "@/components/Wrapper";
import React from "react";

export const HomeContentPage = () => {
  return (
    <Wrapper>
      <div>
        <h1 className="text-3xl font-semibold">Suggestions</h1>
        <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 lg:py-10">
          <Cards
            title="Ride"
            text="Go anywhere with Uber. Request a ride,hop in, and go."
            src="/card-1.png"
          />
          <Cards
            title="Reserve"
            text="Reserve your ride in advance so you can relax on the day of your trip."
            src="/card-2.png"
          />
          <Cards
            title="Package"
            text="Uber Connect makes same-day delivery easier than ever."
            src="/card-3.png"
          />
        </div>
        <div className="flex flex-col py-8 lg:py-16 gap-16 lg:gap-36">
          <MainCards
            title="Drive when you want, make what you need"
            text="Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
            src="/Maincard-1.webp"
            link="Already have an account? Sign in"
          />
          <MainCards
            title="The Uber you know, reimagined for business"
            text="Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
            src="/Maincard-2.webp"
            link="Check out our solutions"
            isInverted
          />
          <MainCards
            title="Make money by renting out your car"
            text="Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools."
            src="/Maincard-3.webp"
          />
        </div>
      </div>
    </Wrapper>
  );
};
