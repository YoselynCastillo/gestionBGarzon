
export interface Audit {
  Co_Auditoria?: string;
  Nb_Tabla?: string;
  Co_Fila?: number;
  Co_Tipo_Operacion?: string;
  Tx_Sentencia?: string;
  Tx_Error?: string;
  Co_Usuario?: string;
  Co_MAC?: string;
  Co_IP?: string;
  Fe_ins?: Date;
  St_Error?: boolean
}