const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const validateEmail = (email) => {
    return (/^\S+@\S+\.\S+$/).test(email)
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        lowerCase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Email invalid']
    },
    password:{
        type:String,

    },
    created_at: {
        type: Date,
        required:true,
        default: Date.now
    },
})

userSchema.pre('save', function (next) {
    const user = this;
    if(user.isNew || user.isModified('password')) {
        bcrypt.genSalt(10, (error, salt) => {
            if(error) { return next(error)}
            bcrypt.hash(user.password, salt, null, (error,hash) => {
                if(error) {return next(error)}
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
        if(error) {return callback(error)}
        callback(null, isMatch)
    })
}

module.exports = mongoose.model('User', userSchema)