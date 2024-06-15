const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 8003;

app.get("/json/users", (req,res)=>
    {
        return res.json(users);
    });

app.get("/users", (req, res) => {
    const html =
    `
    <ul>
        ${users.map((users) => `<li>${users.first_name}</li>` ).join("") }
    </ul>
    `;
    res.send(html);
    
    
});

app.listen(port, () => console.log(`Server has started at : ${port}`));
