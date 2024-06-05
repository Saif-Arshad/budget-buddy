import mongoose from 'mongoose';

const user = new mongoose.Schema({

    email:{
        type: 'string',
        required: true,
        unique: true
    }
},{
    timestamps:true
})

const User = mongoose.models.User || mongoose.model('User',user);
export default User;