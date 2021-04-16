
const getIndex = (req, res, next) => {
    try {
      res.render('index', { 
        title: 'Fotografías que cuentan historias',
        title2: 'La narradora de historias',
        title3: '¡Hablemos!', 
        texto: 'Somos hinojoGuardar para siempre a quienes amamos, los momentos compartidos y cómo nos hicieron sentir',
        texto2:' Hagamos de tu evento una historia única',
    })
      
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = {
    getIndex
};
