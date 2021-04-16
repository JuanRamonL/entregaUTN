
const getNosotros = (req, res, next) => {
    try {
        res.render('nosotros', { title: 'Sobre mi ', texto: 'Somos hinojo' })
    
    } catch (error) {
        res.sendStatus(500);
    }   
}

module.exports = {
    getNosotros
}