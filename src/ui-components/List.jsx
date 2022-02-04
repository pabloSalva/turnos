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
import { Flex } from "@aws-amplify/ui-react";
export default function List(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Flex.Flex[0].Flex[0]": {}, "Flex.Flex[0]": {}, Flex: {} },
      variantValues: { estados: "listdefault" },
    },
    {
      overrides: {
        "Flex.Flex[0].Flex[0]": {},
        "Flex.Flex[0]": {
          position: "absolute",
          backgroundColor:
            "rgba(177.0000046491623,204.00000303983688,235.0000011920929,0.15000000596046448)",
          top: "0%",
          bottom: "0%",
          left: "calc(50% - 177.5px - 0px)",
        },
        Flex: { width: "355px", height: "168px" },
      },
      variantValues: { estados: "listpress" },
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
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="column"
        height="168px"
        justifyContent="center"
        shrink="0"
        width="355px"
        position="relative"
        borderRadius="16px 16px 16px 16px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="323px"
          height="134px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
