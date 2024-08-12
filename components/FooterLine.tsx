import { Facebook, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosPin, IoLogoInstagram } from "react-icons/io";

export const FooterLine = () => {
  return (
    <div className="text-white">
      <div className="lg:flex items-center lg:justify-between">
        <div className="flex gap-8 lg:gap-16">
          <Button size="sm" variant="ghost">
            <FaFacebookSquare className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <BsTwitterX className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <FaYoutube className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <FaLinkedin className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <IoLogoInstagram className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-10 lg:mt-0 flex gap-2">
          <Button size="sm" variant="ghost">
            <Globe className="w-4 h-4 -rotate-45" />
            <p className="ml-2">English</p>
          </Button>
          <Button size="sm" variant="ghost">
            <IoIosPin className="w-4 h-4" />
            <p className="ml-2">Banglore</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
