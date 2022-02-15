/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Console } from "console";


let Aluno = require('./aluno.ts');

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */





app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	let aluno1 = new Aluno("Rufus", 30, 8.5);
	let aluno2 = new Aluno("Cachorro", 25, 10);
	let aluno3 = new Aluno("Gato", 15, 9);

	let alunos: Array<Aluno> = [];
	alunos.push(aluno1, aluno2, aluno3);

	let somaNota = 0;
	alunos.forEach(i => somaNota += i.nota);
	console.log(`A Soma todas Notas é : ${somaNota}`);
	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

});
