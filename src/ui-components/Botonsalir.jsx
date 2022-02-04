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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Botonsalir(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.Flex[0].Text[0]": {}, "View.Flex[0]": {}, View: {} },
      variantValues: { estados: "Default" },
    },
    {
      overrides: {
        "View.Flex[0].Text[0]": { color: "rgba(255,255,255,1)" },
        "View.Flex[0]": {},
        View: {
          borderRadius: "4px",
          backgroundColor:
            "rgba(4.000000236555934,125.00000014901161,149.00000631809235,0.4000000059604645)",
        },
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
    <View
      width="67px"
      height="34px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Flex
        gap="0"
        position="absolute"
        top="calc(50% - 17px - 0px)"
        left="0%"
        right="0%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="8px 12px 8px 12px"
        {...getOverrideProps(overrides, "View.Flex[0]")}
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
          children="SALIR"
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </View>
  );
}
