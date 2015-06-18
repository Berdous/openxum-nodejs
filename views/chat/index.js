'use strict';


var getReturnUrl = function(req) {
    var returnUrl = req.user.defaultReturnUrl();
    if (req.session.returnUrl) {
        returnUrl = req.session.returnUrl;
        delete req.session.returnUrl;
    }
    return returnUrl;
};

exports.init = function(req, res){
    if (req.isAuthenticated()) {

        // trouver les utilisateurs connectés
        req.app.db.models.User.find({ 'username': { $nin : [req.user.username,'root'] } }, function (err, user) {
            if (err) {
                //return workflow.emit('exception', err);
            }

            if (user) {
                res.render('chat/index' ,{ "userActive": user });


            }


        });


    }
    else {
        res.render('login/index', {
            oauthMessage: '',
            oauthTwitter: !!req.app.config.oauth.twitter.key,
            oauthGitHub: !!req.app.config.oauth.github.key,
            oauthFacebook: !!req.app.config.oauth.facebook.key,
            oauthGoogle: !!req.app.config.oauth.google.key,
            oauthTumblr: !!req.app.config.oauth.tumblr.key
        });
    }
};






/*

exports.init = function(req, res){
  res.render('chat/index');
};
*/