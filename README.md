# Blog API

API REST para gestionar autores y posts de un blog.
Construida con Node.js, Express y PostgreSQL. Desplegada en Railway.

## URL Base

https://blog-api-production.up.railway.app

## Documentación Interactiva

https://blog-api-production.up.railway.app/api-docs

## Endpoints

### Autores
- `GET /api/authors` — Obtener todos los autores
- `GET /api/authors/:id` — Obtener un autor por ID
- `POST /api/authors` — Crear un nuevo autor
- `PUT /api/authors/:id` — Actualizar un autor
- `DELETE /api/authors/:id` — Eliminar un autor

### Posts
- `GET /api/posts` — Obtener todos los posts
- `GET /api/posts/:id` — Obtener un post por ID
- `POST /api/posts` — Crear un nuevo post
- `PUT /api/posts/:id` — Actualizar un post
- `DELETE /api/posts/:id` — Eliminar un post

## Ejemplo rápido

\`\`\`bash
curl https://blog-api-production.up.railway.app/api/authors
\`\`\`

## Tecnologías

- Node.js + Express
- PostgreSQL (pg)
- OpenAPI 3.1 + Swagger UI
- Railway