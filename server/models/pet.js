var mongoose = require('mongoose');

module.exports = function(){
    const PetSchema = new mongoose.Schema({
        name : {
            type : String, 
            required: [true,"Pet name is required"], 
            minlength: [3, "Pet name must be at least 3 characters"], 
            unique: [true, "Pet name must be unique"],
        },
        petType : {
            type : String,
            required : [true, "Pet type is required"],
            minlength: [3, "Pet type must be at least 3 characters"]
        },
        description : {
            type : String,
            required : [true, "Description is required"],
            minlength: [3, "Description must be at least 3 characters"],
        },
        skills: {
            type: [String],
            validate: {
                validator: function(skills){
                    return skills.length <= 3
                },
                message: "Pet may only have 3 skills maximum"
            }
        },
        like: {type: Number, default: 0}
    }, {timestamps: true})
    

    var Pet = mongoose.model('pets', PetSchema);
    return Pet;
}