import { Badge } from "../badge/Badge";
import { MiButton } from "../button/Button";

interface CardProps {
  variant: "project" | "skill";
  title?: string;
  description?: string;
  image?: string;
  badges?: string[];
  icon?: React.ElementType;
  items?: string[];
  children?: React.ReactNode;
}

export const Card = ({
  variant,
  title,
  description,
  image,
  badges = [],
  icon: Icon,
  items = [],
  children,
}: CardProps) => {
  if (variant === "skill") {
    return (
      <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all shadow-soft">
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{items.join(" • ")}</p>
      </div>
    );
  }

  if (variant === "project") {
    return (
      <div className=" z-1000 rounded-2xl border border-[#D9ABB6] overflow-hidden shadow-md hover:shadow-lg transition-all">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <Badge key={b} text={b} />
            ))}
          </div>
          <div className="flex gap-2 pt-3">{children}</div>
        </div>
      </div>
    );
  }

  return null;
};
