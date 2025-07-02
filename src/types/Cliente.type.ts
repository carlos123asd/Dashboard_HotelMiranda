export type MetodoPago = 
  |'Tarjeta'
  |'Metalico'


export type ICliente = {
  id: string;
  nombre: string;
  email: string;
  direccion: string;
  password: string;
  metodoPago: MetodoPago;
}
