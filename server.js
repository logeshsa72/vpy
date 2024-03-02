import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {
  employees, states, countries, cities,
  departments, companies, branches, users, pages, roles, subscriptions, finYear,
  employeeCategories, pageGroup,
  party,
  partyCategories,
  productBrand,
  productCategory,
  product,
  purchaseBill,
  stock,
  salesBill,
  purchaseReturn,
  salesReturn,
  uom,leadCategories
} from './src/routes/index.js';

import { socketMain } from './src/sockets/socket.js';

const app = express()
app.use(express.json())


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:2000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())

const path = __dirname + '/client/build/';

app.use(express.static(path));


app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

BigInt.prototype['toJSON'] = function () {
  return parseInt(this.toString());
};


app.use("/employees", employees);
app.use("/countries", countries);
app.use("/states", states);
app.use("/cities", cities);
app.use("/departments", departments);
app.use("/companies", companies);
app.use("/branches", branches);
app.use("/users", users);
app.use("/pages", pages);
app.use("/pageGroup", pageGroup);
app.use("/roles", roles);
app.use("/subscriptions", subscriptions);
app.use("/finYear", finYear);
app.use("/employeeCategories", employeeCategories);
app.use("/partyCategories", partyCategories);
app.use("/party", party);
app.use("/productBrand", productBrand);
app.use("/productCategory", productCategory);
app.use("/product", product);
app.use("/purchaseBill", purchaseBill);
app.use("/stock", stock);
app.use("/salesBill", salesBill);
app.use("/purchaseReturn", purchaseReturn)
app.use("/salesReturn", salesReturn)
app.use('/uom', uom)
app.use("/leadCategories", leadCategories)



const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socketMain);

const PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

