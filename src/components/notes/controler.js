function getNotes(req,res) {    
    req.getConnection((err,conn) => {
        if(err) return res.status(400).send(err)
        conn.query('SELECT * FROM notes',(err,rows) =>{
            if(err) return res.send(err)
            res.send(rows)
        })
    })
}
function addNote(req,res) {
    req.getConnection((err,conn) => {
        if(err) return res.status(400).send(err)
        conn.query('INSERT INTO notes SET ?',[req.body],(err) =>{
            if(err) return res.status(400).send(err)
            getNotes(req,res)
        })
    })
}
function editNote () {
    //
}
function deleteNote (req,res) {
    req.getConnection((err,conn) =>{
        if(err) return res.status(400).send(err)
        conn.query("DELETE FROM notes WHERE ?",[req.body],(err) =>{
            if(err) return res.status(400).send(err)
            getNotes(req,res)
        })
    })
}
module.exports = {
    getNotes,
    addNote,
    editNote,
    deleteNote
}