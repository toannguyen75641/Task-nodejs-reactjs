const router = require('express').Router();
var db = require('../database/db.js');

router.get('/users', (req, res) => {
    db.User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

router.post('/users', (req, res) => {
    if(!req.body.name) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    }
    else {
        db.User.create(req.body)
            .then(() => {
                res.send("User Added")
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
});

router.put('/users/:id', (req, res) => {
    if(!req.body.name) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    }
    else {
        db.User.update({
            name: req.body.name,
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.send('User Edit');
        }).catch(err => {
            res.send('error: ' + err)
        })
    }
});

router.delete('/users/:id', (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send('User Delete')
    }).catch(err => {
        res.send('error: ' + err)
    })
});

module.exports = router;