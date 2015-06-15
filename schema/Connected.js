'use strict';

exports = module.exports = function (app, mongoose) {
    var connectedSchema = new mongoose.Schema({
        name: { type: String, default: '' },
        status: { type: String, default: '' },

    });
    //connected.index({ name: 1 });
    //connected.index({ status: 1 });
    connected.set('autoIndex', (app.get('env') === 'development'));
    app.db.model('Connected', connectedSchema);
};
