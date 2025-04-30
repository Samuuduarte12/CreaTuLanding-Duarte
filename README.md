
![Logo](https://firebasestorage.googleapis.com/v0/b/website-a8744.appspot.com/o/imagenes-e-comerce%2FTrendyLooks.png?alt=media&token=a1974b22-07e8-465a-9691-7cd266fcaf59)


**TrendyLooks** es un e-commerce de ropa desarrollado como proyecto final del curso **ReactJS - Coderhouse (Comisión 69590)**. La tienda permite navegar productos por categoría, ver detalles, agregar al carrito y simular una compra.
## Tecnologías y librerías utilizadas

- **ReactJS** + **Vite**  
- **Firebase** (Firestore) para productos y órdenes de compra  
- **React Context API** para manejar estado del carrito y productos  
- **Tailwind CSS** + **CSS** personalizado  
- **React Icons** para el ícono del carrito  
- **React Toastify** para notificaciones
- **CSS Loaders** para spinner de carga 
- **Vercel** para despliegue

## Colores del proyecto

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Color principal | #388da8 ![#388da8](https://img.shields.io/badge/-388da8?style=flat-square&logoColor=white) |
| Color secundario | #364153 ![#364153](https://img.shields.io/badge/-364153?style=flat-square&logoColor=white) |
| Color terciario | #e5e7eb ![#e5e7eb](https://img.shields.io/badge/-e5e7eb?style=flat-square&logoColor=white) |


## Componentes

| Componente             | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `404`                  | Página para rutas no encontradas                          |
| `Cart`                 | Muestra productos agregados al carrito                    |
| `CartWidget`           | Ícono del carrito en la barra de navegación               |
| `Comprobante`          | Muestra ID y resumen de compra al finalizar               |
| `FormBuy`              | Formulario para ingresar datos del comprador              |
| `Item`                 | Tarjeta del producto que aparece en la home               |
| `ItemCount`            | Selector de cantidad de producto                          |
| `ItemDetailContainer`  | Vista detallada de un producto con `ItemCount`            |
| `ItemListContainer`    | Lista de productos filtrada por categoría                 |
| `NavBar`               | Barra de navegación con categorías y carrito              |
| `Spinner`              | Indicador de carga mientras se consulta la base de datos  |

## Funcionalidades

- Vista de productos en la **home**.
- Navegación por **categorías** desde la barra de navegación (`NavBar`).
- **Detalle del producto** con selector de cantidad (`ItemCount`).
- **Carrito de compras** con listado de productos agregados y posibilidad de editar y finalizar compra.
- **Formulario de checkout** para completar los datos del comprador (`FormBuy`).
- Generación de **comprobante de compra** con ID y resumen (`Comprobante`).
- Actualización automática del **stock** en Firebase al realizar una compra.
- Navegación tipo **SPA** (Single Page Application) usando `React Router`.

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
    ```        
2. Levanta el proyecto en localHost:
    ```bash
    npm run dev
    ```
## Deploy

El proyecto esta deployado en **Vercel**:

🔗https://e-comerce-coder-house.vercel.app/


## Autor

- [@samuuduarte12](https://github.com/Samuuduarte12)

