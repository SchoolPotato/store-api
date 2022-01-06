let errorHandler = (req, res, next, err) => {
    try {
        if (err){
            throw err;
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err, "Whoops! Uhhh, try that again. It'll work this time, I swear.");
        next();
    }
}

module.exports = { errorHandler }