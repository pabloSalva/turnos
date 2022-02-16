/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Snackbaroriginal(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Flex.Text[0]": {}, Flex: {} },
      variantValues: { type: "ingresadp" },
    },
    {
      overrides: {
        "Flex.Text[0]": { children: "Has guardado cambios" },
        Flex: {},
      },
      variantValues: { type: "guardado" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="292px"
      alignItems="center"
      position="relative"
      borderRadius="5px"
      padding="12px 16px 12px 16px"
      backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="0.1px"
        width="349px"
        height="24px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Has ingresado un coche"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
