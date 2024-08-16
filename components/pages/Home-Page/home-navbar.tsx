import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Loader2, Menu } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { db } from "@/lib/db";

export const HomeNavbar = async () => {
  const buttons = ["Ride", "Drive", "Bussiness"];
  const user = await currentUser();

  const profile = await db.profile.findUnique({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="bg-black">
      <div className="max-w-[1280px] h-16 text-white flex mx-auto px-6 justify-between">
        <div className="flex items-center gap-5">
          <button className="text-lg xl:text-2xl">Uber</button>
          <div className="xl:flex items-center hidden">
            <Link href={`/ride/${profile?.id}`}>
              <Button size="sm" variant="ghost" className="rounded-full">
                Ride
              </Button>
            </Link>
            <Link href="/drive">
              <Button size="sm" variant="ghost" className="rounded-full">
                Drive
              </Button>
            </Link>
            <Link href="/bussiness">
              <Button size="sm" variant="ghost" className="rounded-full">
                Bussiness
              </Button>
            </Link>
            <Button variant="ghost" className="rounded-full">
              About <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-x-1">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full gap-2 ml-2"
            >
              <Globe className="w-4 h-4 -rotate-45" /> EN
            </Button>

            <Button size="sm" variant="ghost" className="rounded-full">
              Help
            </Button>
          </div>
          <div className="flex">
            <Button
              size="sm"
              variant="secondary"
              className="relative rounded-full xl:px-2 text-nowrap overflow-hidden"
            >
              <ClerkLoaded>
                {user ? (
                  <div className="flex items-center ml-1">
                    <p>{user?.firstName}</p>
                    <div className="ml-2 mt-1">
                      <UserButton />
                    </div>
                  </div>
                ) : (
                  <div className="mx-2">
                    <SignInButton />
                  </div>
                )}
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="animate-spin text-muted-foreground" />
              </ClerkLoading>
            </Button>
            <Button size="sm" className="bg-transparent hover:bg-transparent">
              <Menu className="h-6 w-6 ml-2 block xl:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
