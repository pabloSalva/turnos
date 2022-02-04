import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TurnMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TurnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Turn {
  readonly id: string;
  readonly date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Turn, TurnMetaData>);
  static copyOf(source: Turn, mutator: (draft: MutableModel<Turn, TurnMetaData>) => MutableModel<Turn, TurnMetaData> | void): Turn;
}

export declare class Turno {
  readonly id: string;
  readonly fecha_turno?: string;
  readonly nombre?: string;
  readonly apellido?: string;
  readonly vehiculo?: string;
  readonly patente?: string;
  readonly telefono?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Turno, TurnoMetaData>);
  static copyOf(source: Turno, mutator: (draft: MutableModel<Turno, TurnoMetaData>) => MutableModel<Turno, TurnoMetaData> | void): Turno;
}

export declare class Customer {
  readonly id: string;
  readonly name?: string;
  readonly phone_number?: string;
  readonly Cars?: (Car | null)[];
  readonly en_turno?: boolean;
  readonly last_name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Car {
  readonly id: string;
  readonly model?: string;
  readonly brand?: string;
  readonly patent?: string;
  readonly customerID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Car, CarMetaData>);
  static copyOf(source: Car, mutator: (draft: MutableModel<Car, CarMetaData>) => MutableModel<Car, CarMetaData> | void): Car;
}