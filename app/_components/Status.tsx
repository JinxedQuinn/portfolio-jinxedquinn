import Link from "next/link";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import {
  Code,
  LucideIcon,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      {/* <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
        Side Projects
      </Card>
      <div className="flex-[2] w-full flex flex-col h-full gap-4">
        <Card className="p-4 flex-1">work</Card>
        <Card className="p-4 flex-1 ">contact me</Card>
      </div> */}

      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
        <p className="text-lg text-muted-foreground">Contact Me</p>
        </Card>
      </div>
    </Section>
  );
};

/* Projets */

const SIDE_PROJECTS: SideProjectsProps[] = [
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
];

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProjects = (props: SideProjectsProps) => {
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

const WORKS: WorkProps[] = [
  {
    image:
      "http://www.clavim.asso.fr/wp-content/uploads/2016/07/logo-web-retina_2016.png",
    title: "CLAVIM",
    role: "Animatrice Jeunesse",
    date: "2021 - 2023",
    url: "http://www.clavim.asso.fr/espace-jeunes-anne-frank",
  },
  {
    image:
      "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
    title: "UberEats",
    role: "Coursière",
    date: "2018 - 2019",
    url: "https://www.ubereats.com/fr",
    freelance: true,
  },
  {
    image:
      "https://j9g7u6e4.rocketcdn.me/wp-content/uploads/2020/12/logo-onet-blanc.svg",
    title: "ONET",
    role: "Femme de ménage",
    date: "2019 - 2020",
    url: "https://www.groupeonet.com",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
