// Convierte un número en un precio legible: 19900 -> "$ 19.900"
export function formatoPrecio(valor) {
  if (valor === 0) return 'A convenir'
  return '$ ' + Number(valor).toLocaleString('es-CO')
}
