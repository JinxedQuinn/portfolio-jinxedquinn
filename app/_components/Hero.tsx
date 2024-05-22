import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { AdaIcon } from "./icons/AdaIcon";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Chloé Nicolini
        </h2>
        <h3 className="text-3xl font-caption">Créatrice Full Stack</h3>
        <p className="text-base">
          J'aime créer des projets sur{" "}
          <Link href="https://github.com/JinxedQuinn">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={16} className="inline" />
              GitHub
            </Code>
          </Link>
          , actuellement en formation à l'école{" "}
          <Link href="https://adatechschool.fr/">
            <Code className="inline-flex items-center gap-1">
              <AdaIcon size={16} className="inline" />
              Ada Tech School !
            </Code>
          </Link>
          Living in{" "}
          <Link href="https://www.google.fr/maps/place/Paris/@48.8335502,2.2670408,12z/data=!4m6!3m5!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.8575475!4d2.3513765!16zL20vMDVxdGo?entry=ttu">
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/langfr-225px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
                style={{ width: 16, height: "auto" }}
                className="inline"
                alt="France Flag"
              />
              Paris
            </Code>
          </Link>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="/JinxedQuinn.png"
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="Chloe Nicolini's online picture"
        />
      </div>
    </Section>
  );
};
