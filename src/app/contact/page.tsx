"use client";

import { FixedNav } from "@/components/shared/fixed-nav";
import Footer from "@/components/shared/footer";
import ParallaxLayout from "@/components/shared/parallax-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { FormField } from "@/components/ui/form-field";
import { Textarea } from "@/components/ui/textarea";
import { Title } from "@/components/ui/title";
import { contactList } from "@/config/contact";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function ContactPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollVisibility(scrollContainerRef);

  const CardSendEmail = () => {
    return (
      <Card className="w-[calc(100%-10px)] md:w-[calc(100%-20px)] mx-[10px]">
        <CardContent>
          <form>
            <div className="flex flex-col">
              <FormField
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                required
                isFirst
              />
              <FormField
                id="name"
                label="Nom"
                type="text"
                placeholder="Your name"
                required
              />
              <FormField
                id="subject"
                label="Sujet"
                type="text"
                placeholder="Your subject"
                required
                inputClassName="py-4"
              />

              <Divider className="py-4" />
              <Textarea
                placeholder="Type your message here."
                className="border-0 shadow-none placeholder:text-gray-400 bg-gray-50 dark:bg-gray-900 focus-visible:ring-0 h-48"
                style={{ verticalAlign: "top" }}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
    );
  };

  const itemsContact = contactList.map((item) => {
    const isEmail = item.name === "Email";
    return (
      <div
        key={item.name}
        className={cn(
          "group flex flex-row items-center justify-center p-2 rounded-lg overflow-hidden",
          isEmail && "bg-white dark:bg-gray-400  shadow-md"
        )}
      >
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <img
            src={item.iconPath}
            alt={item.iconAlt}
            width={32}
            height={32}
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
        {isEmail && item.label && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-2 text-sm text-gray-800 dark:text-gray-100 hover:underline focus:outline-none",
              typography.label
            )}
          >
            {item.label}
          </a>
        )}
      </div>
    );
  });

  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <FixedNav isVisible={isVisible} />
      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory overflow-y-scroll h-screen w-full"
      >
        <section className="snap-always snap-center w-full min-h-screen flex items-center justify-center ">
          <div className="flex flex-col items-start w-full max-w-4xl m-4 md:m-8">
            <Title
              title="Let's connect"
              description="By email or on my social media."
            />
            <CardSendEmail />
            <div className="flex flex-row items-center justify-center gap-2 w-full m-2 md:m-2">
              {itemsContact}
            </div>
          </div>
        </section>
        <section className="snap-always snap-start w-full">
          <Footer />
        </section>
      </div>
    </ParallaxLayout>
  );
}
