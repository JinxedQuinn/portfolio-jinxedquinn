import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { KofiIcon } from "./icons/KofiIcon";
import { PawIcon } from "./icons/PawIcon";

export const Header = () => {
  return (
    <header className="bg-sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Chloé Nicolini 🐺</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/JinxedQuinn"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicolinichloe/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://ko-fi.com/jinxedquinn"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <KofiIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <PawIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
