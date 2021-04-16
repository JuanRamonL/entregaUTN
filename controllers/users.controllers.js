const model = require('../models/users.models');
const scripts =[
    {script:'/javascripts/users.js' }
]

const getUsers = async (req, res, next) => {
    try {

        const users = await model.getMisUsers();
        const roles = await model.getRoles();
        if (users && roles && users.length > 0 && roles.length > 0){
            res.render('users', {title: 'users', users, roles, scripts });
        }else{
            res.status(404).render('error')
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

const createUser = async(req, res, next)=>{
    try {
        const {email, password, role} = req.body;

        const result = await model.insertUser({email, password, role});
        const users = await model.getMisUsers();
        const roles = await model.getRoles();

        console.log(result);
        if (result){
            res.render('users', { users, roles, scripts});
        }else{
            res.render('error');
        }
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
        
    }
};
const getSingleUser = async(req, res, next)=>{
    try {
        const {id} = req.params;

        const result = await model.getSingleUser(id);
        const users = await model.getMisUsers();
        const roles = await model.getRoles();
        console.log(result, users, roles)
        if (result && result.length > 0) {
            res.render('users', {user: result[0], users, roles, scripts });
        }else{
            res.render('error')
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}
const deleteUser = async(req, res, next) =>{
    try {
            const { id } = req.params;

            const result = await model.deleteUser(id);

        if(result > 0){

            const users = await model.getMisUsers();
            const roles = await model.getRoles();

            res.json({id});

            }else{
            res.render('error');
        }

        }catch (error) {
        req.sendStatus(500);
    }
}
const updateUser =async(req, res, next) =>{
    try {
        const{ id } = req.params;
        const { email, password, role } = req.body;
        const userUpdated = { 
            email,
            password, 
            role 
        }

        const result =await model.updateUser(id, userUpdated );

        if(result){

            const users = await model.getMisUsers();
            const roles = await model.getRoles();

            res.render(`users`, {title: 'users', users, roles, scripts });
        }else{
            console.log(error);
            res.render(error);
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500);
        
    }
}

module.exports = {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser
};
/* */
        