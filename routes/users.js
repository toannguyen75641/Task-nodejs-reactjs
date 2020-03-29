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

router.get('/users/:id', (req, res) => {
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(tasks => {
        res.json(tasks)
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
                res.send({
                    status: 'success',
                    message: 'User added successfully'
                })
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
            res.send({
                status: 'success',
                message: 'User updated successfully'
            })
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
        res.send({
            status: 'success',
            message: 'User deleted successfully'
        })
    }).catch(err => {
        res.send('error: ' + err)
    })
});

module.exports = router;