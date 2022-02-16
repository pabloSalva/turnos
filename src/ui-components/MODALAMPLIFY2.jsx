/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MODALAMPLIFY2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
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
        width="280px"
        height="139px"
        position="absolute"
        top="0px"
        left="0px"
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
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
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
            {...getOverrideProps(overrides, "View.View[0].View[0].View[0]")}
          ></View>
          <View
            padding="0px 0px 0px 0px"
            width="280px"
            height="64.53571319580078px"
            position="absolute"
            top="74.46428680419922px"
            left="0px"
            {...getOverrideProps(overrides, "View.View[0].View[0].View[1]")}
          >
            <View
              padding="0px 0px 0px 0px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[0].View[1].View[0]"
              )}
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
                  "View.View[0].View[0].View[1].View[0].View[0]"
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
            {...getOverrideProps(overrides, "View.View[0].View[0].Text[0]")}
          ></Text>
          <Flex
            gap="0"
            position="absolute"
            top="90px"
            left="172px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
            padding="8px 12px 8px 12px"
            backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
            {...getOverrideProps(overrides, "View.View[0].View[0].Flex[0]")}
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
                "View.View[0].View[0].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            position="absolute"
            top="90px"
            left="89px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="8px 12px 8px 12px"
            {...getOverrideProps(overrides, "View.View[0].View[0].Flex[1]")}
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
                "View.View[0].View[0].Flex[1].Text[0]"
              )}
            ></Text>
          </Flex>
        </View>
      </View>
    </View>
  );
}
