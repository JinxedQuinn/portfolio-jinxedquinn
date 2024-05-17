import Link from "next/link";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">Chloé Nicolini 🐺</h1>
                <div className="flex-1" />
                <ul>
                    <Link
                    href="https://github.com/JinxedQuinn"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    <Link
                    href="https://ko-fi.com/jinxedquinn"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/nicolinichloe/"
                    className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={16} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    );
};