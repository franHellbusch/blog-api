CREATE TABLE authors (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(150) UNIQUE NOT NULL,
  bio        TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE posts (
  id         SERIAL PRIMARY KEY,
  title      VARCHAR(200) NOT NULL,
  content    TEXT NOT NULL,
  author_id  INTEGER NOT NULL,
  published  BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

INSERT INTO authors (name, email, bio) VALUES
  ('Ana García',   'ana@example.com',    'Desarrolladora full-stack'),
  ('Carlos Ruiz',  'carlos@example.com', 'Escritor técnico'),
  ('María López',  'maria@example.com',  'Ingeniería de APIs REST');

INSERT INTO posts (title, content, author_id, published) VALUES
  ('Introducción a Node.js',       'Node.js es un runtime...', 1, true),
  ('PostgreSQL vs MySQL',          'Ambas tienen ventajas...',  2, true),
  ('APIs RESTful',                 'REST es un estilo...',      1, true),
  ('Manejo de errores en Express', 'El manejo apropiado...',    3, false),
  ('Async/Await explicado',        'Las promesas...',           1, false);