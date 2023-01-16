export interface Solicitation {

  id: string,
  name_client: string
  document_client: string
  contact_client: number,
  address_client: string,
  payment_method: number,
  observations: string
  pizzas: string[]
}

export interface QueryParamsFindSolicitation {
  id?: string
}


export interface BodyParamsCreateSolicitation {
  name_client: string
  document_client: string
  contact_client: number,
  address_client: string,
  payment_method: number,
  observations: string
  pizzas: string[]
}