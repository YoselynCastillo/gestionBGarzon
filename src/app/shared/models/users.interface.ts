
export interface Users {
  uid: string;
  email: string;
  password?: string;
  Nb_Usuario?: string;
  Nu_Movil: string;
  Tx_Clave: string;
  Nu_Intentos: number;
  St_Bloqueo: string;
  St_Activo: boolean;
}