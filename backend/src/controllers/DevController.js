const axios = require('axios')
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { username } = req.body;

        const user = await Dev.findOne({ user: username});

        if (user) {
            return res.json(user);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const dev = await Dev.create({
            name: username,
            user: username,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        })

        return res.json(dev);
    },
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ]
        })

        res.json(users);
    }
}