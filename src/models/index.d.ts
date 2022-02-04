import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TurnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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