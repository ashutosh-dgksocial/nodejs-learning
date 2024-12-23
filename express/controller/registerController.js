const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
};

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;

    // Validate input
    if (!user || !pwd) {
        return res.status(400).json({ 'message': 'UserName and password are required.' });
    }

    // Check for duplicate users
    const duplicate = usersDB.users.find(person => person.userName === user);
    if (duplicate) {
        return res.status(409).json({ 'message': 'Username already exists.' }); // Conflict
    }

    try {
        // Hash password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newUser = { 'userName': user, 'password': hashedPwd };

        // Update usersDB and write to file
        usersDB.setUsers([...usersDB.users, newUser]);
        await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'), JSON.stringify(usersDB.users, null, 2)); // Pretty print JSON

        console.log(usersDB.users);
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = { handleNewUser };
