/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Flex,
  Heading,
  SwitchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Turno(props) {
  const { turno, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="355px"
      height="168px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Flex
        gap="0"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        height="168px"
        justifyContent="center"
        borderRadius="16px 16px 16px 16px"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.Flex[0]")}
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
          {...getOverrideProps(overrides, "View.Flex[0].Flex[0]")}
        ></Flex>
      </Flex>
      <Flex
        gap="0"
        position="absolute"
        top="76.19047619047619%"
        bottom="9.523809523809524%"
        left="4.507042253521127%"
        right="68.73239436619718%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Flex[1]")}
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
          children={turno?.telefono}
          {...getOverrideProps(overrides, "View.Flex[1].Text[0]")}
        ></Text>
      </Flex>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="30.952380952380953%"
        bottom="54.761904761904766%"
        left="4.507042253521127%"
        right="72.95774647887325%"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Heading[0]")}
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
          children={turno?.vehiculo}
          {...getOverrideProps(overrides, "View.Heading[0].Text[0]")}
        ></Text>
      </Heading>
      <Flex
        gap="0"
        position="absolute"
        top="54.166666666666664%"
        bottom="31.547619047619047%"
        left="4.507042253521127%"
        right="79.71830985915493%"
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
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="54.166666666666664%"
        bottom="30.952380952380953%"
        left="27.323943661971832%"
        right="35.2112676056338%"
        direction="row"
        width="133px"
        height="25px"
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
          children={turno?.patente}
          {...getOverrideProps(overrides, "View.Badge[0].Text[0]")}
        ></Text>
      </Badge>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="10.119047619047619%"
        bottom="75.59523809523809%"
        left="4.225352112676056%"
        right="73.23943661971832%"
        direction="row"
        width="80px"
        height="24px"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Heading[1]")}
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
          children={`${turno?.nombre}${turno?.apellido}`}
          {...getOverrideProps(overrides, "View.Heading[1].Text[0]")}
        ></Text>
      </Heading>
      <SwitchField
        gap="8px"
        position="absolute"
        display="flex"
        top="11.30952380952381%"
        bottom="76.78571428571429%"
        left="81.12676056338029%"
        right="8.732394366197182%"
        size="default"
        defaultChecked="true"
        labelPosition="start"
        {...getOverrideProps(overrides, "View.SwitchField[0]")}
      ></SwitchField>
    </View>
  );
}
