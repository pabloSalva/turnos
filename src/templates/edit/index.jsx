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
  Topbar,
  // SearchField,
} from "../../ui-components";
import {
  Alert,
  Button,
  Flex,
  ScrollView,
  SearchField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";

/**
 * function EditTemplate
 * @param {function} guardar - Función que guarda los datos cargados
 * @param {function} cancelar - Función que cancela los cambios y vuelve a la pagina anterior
 * @returns {JSX.Element}
 */

const EditTemplate = ({ guardar, cancelar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Topbar />
      <form className={classes.form}>
        <Text variation="primary">Datos personales</Text>
        <TextField label="Apellido y Nombre" variation="quiet" />
        <TextField label="Whatsapp" variation="quiet" />
        <div className={classes.buttons}>
          <Button
            variation="link"
            loadingText=""
            onClick={cancelar}
            ariaLabel=""
          >
            Cancelar
          </Button>
          <Button
            variation="primary"
            loadingText=""
            onClick={guardar}
            ariaLabel=""
          >
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};
// `${turn?.unidad_marca}${" "}${turn?.unidad_modelo}`
export default EditTemplate;
