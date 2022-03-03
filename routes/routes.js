const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')
router.get('/user', (request, response) => {
    signUpTemplateCopy.find()
        .then(data => {
            response.json(data)
            console.log(data)
        })
        .catch(err =>{
            response.json(err)
        })
})

router.post('/register', (request, response) => {
    const signUpUser = new signUpTemplateCopy({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: request.body.password,
        confirm_password: request.body.confirm_password,
    })  
    signUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(err =>{
            response.json(err)
        })
})

module.exports = router