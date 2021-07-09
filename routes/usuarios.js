const {Router} = require('express');
const { usuariosGet,
        usuariosPost,
        usuariosDelete,
        usuariosPut,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


// router.get('/', (req,res)=>{
//     res.json({
//         // ok:true,
//         msg: 'get API'
//     });
// });
// --------------referencia a la función usuariosGet
router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);


router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;