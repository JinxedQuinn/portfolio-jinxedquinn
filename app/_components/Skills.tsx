"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Section } from "./Section";

const reviews = [
  {
    name: "GitHub",
    username: "@GitHub",
    body: "GitHub",
    img: "/github.svg",
  },
  {
    name: "Notion",
    username: "@Notion",
    body: "Notion",
    img: "/notion.svg",
  },
  {
    name: "Discord",
    username: "@Discord",
    body: "Discord",
    img: "/discord.svg",
  },
  {
    name: "Slack",
    username: "@Slack",
    body: "Slack",
    img: "/slack.svg",
  },
  {
    name: "MacOS",
    username: "@MacOS",
    body: "MacOS",
    img: "/apple.svg",
  },
  {
    name: "ChatGPT",
    username: "@ChatGPT",
    body: "OpenAI",
    img: "/openai.svg",
  },
  {
    name: "Vercel",
    username: "@Vercel",
    body: "Vercel",
    img: "/vercel.svg",
  },
  {
    name: "VS Code",
    username: "@vscode",
    body: "VS Code",
    img: "/vscode.svg",
  },
  {
    name: "Javascript",
    username: "@javascript",
    body: "Javascript",
    img: "/javascript.svg",
  },
  {
    name: "HTML",
    username: "@Html",
    body: "HTML",
    img: "/html5.svg",
  },
  {
    name: "CSS",
    username: "@CSS",
    body: "CSS",
    img: "/css3.svg",
  },
  {
    name: "TailwindCSS",
    username: "@TailwindCSS",
    body: "TailwindCSS",
    img: "TailwindCSS.svg",
  },
  {
    name: "React",
    username: "@react",
    body: "React",
    img: "react.svg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Ligne du bas",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "NextJS",
    username: "@nextjs",
    body: "Next.JS",
    img: "nextjs.svg",
  },
  {
    name: "PHP",
    username: "@PHP",
    body: "PHP",
    img: "php.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, body }: { img: string; body: string }) => {
  return (
    <Section>
      {" "}
      <figure
        className={cn(
          "relative w-auto cursor-pointer overflow-hidden rounded-xl border p-2"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            // className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
        </div>
        <blockquote className="mt-2 text-sm text-center">{body}</blockquote>
      </figure>
    </Section>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="text-lg text-muted-foreground">Stacks et Outils</p>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
};

export default MarqueeDemo;
