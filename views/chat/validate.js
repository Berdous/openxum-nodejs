'use strict';
exports.init = function(req, res){
    console.log(req.param('name'));
    console.log(req.param('statut'));
    var fieldsToSet = { name : req.param('name'), statut : req.param('statut'), userCreated: { id: req.user._id, name: req.user.username } };
    console.log(fieldsToSet);
    req.app.db.models.Connected.create(fieldsToSet, function (err, user) { }); res.redirect('/chat');
};