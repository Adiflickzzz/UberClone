import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center bg-black/95">
      <div className="flex items-center justify-center">
        <ClerkLoaded>
          <SignIn />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-white" />
        </ClerkLoading>
      </div>
    </div>
  );
}
