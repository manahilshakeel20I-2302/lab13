const request = require ('jest');
const app = require ('./routes/User');
const mongoose = require('mongoose');



test.todo("it should response the GET method"), () =>{
    const response = request(app).post("http://localhost:8000/User/add").json({
        "Name": "Manahil",
        "Email": "abcd",
        "Age": 20,
        "Contact": 2345678
    })

    expect(response.statusCode.toBe(200));
 };


