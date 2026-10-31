const path = require('path');
const { createServer } = require('vite');

async function start() {
  process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
  });
  process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
  });

  const projectRoot = path.resolve(__dirname);
  console.log('Starting Vite server from root:', projectRoot);

  try {
    const server = await createServer({
      root: projectRoot,
      publicDir: path.resolve(projectRoot, 'public'),
      configFile: path.resolve(projectRoot, 'vite.config.ts'),
      server: {
        port: 4000,
        host: '0.0.0.0',
        strictPort: true,
      }
    });
    await server.listen();
    server.printUrls();
    console.log('Clickome Latest Dev Server running stably on port 4000');
    
    // Keep process alive indefinitely
    setInterval(() => {}, 1000 * 60 * 60);
  } catch (e) {
    console.error('FAILED TO START VITE SERVER:', e);
    process.exit(1);
  }
}

start();
