const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router();
require('../DB/connection');
const User = require('../models/User')
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.send('this roter page')

})

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ msge: 'fill Not fill' })
    }
    try {
        const userExits = await User.findOne({ email: email });
        if (userExits) {
            return res.status(422).json({ msge: 'user alredy exist' })
        }
        else if (password !== cpassword) {
            return res.status(422).json({ msge: 'user not match' })
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
            await user.save();
            return res.status(200).json({ msge: 'user succesfully' })

        }
    } catch (err) {
        console.log(err);

    }


});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ msge: 'please fill data' })
        }
    try {
        const userlogin = await User.findOne({ email: email })

        if (userlogin) {
        const isMatch = await bcrypt.compare(password, userlogin.password);
        
        if (!isMatch) {
            return res.status(422).json({ err: 'invailid creadiatials' })
        } else {
            return res.json({ msge: 'user succesfully login' })
        }
        } else {
            return res.status(422).json({ err: 'invailid creadiatials' })
        }

    } catch (err) {
        console.log(err);

    }


})

module.exports = router