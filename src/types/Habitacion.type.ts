export type CategoriaHabitacion =
  | 'Habitacion Simple'
  | 'Doble Habitacion'
  | 'Suite'
  | 'Deluxe'
  | 'Familiar'
  | 'Presidencial';

export type IHabitacion = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  oferta: number;
  categoria: CategoriaHabitacion;
  servicios: string[];
  imagenes: string[];
  piso: string;
  codigo: string;
}
