var pets = require('../controllers/pets.js');

module.exports = function(app){
    app.get('/pet', function(req, res) {
        pets.readAll(req, res);
    })
    app.get('/pet/:id', function(req, res) {
        pets.readOne(req, res);
    })    
    app.post('/pet', function(req, res) {
        pets.create(req, res);
    })
    app.put('/pet/:id', function(req, res){
        pets.update(req, res);
    })
    app.delete('/remove/:id', function(req, res) {
        pets.delete(req, res);
    })
}