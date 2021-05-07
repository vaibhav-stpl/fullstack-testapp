const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const cities = require('./constants/cities.json')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
let accessTokenSecret= "8Zz5tw0Ionm3XPZZfN0NOml3z9FMfmpgXwovR9fp6ryDIoGRM8EPHAB6iHsc0fb";

app.post("/api/login/", (req, res) => {
    let mockJson;
    let responseStatus;
    if (req.body.email.length> 0 && req.body.password.length > 0) {
        responseStatus = 200;
        var token = jwt.sign({ email: req.body.email }, accessTokenSecret);
        mockJson = { token, email: req.body.email };
    } else {
        responseStatus = 400;
        mockJson = 'Invalid credentials';
    }
    res.status(responseStatus).json(mockJson);
});

app.post("/api/signup/", (req, res) => {
    let mockJson;
    let responseStatus;
     if (req.body.email.length> 0 && req.body.password.length > 0) {
        responseStatus = 200;
        mockJson = "Signup Successful";
    } else {
        responseStatus = 400;
        mockJson = 'Something Went Wrong!';
    }
    //as of now we are not saving the signup data
    res.status(responseStatus).json(mockJson);
});

app.get('/api/cities', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            return res.json(cities);
            next();
        });
    } else {
        responseStatus = 401;
        res.status(responseStatus).json('Unauthorised');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});