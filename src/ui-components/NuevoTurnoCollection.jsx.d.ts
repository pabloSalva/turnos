/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Turn } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type NuevoTurnoCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    turno?: Turn;
    items?: any[];
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function NuevoTurnoCollection(props: NuevoTurnoCollectionProps): React.ReactElement;
