exports.succes = (req,res, message, status) => {
    res.status(status || 200).send({
        error: '',
        body: message
    })
}

exports.error = (req,res, message,error,status, details) => {
    res.status(status || 500).send({
        error: error,
        body: ''
    })
}