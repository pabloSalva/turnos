/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Topbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="360px"
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
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(72.00000330805779,173.00000488758087,194.00000363588333,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
      </View>
      <View
        position="absolute"
        top="28.57142857142857%"
        bottom="28.57142857142857%"
        left="13.333333333333334%"
        right="61.66666666666667%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.010000000000000009px"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          children="Editar perfil"
          {...getOverrideProps(overrides, "View.View[1].Text[0]")}
        ></Text>
      </View>
      <View
        position="absolute"
        top="28.57142857142857%"
        bottom="28.57142857142857%"
        left="2.2222222222222223%"
        right="91.11111111111111%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.View[2]")}
      >
        <Icon
          width="7.40997314453125px"
          height="12px"
          pathData="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
          viewBox={{ minX: 0, minY: 0, width: 7.40997314453125, height: 12 }}
          color="rgba(255,255,255,1)"
          position="absolute"
          top="25%"
          bottom="25%"
          left="33.33333333333333%"
          right="35.79166730244954%"
          {...getOverrideProps(overrides, "View.View[2].Icon[0]")}
        ></Icon>
      </View>
    </View>
  );
}
