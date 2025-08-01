import type { tipoPermisos } from "./typePermisos";

type Permiso = {
  codigo: string;
  nivel: number;
  descripcion: string;
};

type Rol = {
  codigo: string;
  nombre: string;
  permisos: Permiso[];
};

export type empleado = {
  id: string;
  codigo: string;
  nombre: string;
  email: string;
  password: string;
  photo: string;
  rol: Rol;
  telefono: string;
  status: string;
  startDate: string;
  permisosExtra: tipoPermisos[];
};
