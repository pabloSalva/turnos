/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex } from "@aws-amplify/ui-react";
export default function Patente(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="117px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Badge
        display="flex"
        width="117px"
        height="23px"
        shrink="0"
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
        {...getOverrideProps(overrides, "Flex.Badge[0]")}
      ></Badge>
    </Flex>
  );
}
