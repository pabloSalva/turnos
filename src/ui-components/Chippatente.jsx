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
export default function Chippatente(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "View.Flex[0].Text[0]": {}, "View.Flex[0]": {}, View: {} },
      variantValues: { estado: "default" },
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
      width="99px"
      height="28px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="calc(50% - 14px - 0px)"
        left="0%"
        right="0%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="99px"
        padding="4px 8px 4px 8px"
        backgroundColor="rgba(184.00000423192978,206.0000029206276,249.00000035762787,1)"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.49px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="En espera"
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
      </Flex>
    </View>
  );
}
