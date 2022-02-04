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
import { Text, View } from "@aws-amplify/ui-react";
export default function Switchfieldon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0].Text[0]": {},
        "View.View[0].View[0].View[0]": {},
        "View.View[0].View[0].View[1]": {},
        "View.View[0].View[0]": {},
        "View.View[0]": {},
        View: {},
      },
      variantValues: { estado: "switchfieldoff" },
    },
    {
      overrides: {
        "View.View[0].Text[0]": { left: "0%", children: "On" },
        "View.View[0].View[0].View[0]": {
          backgroundColor:
            "rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
        },
        "View.View[0].View[0].View[1]": { left: "50%", right: "6.25%" },
        "View.View[0].View[0]": {},
        "View.View[0]": {},
        View: {},
      },
      variantValues: { estado: "switchfieldon" },
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
      width="59px"
      height="20px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="59px"
        height="20px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          lineHeight="20px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="0%"
          bottom="0%"
          left="-3.389830508474576%"
          right="67.79661016949152%"
          padding="0px 0px 0px 0px"
          children="Off"
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          position="absolute"
          top="5%"
          bottom="5%"
          left="45.76271186440678%"
          right="0%"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            borderRadius="16px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(214.00000244379044,214.00000244379044,214.00000244379044,1)"
            {...getOverrideProps(overrides, "View.View[0].View[0].View[0]")}
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
            {...getOverrideProps(overrides, "View.View[0].View[0].View[1]")}
          ></View>
        </View>
      </View>
    </View>
  );
}
