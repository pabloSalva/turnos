/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, View } from "@aws-amplify/ui-react";
import Turnos from "./Turnos";
export default function Frame1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="355px"
      height="562px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Badge
        color="rgba(54.00000058114529,94.0000019967556,61.00000016391277,1)"
        position="absolute"
        backgroundColor="rgba(214.00000244379044,245.00000059604645,219.0000021457672,1)"
        display="flex"
        top="92px"
        left="15px"
        width="122px"
        height="24px"
        fontFamily="Inter"
        fontWeight="700"
        fontSize="16px"
        textAlign="left"
        lineHeight="20px"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.49px"
        size="default"
        variation="success"
        children="Badge"
        {...getOverrideProps(overrides, "View.Badge[0]")}
      ></Badge>
      <Badge
        position="absolute"
        display="flex"
        top="92px"
        left="224px"
        width="108px"
        height="24px"
        fontFamily="Inter"
        fontWeight="700"
        fontSize="16px"
        color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        textAlign="left"
        lineHeight="20px"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.49px"
        size="default"
        variation="default"
        children="Badge"
        {...getOverrideProps(overrides, "View.Badge[1]")}
      ></Badge>
      <Turnos
        position="absolute"
        top="141px"
        left="0px"
        {...getOverrideProps(overrides, "View.Turnos[0]")}
      ></Turnos>
    </View>
  );
}
