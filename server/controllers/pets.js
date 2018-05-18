var Pet = require('../models/pet.js')();

module.exports = {
    readAll: function(req, res){
        Pet.find({}).sort('petType').exec()
        .then(pets => {
            res.json({msg: "Success", pets: pets});
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },
    readOne: function(req, res){
        Pet.findById(req.params.id)
        .then(pet => {
            res.json({msg: "Success", pet: pet});
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    }, 
    create: function(req, res){
        Pet.create(req.body)
        .then(added => {
            res.redirect('/pet/' + added._id);
        })
        .catch(err => {
            console.log(err);
            res.json({msg: "Error", error: err});
        })
    },
    update: function(req, res){
        Pet.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { runValidators: true }).exec()
        .then(pet => {
            res.redirect(303,'/pet/' + pet._id);
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },
    delete: function(req, res){
        Pet.remove({_id: req.params.id})
        .then(pet => {
            res.redirect(303,'/pet');
        })
        .catch(err => {
            res.json({msg: "Error", error: err});
        })
    },

}