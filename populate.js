const Product = require('./models/product');
const data = require('./data.json');

const populate = async (data, req, res) => {
    await Product.deleteMany();
    data.map(async (item) => {
        const product = await Product.create(item);
    });
}

module.exports = { populate, data };