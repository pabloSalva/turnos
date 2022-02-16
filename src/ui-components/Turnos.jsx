/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import UnidadDescripcion from "./UnidadDescripcion";
import { Flex, SwitchField, Text, View } from "@aws-amplify/ui-react";
import Patente from "./Patente";
import PhoneNumber from "./PhoneNumber";
import ClienteDescripcion from "./ClienteDescripcion";
export default function Turnos(props) {
  const { turno, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="355px"
      height="170px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <UnidadDescripcion
        position="absolute"
        display={turno?.unidad}
        top="49px"
        left="18px"
        {...getOverrideProps(overrides, "View.UnidadDescripcion[0]")}
      ></UnidadDescripcion>
      <SwitchField
        gap="8px"
        position="absolute"
        display="flex"
        top="13.529411764705882%"
        bottom="74.70588235294117%"
        left="83.09859154929578%"
        right="6.760563380281689%"
        size="default"
        defaultChecked="true"
        labelPosition="start"
        {...getOverrideProps(overrides, "View.SwitchField[0]")}
      ></SwitchField>
      <Patente
        position="absolute"
        display="flex"
        top="99px"
        left="134px"
        {...getOverrideProps(overrides, "View.Patente[0]")}
      ></Patente>
      <Flex
        gap="0"
        position="absolute"
        top="57.05882352941176%"
        bottom="28.823529411764703%"
        left="6.760563380281689%"
        right="77.46478873239437%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Patente:"
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <PhoneNumber
        position="absolute"
        display="flex"
        top="129px"
        left="24px"
        {...getOverrideProps(overrides, "View.PhoneNumber[0]")}
      ></PhoneNumber>
      <ClienteDescripcion
        position="absolute"
        display={turno?.cliente}
        top="13px"
        left="18px"
        {...getOverrideProps(overrides, "View.ClienteDescripcion[0]")}
      ></ClienteDescripcion>
    </View>
  );
}
