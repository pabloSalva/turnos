/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Filtro(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="335px"
      height="44px"
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
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.10000000149011612)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Flex
        gap="10px"
        position="absolute"
        top="calc(50% - 14px - 0px)"
        left="35.52238805970149%"
        right="34.92537313432836%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="99px"
        padding="4px 8px 4px 8px"
        backgroundColor="rgba(239.00000095367432,240.00000089406967,240.00000089406967,1)"
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
          children="Recibidos"
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="calc(50% - 14px - 0px)"
        left="2.9850746268656714%"
        right="67.46268656716417%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="99px"
        padding="4px 8px 4px 8px"
        backgroundColor="rgba(214.00000244379044,245.00000059604645,219.0000021457672,1)"
        {...getOverrideProps(overrides, "View.Flex[1]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(54.00000058114529,94.0000019967556,61.00000016391277,1)"
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
          {...getOverrideProps(overrides, "View.Flex[1].Text[0]")}
        ></Text>
      </Flex>
    </View>
  );
}
