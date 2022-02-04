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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchField(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[1]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[0]": {},
        "Flex.Flex[0]": {},
        Flex: {},
      },
      variantValues: { estado: "Default" },
    },
    {
      overrides: {
        "Flex.Flex[0].Flex[0].Flex[0].Text[0]": {
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[1]": {
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
        },
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0]": {},
        "Flex.Flex[0].Flex[0].Flex[0].Flex[0]": {
          border:
            "1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)",
        },
        "Flex.Flex[0].Flex[0].Flex[0]": {},
        "Flex.Flex[0].Flex[0]": {},
        "Flex.Flex[0]": {
          width: "302px",
          border:
            "1px SOLID rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
        },
        Flex: {},
      },
      variantValues: { estado: "Press" },
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
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="4px"
        direction="column"
        width="300px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Flex
            gap="10px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="0px 0px 0px 15px"
            backgroundColor="rgba(233.00000131130219,235.0000011920929,236.00000113248825,1)"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="206px"
              grow="1"
              basis="206px"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Placeholder"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <Flex
              gap="10px"
              direction="row"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              height="44px"
              position="relative"
              border="1px SOLID rgba(239.00000095367432,240.00000089406967,240.00000089406967,1)"
              borderRadius="4px"
              padding="11px 23px 11px 23px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Flex[0]"
              )}
            >
              <View
                width="20px"
                height="20px"
                shrink="0"
                overflow="hidden"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0]"
                )}
              >
                <Icon
                  width="20px"
                  height="20px"
                  pathData=""
                  viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[0]"
                  )}
                ></Icon>
                <Icon
                  width="14.57501220703125px"
                  height="14.574996948242188px"
                  pathData="M10.4167 9.16667L9.75833 9.16667L9.525 8.94167C10.3417 7.99167 10.8333 6.75833 10.8333 5.41667C10.8333 2.425 8.40833 0 5.41667 0C2.425 0 0 2.425 0 5.41667C0 8.40833 2.425 10.8333 5.41667 10.8333C6.75833 10.8333 7.99167 10.3417 8.94167 9.525L9.16667 9.75833L9.16667 10.4167L13.3333 14.575L14.575 13.3333L10.4167 9.16667L10.4167 9.16667ZM5.41667 9.16667C3.34167 9.16667 1.66667 7.49167 1.66667 5.41667C1.66667 3.34167 3.34167 1.66667 5.41667 1.66667C7.49167 1.66667 9.16667 3.34167 9.16667 5.41667C9.16667 7.49167 7.49167 9.16667 5.41667 9.16667Z"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 14.57501220703125,
                    height: 14.574996948242188,
                  }}
                  color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
                  position="absolute"
                  top="12.5%"
                  bottom="14.624996185302736%"
                  left="12.5%"
                  right="14.624996185302736%"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[0].Flex[0].Flex[0].View[0].Icon[1]"
                  )}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
