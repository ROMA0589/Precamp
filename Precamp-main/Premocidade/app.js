const express = require('express');
const path = require('path');
const app = express();

// Puerto para el servidor
const port = process.env.PORT || 3000;

// Middleware para comprimir respuestas
const compression = require('compression');
app.use(compression());

// Seguridad básica
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Servir archivos estáticos desde la carpeta 'out'
app.use(express.static(path.join(__dirname, 'out'), {
  maxAge: '1y',
  etag: true
}));

// Manejo de todas las rutas para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

// Manejo de señales de terminación
process.on('SIGTERM', () => {
  console.log('SIGTERM recibido. Cerrando servidor...');
  process.exit(0);
});
