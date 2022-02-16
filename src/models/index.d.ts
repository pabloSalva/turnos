import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Unidad {
  readonly patente?: string;
  readonly chasis?: string;
  readonly vin?: string;
  readonly descripcion?: string;
  readonly marca?: string;
  readonly modelo?: string;
  readonly modelo_codigo_fabrica?: string;
  readonly version?: string;
  readonly color?: string;
  readonly fecha_alta?: string;
  readonly fecha_patentamiento?: string;
  readonly fecha_vencimiento_garantia?: string;
  readonly tipo?: string;
  constructor(init: ModelInit<Unidad>);
}

export declare class Cliente {
  readonly descripcion?: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly fecha_alta?: string;
  readonly fecha_ultimo_movimiento?: string;
  readonly email?: string;
  readonly telefono?: string;
  readonly celular?: string;
  readonly direccion?: string;
  readonly es_persona?: boolean;
  readonly sexo?: string;
  readonly dni?: number;
  readonly cuit?: string;
  readonly lugar_de_trabajo?: string;
  readonly ocupacion?: string;
  readonly fecha_nacimiento?: string;
  readonly horario_contacto?: string;
  constructor(init: ModelInit<Cliente>);
}

type TurnMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TurnoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Turn {
  readonly id: string;
  readonly fecha_turno?: string;
  readonly nombre_cliente?: string;
  readonly apellido_cliente?: string;
  readonly unidad_marca?: string;
  readonly unidad_modelo?: string;
  readonly unidad_patente?: string;
  readonly telefono_cliente?: string;
  readonly celular_clietne?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Turn, TurnMetaData>);
  static copyOf(source: Turn, mutator: (draft: MutableModel<Turn, TurnMetaData>) => MutableModel<Turn, TurnMetaData> | void): Turn;
}

export declare class Turno {
  readonly id: string;
  readonly fecha_turno?: string;
  readonly cliente?: Cliente;
  readonly unidad?: Unidad;
  readonly fecha_ingreso?: string;
  readonly fecha_salida?: string;
  readonly fecha_salida_estimada?: string;
  readonly descripcion?: string;
  readonly oportunidad?: string;
  readonly asesor?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Turno, TurnoMetaData>);
  static copyOf(source: Turno, mutator: (draft: MutableModel<Turno, TurnoMetaData>) => MutableModel<Turno, TurnoMetaData> | void): Turno;
}