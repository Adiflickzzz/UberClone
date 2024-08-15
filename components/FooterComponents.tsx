interface FooterProps {
  title: string;
  links: string[];
}

export const FooterComponents = ({ title, links }: FooterProps) => {
  const items = links;
  return (
    <div>
      <h1 className="font-medium">{title}</h1>
      <div className="mt-3">
        {items.map((i) => (
          <p
            key={i}
            className="py-2 text-sm font-light cursor-pointer hover:text-white/60"
          >
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};
