import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

const variants = {
  link: { variant: "link", color: "primary" },
  solid: {
    variant: "solid",
    bg: "primary",
    color: "primaryAccent",
    _hover: {
      opacity: 0.9,
    },
  },
  outline: { variant: "outline", color: "primary", bg: "white" },
};

export type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  variant = "link",
  icon,
  shallow,
}: LinkProps) => (
  <NextLink shallow={shallow} href={href} passHref>
    <Button leftIcon={icon} as="a" {...variants[variant]}>
      {children}
    </Button>
  </NextLink>
);
