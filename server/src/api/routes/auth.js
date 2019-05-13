const {auth} = require('firebase-admin');
const authService = auth();

exports.requiresAuth = async (req, res, next) => {
    console.log('hello');
    
    const idToken = req.header('FIREBASE_AUTH_TOKEN');

    // https://firebase.google.com/docs/reference/admin/node/admin.auth.DecodedIdToken
    let decodedIdToken;

    try {
        decodedIdToken = await authService.verifyIdToken(idToken);
    } catch (error) {
        res.status(401).send({msg: 'AUTH REQUIRED'});
        return;
    }

    req.user = decodedIdToken;
    next();
}