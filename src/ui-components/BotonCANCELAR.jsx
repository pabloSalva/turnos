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
export default function BotonCANCELAR(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Flex.Flex[0].Text[0]": {}, "Flex.Flex[0]": {}, Flex: {} },
      variantValues: { estados: "Default" },
    },
    {
      overrides: {
        "Flex.Flex[0].Text[0]": { color: "rgba(255,255,255,1)" },
        "Flex.Flex[0]": {
          backgroundColor:
            "rgba(4.000000236555934,125.00000014901161,149.00000631809235,0.4000000059604645)",
        },
        Flex: {},
      },
      variantValues: { estados: "Press" },
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
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="34px"
        position="relative"
        borderRadius="4px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,0)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.41000000000000003px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="CANCELAR"
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
