import express, { Request, Response } from 'express';

const app = express();
const port = 5000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

