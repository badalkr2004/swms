"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// import { AppLogo } from "./AppLogo";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Convert Between Notations",
    href: "/docs",
    description:
      "Easily switch between infix, prefix, and postfix notations.",
  },
  {
    title: "Evaluate Expressions",
    href: "/docs",
    description:
      "Quickly compute the results of your expressions.",
  },
  {
    title: "User-Friendly Interface",
    href: "/docs",
    description:
      "Intuitive design for seamless navigation and use.",
  },
  {
    title: "Instant Results",
    href: "/docs",
    description: "Get conversions and evaluations in real-time.",
  },
  {
    title: "Secure and Private",
    href: "/docs",
    description:
      " All computations are performed locally in your browser.",
  },
];

export function Nav() {
  return (

    // w-full flex gap-4 justify-between items-center px-6 py-4  fixed bg-gradient-to-b from-transparent  to-white backdrop-blur-md shadow-md dark:to-gray-800
    <nav className="w-full flex gap-4 justify-between items-center px-6 py-4   dark:to-gray-800">
      <Link href={"./"} className="flex">
        {/* <AppLogo /> */}
        <div className="font-bold text-2xl ">memo</div>
      </Link>

      <NavigationMenu className="md:block hidden ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-2 text-lg font-medium">
                        Memo App
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        A Polish Notation Converter! This tool is designed to
                        help you effortlessly convert and evaluate expressions
                        in various forms of Polish notation.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Polish notation, also known as prefix notation, places
                  operators before their operands.
                </ListItem>
                <ListItem href="/docs/installation" title="How to use">
                  Input your arithmetic expression in the designated field.
                  Choose the notation type you want to convert to or evaluate.
                  Hit the button to see the converted expression or the
                  evaluated result. The converted expression or result will be
                  displayed instantly.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Examples">
                Evaluate Prefix: Evaluate (+ 3 * 4 2) to get 11 
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={ `${navigationMenuTriggerStyle()} bg-transparent `}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <Button className="">Get Started →</Button>
        <ModeToggle/>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
