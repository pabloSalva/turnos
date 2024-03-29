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
import { Flex, View } from "@aws-amplify/ui-react";
export default function Switchfieldon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].View[0]": {},
        "Flex.Flex[0].View[1]": {},
        "Flex.Flex[0]": {},
        Flex: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Flex.Flex[0].View[0]": {
          backgroundColor:
            "rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
        },
        "Flex.Flex[0].View[1]": { left: "50%", right: "6.25%" },
        "Flex.Flex[0]": {},
        Flex: {},
      },
      variantValues: { property1: "press" },
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
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 24px 16px 24px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="32px"
        height="18px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,0.4000000059604645)"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[0]")}
        ></View>
        <View
          position="absolute"
          top="11.11111111111111%"
          bottom="11.11111111111111%"
          left="9.375%"
          right="46.875%"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Flex.Flex[0].View[1]")}
        ></View>
      </Flex>
    </Flex>
  );
}
