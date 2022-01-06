let notFound = (req, res, next) => {
    res.status(404).send("Page not found. Uhh, sorry...");
}

module.exports = { notFound }