# Servidor CRUD de Libros ExpressJS/NodeJs

Esta documentación describe los pasos para ejecutar y comprender el servidor desarrollado en Node.js y Express.js que alimenta el CRUD de libros. La aplicación utiliza un archivo JSON como base de datos y maneja las variables de entorno a través de un archivo `.env`.

## Requisitos Previos

Asegúrate de tener instalado Node.js en tu máquina antes de comenzar.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/diegoT3ck/book-server-vue
    ```

2. Navega al directorio del servidor:

    ```bash
    cd book-server-vue
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en el directorio raíz del servidor para configurar las variables de entorno:

    ```dotenv
    SERVER_HOST=localhost
    SERVER_PORT=3000
    CLIENT_HOST=http://localhost:8080
    ```

    Asegúrate de ajustar las variables según las necesidades de tu entorno.

2. Abre el archivo `app.js` para configurar el CORS y la conexión con el cliente:

    ```javascript
    // app.js
    const express = require('express');
    const cors = require('cors');
    const app = express();

    const { SERVER_PORT, CLIENT_HOST } = process.env;

    app.use(cors({ origin: CLIENT_HOST, credentials: true }));

    // Resto de la configuración del servidor
    ```

3. Abre el archivo `db.json` para modificar la base de datos según tus necesidades.
```json
{
    "books": [
        {
            "id": 1,
            "title": "El Quijote",
            "autor": "Miguel de Cervantes",
            "public_at": 1677823200000,
            "isbn": "84-253-4025-3",
            "status": true
        },
        {
            "id": 2,
            "title": "La Odisea",
            "autor": "Homero",
            "public_at": 1702101600000,
            "isbn": "84-253-4025-3",
            "status": true
        },
        {
            "id": 3,
            "title": "La Divina Comedia",
            "autor": "Dante Alighieri",
            "public_at": 1702101600000,
            "isbn": "84-253-4025-3",
            "status": true
        },
        {
            "id": 4,
            "title": "Hamlet",
            "autor": "William Shakespeare",
            "public_at": 1702101600000,
            "isbn": "84-253-4025-3",
            "status": true
        },
        {
            "id": 5,
            "title": "La Eneida",
            "autor": "Virgilio",
            "public_at": 1702101600000,
            "isbn": "84-253-4025-3",
            "status": true
        },
        {
            "id": 7,
            "title": "Ensayos",
            "autor": "Michel de Montaigne",
            "public_at": 1702180373000,
            "isbn": "123-456",
            "status": true
        },
        {
            "id": 7,
            "title": "Madame Bovary",
            "autor": "Gustave Flaubert",
            "public_at": 1702180373000,
            "isbn": "123-456",
            "status": true
        },
        {
            "id": 8,
            "title": "Cumbres borrascosas",
            "autor": "Emily Brontë",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 9,
            "title": "Edipo Rey",
            "autor": "Sófocles",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 10,
            "title": "El rey Lear",
            "autor": "William Shakespeare",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 11,
            "title": "Las mil y una noches",
            "autor": "Anónimo",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 12,
            "title": "Poesía",
            "autor": "San Juan de la Cruz",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 13,
            "title": "Macbeth",
            "autor": "William Shakespeare",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 14,
            "title": "De rerum natura",
            "autor": "Lucrecio",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 15,
            "title": "La vida es sueño",
            "autor": "Calderón de la Barca",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 16,
            "title": "Epopeya de Gilgamesh",
            "autor": "Anónimo",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 17,
            "title": "Ulises",
            "autor": "James Joyce",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 18,
            "title": "Antígona",
            "autor": "Sófocles",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 19,
            "title": "La Regenta",
            "autor": "Leopoldo Alas",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 20,
            "title": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 21,
            "title": "Ana Karenina",
            "autor": "León Tolstói",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        },
        {
            "id": 22,
            "title": "Frankenstein",
            "autor": "Mary Shelley",
            "public_at": 891838800000,
            "isbn": "988-55",
            "status": true
        }
    ]
}
```

## Ejecución

1. Inicia el servidor:

    ```bash
    npm start
    ```

    El servidor estará disponible en [http://localhost:3000](http://localhost:3000) o en la dirección ip o dominio instalado

## Endpoints de la API

- **GET /libros:** Obtiene la lista completa de libros.
- **POST /libros:** Agrega un nuevo libro a la lista.
- **PUT /libros/:id:** Modifica la información de un libro existente.
- **DELETE /libros/:id:** Elimina un libro de la lista.

## Estructura del Proyecto
```
| |-- db
| | |-- db.json
| |-- routes
| | |-- libros.js 
| | |-- router.js 
|-- app.js
|-- .env
|-- package.json
```


- **/routes/libros.js:** Contiene la lógica de los endpoints relacionados con los libros.
- **/routes/router.js:** Contiene la lógica de la configuración del router.
- **/db/db.json:** Archivo JSON que actúa como la base de datos.
- **server.js:** Archivo principal que configura y ejecuta el servidor.
- **.env:** Archivo que contiene las variables de entorno.

## Tecnologías Utilizadas

- [Express](https://expressjs.com/)
- [Next.js](https://nextjs.org/)

## Contribuir

Si deseas contribuir al servidor, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y commitea: `git commit -m "Añade nueva funcionalidad"`.
4. Haz push a tu rama: `git push origin feature/nueva-funcionalidad`.
5. Crea un pull request en GitHub.

