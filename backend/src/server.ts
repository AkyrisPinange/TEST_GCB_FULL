import "reflect-metadata";
import express from "express";

import "./database";
import { routes } from "./routes";

import cors from "cors"


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(4000, () => console.log("Server está no Ar!"));