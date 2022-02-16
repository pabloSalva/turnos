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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Botonturnos(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.Text[0]": {},
        "View.View[0].Icon[0]": {},
        "View.View[0].Icon[1]": {},
        "View.View[0]": {},
        "View.View[1]": {},
        View: {},
      },
      variantValues: { estado: "Default" },
    },
    {
      overrides: {
        "View.Text[0]": {},
        "View.View[0].Icon[0]": {},
        "View.View[0].Icon[1]": {},
        "View.View[0]": {},
        "View.View[1]": {},
        View: {
          backgroundColor:
            "rgba(177.0000046491623,204.00000303983688,235.0000011920929,1)",
        },
      },
      variantValues: { estado: "Press" },
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
      width="120px"
      height="55px"
      position="relative"
      boxShadow="0px -1px 2px rgba(0, 0, 0, 0.10000000149011612)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        lineHeight="16px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.25000000596046446px"
        position="absolute"
        top="58.18181818181818%"
        bottom="12.727272727272727%"
        left="34.166666666666664%"
        right="33.33333333333333%"
        padding="0px 0px 0px 0px"
        children="Turnos"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <View
        position="absolute"
        top="14.545454545454545%"
        bottom="41.81818181818181%"
        left="40%"
        right="40%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[0]")}
      >
        <Icon
          width="24px"
          height="24px"
          pathData=""
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "View.View[0].Icon[0]")}
        ></Icon>
        <Icon
          width="20px"
          height="17px"
          pathData="M10 2.69L15 7.19L15 15L13 15L13 9L7 9L7 15L5 15L5 7.19L10 2.69L10 2.69ZM10 0L0 9L3 9L3 17L9 17L9 11L11 11L11 17L17 17L17 9L20 9L10 0Z"
          viewBox={{ minX: 0, minY: 0, width: 20, height: 17 }}
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          position="absolute"
          top="12.5%"
          bottom="16.666666666666664%"
          left="8.333333333333332%"
          right="8.333333333333332%"
          {...getOverrideProps(overrides, "View.View[0].Icon[1]")}
        ></Icon>
      </View>
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
    </View>
  );
}
