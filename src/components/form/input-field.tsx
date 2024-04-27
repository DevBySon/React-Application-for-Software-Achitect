"use client";

import { FieldError, UseFormRegister } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  forwardRef,
} from "@chakra-ui/react";

export type InputFieldProps = {
  type?: "text" | "number" | "password" | "textarea";
  label?: string;
  error?: FieldError;
} & Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

export const InputField = forwardRef((props: InputFieldProps, ref) => {
  const { type = "text", label, error, ...inputProps } = props;
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {type === "textarea" ? (
        <Textarea bg="white" rows={8} {...inputProps} ref={ref} />
      ) : (
        <Input bg="white" type={type} {...inputProps} ref={ref} />
      )}
      {error && <FormHelperText color="red">{error.message}</FormHelperText>}
    </FormControl>
  );
});
