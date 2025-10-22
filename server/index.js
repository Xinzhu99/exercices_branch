// import http from "node:http";

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.setHeader("Content-Type", "text/plain; charset=utf-8");
//     res.end("Accueil ou pas!");
//   } else if (req.url === "/menu") {
//     res.setHeader("Content-Type", "application/json; charset=utf-8");
//     const data = {
//       plate: "Hello World Burger",
//       description:
//         "Un cheeseburger classique (pain, steak, fromage, salade, sauce).",
//       image: "🍔",
//     };
//     res.end(JSON.stringify(data));
//   } else {
//     res.statusCode = 404;
//     res.end("Page non trouvée");
//   }
// });

// server.listen(3001, () => {
//   console.log("Serveur lancé sur http://localhost:3001");
// });
import express from "express";
import data from "./menu.json" with {type: "json"}
import cors from "cors"

const app = express();

app.get("/", (req, res) => {  
res.send("Accueil");
});

app.get("/menu", (req, res) => {    
res.json(data);
});

app.get("/menu/:id", (req, res) => {  
const id = Number(req.params.id);  
const plat = data.find(p => p.id === id);  
if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });  
res.json(plat);
});



app.listen(3001, () => {console.log("Serveur lancé sur http://localhost:3001");});
app.use(cors({orgin:"http://127.0.0.1:3001"}))