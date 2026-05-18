
const express = require("express");
const app = express();
app.listen(3000,()=>{
    console.log("server is listening at port 3000");
})
app.get("/", (req, res) => {
    res.send(`
        <html>
            <body style="background-color:black; color:white;">
                <h1>Welcome</h1>
                <p>This is dark mode page</p>
            </body>
        </html>
    `);
});
