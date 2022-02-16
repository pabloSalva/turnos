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
export default function BotonPerfil(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0]": {},
        "View.Icon[0]": {},
        "View.Text[0]": {},
        "View.Icon[1]": {},
        View: {},
      },
      variantValues: { estado: "Default" },
    },
    {
      overrides: {
        "View.View[0]": {},
        "View.Icon[0]": {},
        "View.Text[0]": {},
        "View.Icon[1]": {},
        View: {},
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
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(177.0000046491623,204.00000303983688,235.0000011920929,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Icon
        width="16px"
        height="16px"
        pathData="M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 12C10.7 12 13.8 13.29 14 14L2 14C2.23 13.28 5.31 12 8 12ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 10C5.33 10 0 11.34 0 14L0 16L16 16L16 14C16 11.34 10.67 10 8 10Z"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        position="absolute"
        top="21.818181818181817%"
        bottom="49.090916026722304%"
        left="44.166666666666664%"
        right="42.50000317891438%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
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
        left="37.5%"
        right="36.666666666666664%"
        padding="0px 0px 0px 0px"
        children="Perfil"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Icon
        width="24px"
        height="24px"
        pathData=""
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        position="absolute"
        top="14.545454545454545%"
        bottom="41.81818181818181%"
        left="40%"
        right="40%"
        {...getOverrideProps(overrides, "View.Icon[1]")}
      ></Icon>
    </View>
  );
}
