export interface Enlace{
    href    : string,
    title   : string,
    target? : boolean
}
export interface Datos{
    dato         : string,
    imagen       : string,
    nombre       : string,
    tipos?       : Array<string>,
    nota?        : number,
    pagos?       : Pagos,
    descripcion? : string,
    oferta?      : number,
    ciudad?      : string,
    pais?        : string,
    url          : string,
  }

  export interface Pagos{
    yums : boolean,
    pay  : boolean
  }

  export interface Ofertas{
    dato : string,
    imagen : string,
    nombre : string, 
    url : string,
    tipos :  Array<string>,
    nota : number,
    pagos : Pagos,
    descripcion : string,
    ciudad : string, 
    oferta : number
  }

  export interface Ciudades{
    dato : string,
    imagen : string,
    nombre : string,
    url : string,
    pais : string
  }

  export interface Restaurante{
    dato : string,
    imagen : string,
    nombre : string,
    url : string,
    tipos : Array<string>,
    nota : string, 
    pagos : Pagos,
    descripcion : string,
    ciudad : string,
    oferta : number,
    pais? : string
  }