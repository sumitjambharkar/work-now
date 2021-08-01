const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        require:'true'
    },
    email:{
        type: 'string',
        require:'true'
    },
    phone:{
        type: 'string',
        require:'true'
    },
    password:{
        type: 'string',
        require:'true'
    },
    cpassword:{
        type: 'string',
        require:'true'
    },
    tokens:[
        {
            token:{
                type:'string',
                require:'true'
            }
        }
    ]

});

userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();

});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);

    }

}

const user = mongoose.model('User',userSchema)

module.exports = user