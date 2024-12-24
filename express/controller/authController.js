const bcrypt = require('bcrypt');
const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    
    if (!user || !pwd) {
        return res.status(400).json({ 'message': 'UserName and password are required.' });
    }

    const foundUser = usersDB.users.find(person => person.username === user);
    
    if (!foundUser) {
        return res.status(401).json({ 'message': 'Unauthorized' });
    }

    // Evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    
    if (match) {
        res.json({ 'success': `${user} has logged in` });
    } else {
        res.status(401).json({ 'message': 'Unauthorized' });
    }
}

module.exports = { handleLogin };
