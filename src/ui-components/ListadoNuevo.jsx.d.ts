/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Turn } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type ListadoNuevoProps = React.PropsWithChildren<Partial<ViewProps> & {
    turn?: Turn;
} & {
    property1?: "Default";
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ListadoNuevo(props: ListadoNuevoProps): React.ReactElement;
