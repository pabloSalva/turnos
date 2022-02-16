/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, SwitchField, Text, View } from "@aws-amplify/ui-react";
import PhoneNumber from "./PhoneNumber";
export default function NuevoTurno(props) {
  const { turno, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="355px"
      height="157px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Flex
        gap="0"
        position="absolute"
        top="16px"
        left="19px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children={`${turno?.nombre_cliente}${", "}${turno?.apellido_cliente}`}
          {...getOverrideProps(overrides, "View.Flex[0].Text[0]")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        position="absolute"
        top="52px"
        left="19px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[1]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children={`${turno?.unidad_marca}${" "}${turno?.unidad_modelo}`}
          {...getOverrideProps(overrides, "View.Flex[1].Text[0]")}
        ></Text>
      </Flex>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="88px"
        left="214px"
        direction="row"
        width="106px"
        height="21px"
        justifyContent="center"
        alignItems="center"
        borderRadius="99px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(239.00000095367432,240.00000089406967,240.00000089406967,1)"
        {...getOverrideProps(overrides, "View.Badge[0]")}
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
          children={turno?.unidad_patente}
          {...getOverrideProps(overrides, "View.Badge[0].Text[0]")}
        ></Text>
      </Badge>
      <Flex
        gap="0"
        position="absolute"
        top="55.4140127388535%"
        bottom="29.29936305732484%"
        left="5.352112676056338%"
        right="78.87323943661971%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[2]")}
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
          {...getOverrideProps(overrides, "View.Flex[2].Text[0]")}
        ></Text>
      </Flex>
      <PhoneNumber
        position="absolute"
        display={turno?.telefono_cliente}
        top="122px"
        left="19px"
        {...getOverrideProps(overrides, "View.PhoneNumber[0]")}
      ></PhoneNumber>
      <SwitchField
        gap="8px"
        position="absolute"
        display="flex"
        top="11.464968152866243%"
        bottom="75.79617834394905%"
        left="67.04225352112675%"
        right="22.816901408450704%"
        size="default"
        defaultChecked="true"
        labelPosition="start"
        {...getOverrideProps(overrides, "View.SwitchField[0]")}
      ></SwitchField>
    </View>
  );
}
