// Express Router Setup
const express = require('express');
const router = express.Router();

// Import Controllers
const {getAllProducts, getProduct, updateProduct, deleteProduct, createProduct} = require('../controllers/products');

// router.get('/', getThing);
// router.post('/', createThing);
// router.post('/postman', createThing);
// router.put('/', updateThing);
// router.delete('/:id', deleteThing);

// OR

// router.route('/').get((req, res) => {
//    res.send('All Items');
// })

// router.route('/').get(getAllProducts);
// router.route('/postman').post(createPostmanThing);
// router.route('/:id').get(updateThing).delete(deleteThing);

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct).get(getProduct);

module.exports = router;
