
const getPortfolio = (req, res, next) => {
    try {
        res.render('portfolio', { title: 'portfolio', texto: 'Mis trabajos' })
    
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = {
    getPortfolio
}