// eslint-disable
// this is an auto generated file. This will be overwritten

export const getAsitente = `query GetAsitente($id: ID!, $NombreGafete: String!) {
  getAsitente(id: $id, NombreGafete: $NombreGafete) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const listAsitentes = `query ListAsitentes(
  $filter: TableAsitenteFilterInput
  $limit: Int
  $nextToken: String
) {
  listAsitentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      NombreGafete
      NombreCertificado
      Clases
    }
    nextToken
  }
}
`;
export const getClase = `query GetClase($id: ID!, $NombreClase: String!) {
  getClase(id: $id, NombreClase: $NombreClase) {
    id
    NombreClase
    Ponente
  }
}
`;
export const listClases = `query ListClases(
  $filter: TableClaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listClases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      NombreClase
      Ponente
    }
    nextToken
  }
}
`;
