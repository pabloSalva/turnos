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
import { Icon, View } from "@aws-amplify/ui-react";
export default function Botoncrear(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0].View[0]": {},
        "View.View[0].View[1]": {},
        "View.View[0].View[2].Icon[0]": {},
        "View.View[0].View[2]": {},
        "View.View[0]": {},
        View: {},
      },
      variantValues: { estados: "Default" },
    },
    {
      overrides: {
        "View.View[0].View[0]": {
          backgroundColor:
            "rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
        },
        "View.View[0].View[1]": {},
        "View.View[0].View[2].Icon[0]": {},
        "View.View[0].View[2]": {},
        "View.View[0]": {},
        View: {},
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
      width="56px"
      height="56px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <View
          width="56px"
          height="56px"
          position="absolute"
          top="calc(50% - 28px - 0px)"
          left="calc(50% - 28px - 0px)"
          boxShadow="0px 4px 5px rgba(0, 0, 0, 0.14000000059604645)"
          borderRadius="28px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <View
          width="56px"
          height="56px"
          position="absolute"
          top="calc(50% - 28px - 0px)"
          left="calc(50% - 28px - 0px)"
          borderRadius="28px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0.03999999910593033)"
          {...getOverrideProps(overrides, "View.View[0].View[1]")}
        ></View>
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          left="calc(50% - 12px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].View[2]")}
        >
          <Icon
            width="14px"
            height="14px"
            pathData="M14 8L8 8L8 14L6 14L6 8L0 8L0 6L6 6L6 0L8 0L8 6L14 6L14 8Z"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            color="rgba(255,255,255,1)"
            position="absolute"
            top="20.833333333333336%"
            bottom="20.833333333333336%"
            left="20.833333333333336%"
            right="20.833333333333336%"
            {...getOverrideProps(overrides, "View.View[0].View[2].Icon[0]")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
