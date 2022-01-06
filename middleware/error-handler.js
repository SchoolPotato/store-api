let errorHandler = (err, req, res, next) => {
    if (err) {
        console.error(err);
        res.status(500).send("Whoops! Uhhh, try that again. It'll work this time, I swear.");
    }
}

module.exports = { errorHandler }