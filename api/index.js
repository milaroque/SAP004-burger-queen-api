import express from 'express'
import bodyParser from 'body-parser'
import routes from './server/src/routes/ProductRoutes';
import routesOrder from './server/src/routes/OrderRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/api/product', routes);
app.use('/api/order', routesOrder);

app.get('*', (req, res) => res.status(200).send('Esta é a API do Burger Queen.'))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app