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
import Switchfieldon from "./Switchfieldon";
import Whatsap from "./Whatsap";
export default function Listado(props) {
  const { turn, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "View.View[0].View[0]": {},
        "View.View[0].Flex[0].Text[0]": {},
        "View.View[0].Flex[0]": {},
        "View.View[0].Flex[1].Text[0]": {},
        "View.View[0].Flex[1]": {},
        "View.View[0].View[1]": {},
        "View.View[0].Switchfieldon[0].Flex[0].View[0]": {},
        "View.View[0].Switchfieldon[0].Flex[0].View[1]": {},
        "View.View[0].Switchfieldon[0].Flex[0]": {},
        "View.View[0].Switchfieldon[0]": {},
        "View.View[0].View[2].Flex[0].Text[0]": {},
        "View.View[0].View[2].Flex[0]": {},
        "View.View[0].View[2].Flex[1].Flex[0].Text[0]": {},
        "View.View[0].View[2].Flex[1].Flex[0]": {},
        "View.View[0].View[2].Flex[1]": {},
        "View.View[0].View[2]": {},
        "View.View[0].Whatsap[0]": {},
        "View.View[0].Flex[2].Text[0]": {},
        "View.View[0].Flex[2]": {},
        "View.View[0].Switchfieldon[1].Flex[0].View[0]": {},
        "View.View[0].Switchfieldon[1].Flex[0].View[1]": {},
        "View.View[0].Switchfieldon[1].Flex[0]": {},
        "View.View[0].Switchfieldon[1]": {},
        "View.View[0].View[3].Flex[0].Text[0]": {},
        "View.View[0].View[3].Flex[0]": {},
        "View.View[0].View[3].Flex[1].Flex[0].Text[0]": {},
        "View.View[0].View[3].Flex[1].Flex[0]": {},
        "View.View[0].View[3].Flex[1]": {},
        "View.View[0].View[3]": {},
        "View.View[0].Whatsap[1]": {},
        "View.View[0]": {},
        View: {},
      },
      variantValues: { property1: "Default" },
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
      width="360px"
      height="129px"
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
          boxShadow="2px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "View.View[0].View[0]")}
        ></View>
        <Flex
          gap="10px"
          position="absolute"
          top="0px"
          left="0px"
          direction="row"
          width="280px"
          alignItems="center"
          padding="16px 0px 8px 24px"
          {...getOverrideProps(overrides, "View.View[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.41000000000000003px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={`${turn?.unidad_marca}${" "}${turn?.unidad_modelo}`}
            {...getOverrideProps(overrides, "View.View[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="42px"
          left="0px"
          direction="row"
          width="280px"
          alignItems="center"
          padding="8px 0px 8px 24px"
          {...getOverrideProps(overrides, "View.View[0].Flex[1]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.41000000000000003px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={`${turn?.nombre_cliente}${" "}${turn?.apellido_cliente}`}
            {...getOverrideProps(overrides, "View.View[0].Flex[1].Text[0]")}
          ></Text>
        </Flex>
        <View
          position="absolute"
          top="13.178294573643413%"
          bottom="74.4186046511628%"
          left="92.22222222222223%"
          right="3.3333333333333335%"
          overflow="hidden"
          transformOrigin="top left"
          transform="rotate(-1.5902773407317584e-15deg)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.View[0].View[1]")}
        ></View>
        <Switchfieldon
          display="flex"
          gap="10px"
          position="absolute"
          top="0px"
          left="280px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="16px 24px 16px 24px"
          {...getOverrideProps(overrides, "View.View[0].Switchfieldon[0]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="32px"
            height="18px"
            shrink="0"
            position="relative"
            {...getOverrideProps(
              overrides,
              "View.View[0].Switchfieldon[0].Flex[0]"
            )}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              borderRadius="16px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(0,0,0,0.4000000059604645)"
              {...getOverrideProps(
                overrides,
                "View.View[0].Switchfieldon[0].Flex[0].View[0]"
              )}
            ></View>
            <View
              position="absolute"
              top="11.11111111111111%"
              bottom="11.11111111111111%"
              left="9.375%"
              right="46.875%"
              borderRadius="16px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(
                overrides,
                "View.View[0].Switchfieldon[0].Flex[0].View[1]"
              )}
            ></View>
          </Flex>
        </Switchfieldon>
        <View
          padding="0px 0px 0px 0px"
          width="188px"
          height="42px"
          position="absolute"
          top="76px"
          left="0px"
          {...getOverrideProps(overrides, "View.View[0].View[2]")}
        >
          <Flex
            gap="10px"
            position="absolute"
            top="4px"
            left="0px"
            direction="row"
            alignItems="flex-start"
            padding="8px 8px 8px 24px"
            {...getOverrideProps(overrides, "View.View[0].View[2].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="13px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.37px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Patente:"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[2].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            position="absolute"
            top="0px"
            left="87px"
            direction="column"
            padding="8px 8px 8px 8px"
            {...getOverrideProps(overrides, "View.View[0].View[2].Flex[1]")}
          >
            <Flex
              gap="10px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              width="85px"
              position="relative"
              borderRadius="99px"
              padding="4px 8px 4px 8px"
              backgroundColor="rgba(184.00000423192978,206.0000029206276,249.00000035762787,1)"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[2].Flex[1].Flex[0]"
              )}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,34.00000177323818,102.00000151991844,1)"
                lineHeight="18px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.41000000000000003px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                children="AB981DU"
                {...getOverrideProps(
                  overrides,
                  "View.View[0].View[2].Flex[1].Flex[0].Text[0]"
                )}
              ></Text>
            </Flex>
          </Flex>
        </View>
        <Whatsap
          position="absolute"
          top="80px"
          left="188px"
          property1="cargado"
          {...getOverrideProps(overrides, "View.View[0].Whatsap[0]")}
        ></Whatsap>
        <Flex
          gap="10px"
          position="absolute"
          top="42px"
          left="0px"
          direction="row"
          width="280px"
          alignItems="center"
          padding="8px 0px 8px 24px"
          {...getOverrideProps(overrides, "View.View[0].Flex[2]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            letterSpacing="0.41000000000000003px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Alejandro Perez Romero"
            {...getOverrideProps(overrides, "View.View[0].Flex[2].Text[0]")}
          ></Text>
        </Flex>
        <Switchfieldon
          display="flex"
          gap="10px"
          position="absolute"
          top="0px"
          left="280px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="16px 24px 16px 24px"
          {...getOverrideProps(overrides, "View.View[0].Switchfieldon[1]")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="32px"
            height="18px"
            shrink="0"
            position="relative"
            {...getOverrideProps(
              overrides,
              "View.View[0].Switchfieldon[1].Flex[0]"
            )}
          >
            <View
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              borderRadius="16px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(0,0,0,0.4000000059604645)"
              {...getOverrideProps(
                overrides,
                "View.View[0].Switchfieldon[1].Flex[0].View[0]"
              )}
            ></View>
            <View
              position="absolute"
              top="11.11111111111111%"
              bottom="11.11111111111111%"
              left="9.375%"
              right="46.875%"
              borderRadius="16px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(
                overrides,
                "View.View[0].Switchfieldon[1].Flex[0].View[1]"
              )}
            ></View>
          </Flex>
        </Switchfieldon>
        <View
          padding="0px 0px 0px 0px"
          width="188px"
          height="42px"
          position="absolute"
          top="76px"
          left="0px"
          {...getOverrideProps(overrides, "View.View[0].View[3]")}
        >
          <Flex
            gap="10px"
            position="absolute"
            top="4px"
            left="0px"
            direction="row"
            alignItems="flex-start"
            padding="8px 8px 8px 24px"
            {...getOverrideProps(overrides, "View.View[0].View[3].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="13px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="18px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.37px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Patente:"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[3].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            position="absolute"
            top="0px"
            left="87px"
            direction="column"
            padding="8px 8px 8px 8px"
            {...getOverrideProps(overrides, "View.View[0].View[3].Flex[1]")}
          >
            <Flex
              gap="10px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              width="85px"
              position="relative"
              borderRadius="99px"
              padding="4px 8px 4px 8px"
              backgroundColor="rgba(184.00000423192978,206.0000029206276,249.00000035762787,1)"
              {...getOverrideProps(
                overrides,
                "View.View[0].View[3].Flex[1].Flex[0]"
              )}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="700"
                color="rgba(0,34.00000177323818,102.00000151991844,1)"
                lineHeight="18px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.41000000000000003px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                children={turn?.unidad_patente}
                {...getOverrideProps(
                  overrides,
                  "View.View[0].View[3].Flex[1].Flex[0].Text[0]"
                )}
              ></Text>
            </Flex>
          </Flex>
        </View>
        <Whatsap
          position="absolute"
          top="80px"
          left="188px"
          property1="cargado"
          {...getOverrideProps(overrides, "View.View[0].Whatsap[1]")}
        ></Whatsap>
      </View>
    </View>
  );
}
