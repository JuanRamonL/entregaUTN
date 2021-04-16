const pool =require('../utils/db');
const{
    DB_T_CONTACTO,
    DB_T_ROLES
}= process.env;

const getMisUsers = async() =>{
    try {

        const query= `SELECT * FROM ${DB_T_CONTACTO} WHERE available = 1`;
        const result = await pool.query(query);

        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

const getRoles = async () => {
    try {
        const query = 
        `SELECT 
            id_role,
            detail
        FROM 
            ${DB_T_ROLES}
        WHERE 
            available = 1`;
       return await pool.query(query);
    } catch (error) {
        console.log(error)
        throw error;  
    }
}

const insertUser = async(obj) =>{
    try {
        const query = `
        INSERT INTO ${DB_T_CONTACTO} SET ?
        `;
        return await pool.query(query, [obj]);
        
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}

const getSingleUser= async (id) => {
    try {
        const query =`
        SELECT
            U.id_user,
            U.email,
            U.password,
            R.id_role,
            R.detail
        FROM
            ${DB_T_CONTACTO} as U
            INNER JOIN ${DB_T_ROLES} as R
            ON U.role = R.id_role
        WHERE
            U.id_user = ?
            AND
            U.available = 1
        `
        return await pool.query(query, [id])
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const deleteUser= async (id) => {
    try {
        const query =`
        UPDATE
            ${DB_T_CONTACTO}
        SET
            available = 0
        WHERE
            id_user = ?
            AND
            available = 1
        `;
        const result = await pool.query(query, [id]);

        return result.affectedRows;
        
    } catch (error) {
        throw error;
    }
}

const updateUser = async(id, obj)=> {
    try {
        const query=`
        UPDATE
            ${DB_T_CONTACTO}
        SET email = ?,password = ?, role = ?
        WHERE id_user = ? AND available = 1
        `;
        return await pool.query(query, [obj.email, obj.password, obj.role, id]);

    } catch (error) {
        throw error;
    }
};

module.exports= {
    getMisUsers,
    getRoles,
    insertUser,
    getSingleUser,
    deleteUser,
    updateUser
}