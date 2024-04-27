import React from "react";
import { Link } from "@chakra-ui/react";
import { Button } from "@/components/button/button";
import { InputField } from "@/components/form/input-field";

export default function Home() {
  return (
    <div>
      <Button variant="solid" type="button">
        Click me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
