import Link from "next/link";
import {
  ALargeSmall, Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight
} from "lucide-react";

/* Projets */
export const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "Mon site on va dire",
    url: "/",
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "Le deuxieme projet utilisé",
    url: "/",
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "Lorem Ipsum et la situation et blablabla",
    url: "/",
  },
  {
    Logo: MessageCircle,
    title: "Chat2Code",
    description: "Lorem Ipsum et la situation et blablabla",
    url: "/",
  },
  {
    Logo: Weight,
    title: "LinkedLeads",
    description: "A 222 platform blabla blablablebble",
    url: "/",
  },
  {
    Logo: ALargeSmall,
    title: "BulkCorrect",
    description: "A 222 platform blabla blablablebble",
    url: "/",
  },
];
type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SideProjects = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
