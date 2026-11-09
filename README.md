# LexDoc · Frontend

Plataforma web para generar documentos legales de todas las ramas del derecho.
Hecho con **Vue 3 (Options API)**, **Vue Router**, **Tailwind CSS** y **daisyUI**, con tema propio negro y dorado.

## Cómo ejecutarlo

Necesitas tener Node.js 18 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # versión para producción (carpeta dist/)
npm run preview   # probar la versión de producción
```

## Pantallas (rutas)

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `HomeView.vue` | Inicio: buscador, áreas, cómo funciona |
| `/areas` | `AreasView.vue` | Áreas del derecho |
| `/catalogo` | `CatalogoView.vue` | Catálogo con búsqueda y filtros |
| `/asistente/:id` | `AsistenteView.vue` | Asistente de 4 pasos para crear el documento |
| `/listo` | `ListoView.vue` | Documento terminado: vista previa y descarga |
| `/cuenta` | `CuentaView.vue` | Mis documentos y estados |
| `/abogados` | `AbogadosView.vue` | Consulta y agenda con abogados |
| `/planes` | `PlanesView.vue` | Planes y precios |
| `/pago` | `PagoView.vue` | Pago seguro (`?doc=` o `?plan=`) |
| `/ayuda` | `AyudaView.vue` | Preguntas frecuentes y contacto |

## Estructura

```
src/
├── main.js            Arranque de la app
├── App.vue            Barra superior + contenido + pie de página
├── router/index.js    Rutas
├── assets/main.css    Estilos base de Tailwind
├── components/        Piezas reutilizables
├── views/             Una pantalla por archivo
├── data/              Datos de ejemplo (documentos, abogados, planes…)
└── utils/formato.js   Formato de precios
```

### Componentes

`AppNavbar`, `AppFooter`, `LogoLexDoc`, `IconBalanza`, `PageHeader`, `AreaCard`, `DocumentCard`,
`LawyerCard`, `PlanCard`, `StatusBadge`, `StepsAsistente`, `FaqItem`, `DocumentoPreview`.

## Cómo está escrito el código

Todos los componentes usan la **API de opciones**, siempre en el mismo orden:
`name` → `components` → `props` → `data` → `computed` → `watch` → `methods`.

- `props`: datos que recibe el componente.
- `data()`: datos propios que cambian (por ejemplo, el paso actual del asistente).
- `computed`: valores calculados a partir de otros (por ejemplo, la lista filtrada).
- `methods`: acciones (por ejemplo, `siguiente()` o `pagar()`).

## Tema negro y dorado

Se define en `tailwind.config.js` (tema `lexdoc` de daisyUI). Para cambiar el dorado,
edita el color `primary`. El tema se activa con `data-theme="lexdoc"` en `index.html`.

## Conectar con un servidor (pendiente)

Los datos de `src/data/` son de ejemplo. Los lugares donde falta conectar una API
están marcados con `TODO` en el código:

- Catálogo, abogados, planes y documentos del usuario → reemplazar los archivos de `data/` por llamadas a la API.
- `AsistenteView` → guardar el documento al finalizar.
- `ListoView` → descarga real en Word/PDF.
- `AbogadosView` → registrar la cita.
- `PagoView` → pasarela de pagos (nunca guardar datos de tarjeta en el frontend).
- `AyudaView` → enviar el mensaje de contacto.

Tampoco incluye aún registro e inicio de sesión, ni términos y política de datos personales.
# lex-doc-frontend
