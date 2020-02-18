const express = require("express");
const app = express();


app.use((req, res) => {
    res.json({
        message: 'Okay'
    });
});






const PORT = 1234;


app.listen(PORT, () => console.log("server started"));
