// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateAsitente = `subscription OnCreateAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onCreateAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onUpdateAsitente = `subscription OnUpdateAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onUpdateAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onDeleteAsitente = `subscription OnDeleteAsitente(
  $id: ID
  $NombreGafete: String
  $NombreCertificado: String
  $Clases: [String]
) {
  onDeleteAsitente(
    id: $id
    NombreGafete: $NombreGafete
    NombreCertificado: $NombreCertificado
    Clases: $Clases
  ) {
    id
    NombreGafete
    NombreCertificado
    Clases
  }
}
`;
export const onCreateClase = `subscription OnCreateClase($id: ID, $NombreClase: String, $Ponente: String) {
  onCreateClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
export const onUpdateClase = `subscription OnUpdateClase($id: ID, $NombreClase: String, $Ponente: String) {
  onUpdateClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
export const onDeleteClase = `subscription OnDeleteClase($id: ID, $NombreClase: String, $Ponente: String) {
  onDeleteClase(id: $id, NombreClase: $NombreClase, Ponente: $Ponente) {
    id
    NombreClase
    Ponente
  }
}
`;
