const express = require('express');
const router = express.Router();
const postArray = require('../postArray');

router.get('/', function (req, res){
    res.json(postArray);
});

// // index
// router.get('/', function (req, res) {
//     res.send('Lista del dolce');
//     });
//     // show
router.get('/:id', function (req, res) {
    res.send('Dettagli del dolce ' + req.params.id);
    });
//     // store
router.post('/', function (req, res) {
    res.send('Creazione nuovo dolce');
    });
//     // update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del dolce ' + req.params.id);
    });
//     // modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del  dolce ' + req.params.id);
    });
//     // destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del dolce ' + req.params.id);
    });

module.exports = router;


//tentativo secondo bonus
// router.get('/:id', function (req, res) {
//     posts.forEach(e => {
//         if(e.slug=== req.params.id){
//             res.json(e);
//         } else{
//             res.json('non trovato')
//         }
        
//     });
//     });