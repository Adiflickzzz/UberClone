import { RideContentPage } from "@/components/pages/Ride-page/ride-content-page";
import { RideNavbar } from "@/components/pages/Ride-page/ride-navbar";
import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const page = async ({ params }: { params: { userId: string } }) => {
  const user = await CurrentProfile();

  const profile = await db.profile.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!profile) {
    redirect(`/ride/${user?.id}`);
  }
  return (
    <div className="">
      <RideNavbar />
      <RideContentPage />
    </div>
  );
};

export default page;
