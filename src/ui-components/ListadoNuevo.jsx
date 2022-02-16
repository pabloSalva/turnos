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
import { Flex, Icon, SwitchField, Text, View } from "@aws-amplify/ui-react";
export default function ListadoNuevo(props) {
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
        "View.View[0].View[2].Flex[0].Text[0]": {},
        "View.View[0].View[2].Flex[0]": {},
        "View.View[0].View[2].Flex[1].Flex[0].Text[0]": {},
        "View.View[0].View[2].Flex[1].Flex[0]": {},
        "View.View[0].View[2].Flex[1]": {},
        "View.View[0].View[2]": {},
        "View.View[0].View[3].Flex[0].Text[0]": {},
        "View.View[0].View[3].Flex[0]": {},
        "View.View[0].View[3].Flex[1].Flex[0].Text[0]": {},
        "View.View[0].View[3].Flex[1].Flex[0]": {},
        "View.View[0].View[3].Flex[1]": {},
        "View.View[0].View[3]": {},
        "View.View[0].View[4].Icon[0]": {},
        "View.View[0].View[4].Icon[1]": {},
        "View.View[0].View[4]": {},
        "View.View[0].Text[0]": {},
        "View.View[0].SwitchField[0]": {},
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
        <View
          padding="0px 0px 0px 0px"
          width="18px"
          height="18px"
          position="absolute"
          top="88px"
          left="213px"
          {...getOverrideProps(overrides, "View.View[0].View[4]")}
        >
          <Icon
            width="9px"
            height="9px"
            pathData="M2.28819 0.41814C2.12233 0.0205242 1.9477 0.0125645 1.7899 0.00560779C1.66083 -0.00036193 1.51307 4.37664e-06 1.36555 4.37664e-06C1.21791 4.37664e-06 0.977997 0.0598288 0.77511 0.298745C0.572105 0.537662 0 1.11523 0 2.2899C0 3.46469 0.793566 4.59981 0.904177 4.75924C1.01491 4.91844 2.43606 7.40608 4.68676 8.3631C6.55729 9.15844 6.93793 9.00023 7.34394 8.96043C7.74995 8.92064 8.65401 8.38299 8.83856 7.82544C9.02311 7.26801 9.02311 6.79019 8.96775 6.69032C8.91238 6.59082 8.76474 6.53112 8.54328 6.41173C8.32182 6.29233 7.23321 5.71464 7.03021 5.63504C6.8272 5.55545 6.67956 5.51565 6.53192 5.75469C6.38428 5.99348 5.96016 6.53112 5.83097 6.69032C5.70179 6.84987 5.5726 6.86977 5.35114 6.75038C5.12968 6.63062 4.41651 6.37876 3.57047 5.56538C2.9122 4.93259 2.46777 4.15105 2.33859 3.91202C2.2094 3.67323 2.32474 3.54389 2.43583 3.42486C2.53525 3.3179 2.65729 3.14614 2.76802 3.00672C2.87851 2.8673 2.91542 2.76781 2.98924 2.60861C3.06306 2.44917 3.02615 2.30976 2.97078 2.19037C2.91542 2.07097 2.48508 0.890241 2.28819 0.41814L2.28819 0.41814Z"
            viewBox={{ minX: 0, minY: 0, width: 9, height: 9 }}
            color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
            position="absolute"
            top="25%"
            bottom="25%"
            left="25%"
            right="25%"
            {...getOverrideProps(overrides, "View.View[0].View[4].Icon[0]")}
          ></Icon>
          <Icon
            width="18px"
            height="18px"
            pathData="M15.3774 2.61578C13.6852 0.929957 11.435 0.00105537 9.03768 0C4.09751 0 0.077223 4.00106 0.0752372 8.91894C0.0746549 10.491 0.487243 12.0255 1.27146 13.3781L0 18L4.75108 16.7598C6.06011 17.4704 7.53396 17.845 9.03383 17.8455L9.03763 17.8455L9.03768 17.8455C13.977 17.8455 17.9979 13.8438 18 8.92613C18.0008 6.54274 17.0694 4.30172 15.3774 2.61578L15.3774 2.61578ZM9.03768 16.3391L9.03477 16.3391C7.69786 16.3384 6.38685 15.9811 5.24334 15.3056L4.9712 15.145L2.15181 15.8809L2.90454 13.1453L2.72723 12.8649C1.98151 11.6844 1.58782 10.3203 1.5884 8.91953C1.59003 4.83196 4.93154 1.50653 9.04049 1.50653C11.0303 1.50735 12.9004 2.27947 14.3069 3.68067C15.7133 5.08187 16.4873 6.94455 16.4867 8.92558C16.485 13.0133 13.1433 16.3391 9.03768 16.3391Z"
            viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
            color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "View.View[0].View[4].Icon[1]")}
          ></Icon>
        </View>
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
          position="absolute"
          top="68.21705426356588%"
          bottom="17.829457364341085%"
          left="68.61111111111111%"
          right="5.277777777777778%"
          padding="0px 0px 0px 0px"
          children={turn?.celular_clietne}
          {...getOverrideProps(overrides, "View.View[0].Text[0]")}
        ></Text>
        <SwitchField
          position="absolute"
          display="flex"
          top="13px"
          left="280px"
          size="large"
          defaultChecked="true"
          labelPosition="start"
          {...getOverrideProps(overrides, "View.View[0].SwitchField[0]")}
        ></SwitchField>
      </View>
    </View>
  );
}
