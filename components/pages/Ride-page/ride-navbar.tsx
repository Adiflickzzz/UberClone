import { FaCar } from "react-icons/fa";

export const RideNavbar = () => {
  return (
    <div className="border-b-4 border-gray-200 text-black">
      <div className="bg-slate px-16 pt-4 pb-2">
        <div className="flex items-baseline gap-24">
          <p className="text-3xl font-medium tracking-tight">Uber</p>
          <div className="text-sm font-medium flex items-center gap-1">
            <FaCar /> Ride
          </div>
        </div>
      </div>
    </div>
  );
};
