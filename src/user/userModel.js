var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var userSchema = new Schema({
    firstname: {
        type: String,
        require: true
    }, 
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique:true,
        require: true
    }, 
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('user', userSchema);
userSchema.pre("save", async function(next){
    const user = this;
    if(user.isModified("password"))
    {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

userSchema.statics.findByCredentials = async(name, password) => { 
    const user = await user.findOne((name));
    const checks = await bcrypt.compare(password, user.password);
    if(!checks)
    {
        throw new Error()
    }
    return user;
}

