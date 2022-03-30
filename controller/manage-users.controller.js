const db = require('../manage-users-db')


class UserController {
    async createUser(req, res) {
        const {username, groupname, created, completed} = req.body
        const newPerson = await db.query(
                `INSERT INTO users (username, groupname, created) values ($1, $2, $3) RETURNING *`, 
                [username, groupname, created]
            )
        //res.json(newPerson.rows[0])

        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }
    async getUser(req, res) {
        
    }
    async updateUser(req, res) {
        const {username, groupname, id} = req.body
        const user = await db.query(
            'UPDATE users set username = $1, groupname = $2 where id = $3 RETURNING *',
            [username, groupname, id]
        )
        res.json(user.rows)
    }
    async deleteUser(req, res) {
        const id = req.params.id
        await db.query(`DELETE FROM users where id = $1`, [id])
        //res.json(user.rows)
        //res.json({ message: `id #${id} был удален` })

        const users = await db.query(`SELECT * FROM users`)
        res.json(users.rows)
    }
}

module.exports = new UserController()

