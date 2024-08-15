import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { redirect } from "next/navigation";

export const CurrentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const profile = await db.profile.findUnique({
    where: { userId },
  });

  return profile;
};
