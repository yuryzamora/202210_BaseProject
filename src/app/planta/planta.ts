
enum Tipo {
  interior = 'Interior',
  exterior = 'Exterior'
}

export class Planta {
  id: number;
  nombreComun: string;
  nombreCientifico: string;
  tipo: Tipo;
  alturaMaxima: number;
  clima: string;
  sustratoSiembra: string;

  constructor(
    id: number,
    nombreComun: string,
    nombreCientifico: string,
    tipo: Tipo,
    alturaMaxima: number,
    clima: string,
    sustratoSiembra: string
  ) {
    this.id = id;
    this.nombreComun = nombreComun;
    this.nombreCientifico = nombreCientifico;
    this.tipo = tipo;
    this.alturaMaxima = alturaMaxima;
    this.clima = clima;
    this.sustratoSiembra = sustratoSiembra;
  }
}
