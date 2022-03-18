const express = require('express');
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

routerApi(app);

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
