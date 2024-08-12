import { Button } from "./ui/button";

interface CardProps {
  title: string;
  text: string;
  src: string;
}

export const Cards = ({ title, text, src }: CardProps) => {
  return (
    <div className="bg-slate-100 relative p-4 rounded-lg flex items-center justify-between">
      <div className="">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="py-4 text-xs leading-relaxed">{text}</p>
        <Button
          variant="ghost"
          className="bg-white rounded-full hover:bg-slate-200 "
        >
          Details
        </Button>
      </div>

      <img src={src} className="w-[128px]" alt="image" />
    </div>
  );
};
