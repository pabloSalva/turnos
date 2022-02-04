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
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Botonsalir from "./Botonsalir";
import Botonaceptar from "./Botonaceptar";
export default function MODALAMPLIFY(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0].View[0]": {},
        "View.View[0].View[1].View[0].View[0]": {},
        "View.View[0].View[1].View[0]": {},
        "View.View[0].View[1]": {},
        "View.View[0].Text[0]": {},
        "View.View[0]": {},
        "View.Botonsalir[0].Flex[0].Text[0]": {},
        "View.Botonsalir[0].Flex[0]": {},
        "View.Botonsalir[0]": {},
        "View.Botonaceptar[0].Flex[0].Text[0]": {},
        "View.Botonaceptar[0].Flex[0]": {},
        "View.Botonaceptar[0]": {},
        View: {},
      },
      variantValues: { estado: "Default" },
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
      width="280px"
      height="139px"
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
          boxShadow="0px 24px 38px rgba(0, 0, 0, 0.14000000059604645)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="280px"
          height="64.53571319580078px"
          position="absolute"
          top="74.46428680419922px"
          left="0px"
          {...getOverrideProps(overrides, "View.View[0].View[1]")}
        >
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "View.View[0].View[1].View[0]")}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              border="0px SOLID rgba(150.9600019454956,150.9600019454956,150.9600019454956,1)"
              borderRadius="0px 0px 4px 4px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[1].View[0].View[0]"
              )}
            ></View>
          </View>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(0,0,0,0.6000000238418579)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.41000000000000003px"
          width="242px"
          position="absolute"
          top="21px"
          left="24px"
          padding="0px 0px 0px 0px"
          children="¿Confirma la llegada de Volkswagen Golf 2.1 GTI &#xA;Placa AB981DU?"
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
      </View>
      <Botonsalir
        position="absolute"
        top="64.74820143884892%"
        bottom="10.79136690647482%"
        left="31.785714285714285%"
        right="44.285714285714285%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Botonsalir[0]")}
      >
        <Flex
          gap="0"
          position="absolute"
          top="calc(50% - 17px - 0px)"
          left="0%"
          right="0%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding="8px 12px 8px 12px"
          {...getOverrideProps(overrides, "View.Botonsalir[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.41000000000000003px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="SALIR"
            {...getOverrideProps(
              overrides,
              "View.Botonsalir[0].Flex[0].Text[0]"
            )}
          ></Text>
        </Flex>
      </Botonsalir>
      <Botonaceptar
        display="flex"
        gap="0"
        position="absolute"
        top="64.74820143884892%"
        bottom="10.79136690647482%"
        left="61.42857142857143%"
        right="5%"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Botonaceptar[0]")}
      >
        <Flex
          gap="0"
          direction="row"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="34px"
          position="relative"
          borderRadius="4px"
          padding="8px 12px 8px 12px"
          backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
          {...getOverrideProps(overrides, "View.Botonaceptar[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.41000000000000003px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="ACEPTAR"
            {...getOverrideProps(
              overrides,
              "View.Botonaceptar[0].Flex[0].Text[0]"
            )}
          ></Text>
        </Flex>
      </Botonaceptar>
    </View>
  );
}
