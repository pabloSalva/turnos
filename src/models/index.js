// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Turn, Turno, Unidad, Cliente } = initSchema(schema);

export {
  Turn,
  Turno,
  Unidad,
  Cliente
};