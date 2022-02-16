import React from "react";
import { useStyles } from "./styles";
import {
  Botondashboard,
  BotonPerfil,
  Botonturnos,
  Chippress,
  ListadoCollection,
  MODALAMPLIFY,
  ListadoNuevoCollection,
  // SearchField,
} from "../../ui-components";
import {
  Alert,
  Button,
  Flex,
  ScrollView,
  SearchField,
} from "@aws-amplify/ui-react";

/**
 * function HomeTemplate
 * @param {function} editar - Función para la redirección a la pagina de edición del usuario
 * @returns {JSX.Element}
 */

const HomeTemplate = ({ editar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <SearchField className={classes.filter} placeholder="Buscar" />
      <div className={classes.chips}>
        <Chippress />
        <Chippress property1="unpress" />
      </div>
      <ListadoNuevoCollection
        overrides={{
          "Collection.ListadoNuevo[0]": {
            overrides: {
              "View.View[0].SwitchField[0]": {
                defaultChecked: false,
                onClick: () => editar(),
              },
            },
          },
        }}
      />

      <div className={classes.footer}>
        <Botonturnos />
        <Botondashboard />
        <BotonPerfil
          onClick={() => editar()}
          overrides={{ variantValues: { estado: "Default" } }}
        />
      </div>
    </div>
  );
};
// `${turn?.unidad_marca}${" "}${turn?.unidad_modelo}`
export default HomeTemplate;
