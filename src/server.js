import 'dotenv/config';
import app from './app.js';

const { HOST = 'localhost', PORT = 5000 } = process.env;

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
