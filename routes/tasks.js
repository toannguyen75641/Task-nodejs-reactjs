const router = require('express').Router();
var db = require('../database/db.js');

router.get('/tasks', (req, res) => {
    db.Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

router.get('/tasks/:id', (req, res) => {
    db.Task.findAll({
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

router.post('/tasks', (req, res) => {
    if(!req.body.name) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    }
    else {
        db.Task.create(req.body)
            .then(() => {
                res.send({
                    status: 'success',
                    message: 'Task added successfully'
                })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
});

router.put('/tasks/:id', (req, res) => {
    if(!req.body.name) {
        res.status(400);
        res.json({
            error: "Bad Data"
        });
    }
    else {
        db.Task.update({
            name: req.body.name,
            person_in_charge: req.body.person_in_charge
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.send({
                status: 'success',
                message: 'Task updated successfully'
            })
        }).catch(err => {
            res.send('error: ' + err)
        })
    }
});

router.delete('/tasks/:id', (req, res) => {
    db.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send({
            status: 'success',
            message: 'Task deleted successfully'
        })
    }).catch(err => {
        res.send('error: ' + err)
    })
});

module.exports = router;