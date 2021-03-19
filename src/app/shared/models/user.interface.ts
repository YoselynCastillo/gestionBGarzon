  
export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
  Nb_Usuario?: string;
  Nu_Movil?: string;
  Tx_Clave?: string;
  Nu_Intentos?: number;
  Fe_Recuperacion?: Date;
  St_Bloqueo?: boolean;
  St_Activo?: boolean;
}