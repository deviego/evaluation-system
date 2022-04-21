import "reflect-metadata";
import express from 'express'

import "./database";



const app = express()

//localhost
app.listen(3000, () => console.log('server is run'))
