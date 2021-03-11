const { Technology } = require('../models');

class TechnologyController {

    async getTechnologies(req, res) {
        let technologies = await Technology.find();
        technologies = technologies.map(technology => {
            technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
            return technology;
        });
        return res.send({ error: false, data: technologies });
    }

    async getTechnologyById(req, res) {
        const { id } = req.params;
        let technology = await Technology.findById(id);
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return res.send({ error: false, data: technology });
    }

    async getTechnologyByName(req, res) {
        const { name } = req.params;
        let technologies = await Technology.find({
            name: { $regex: new RegExp(name, "i") }
        });
        technologies = technologies.map(technology => {
            technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
            return technology;
        });
        return res.send({ error: false, data: technologies });
    }
}

module.exports = new TechnologyController();