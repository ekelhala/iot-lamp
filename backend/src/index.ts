// Library imports
import express from "express";

// Path imports
import api from './api/api';

const PORT : number = Number(process.env.PORT) || 8000;

const app = express();
app.use('/api', api);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
