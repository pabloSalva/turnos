// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Turn, Turno, Customer, Car } = initSchema(schema);

export {
  Turn,
  Turno,
  Customer,
  Car
};