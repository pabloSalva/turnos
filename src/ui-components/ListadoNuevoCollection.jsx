/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Turn } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ListadoNuevo from "./ListadoNuevo";
import { Collection } from "@aws-amplify/ui-react";
export default function ListadoNuevoCollection(props) {
  const { turn, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Turn,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <ListadoNuevo
          turn={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.ListadoNuevo[0]")}
        ></ListadoNuevo>
      )}
    </Collection>
  );
}
