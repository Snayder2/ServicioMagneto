const routes = require("express").Router();

routes.get("/magneto/api/getVacantes", async (req, res) => {
    let service = require("./getVacantes.service");
    await service(req, res);
});
module.exports = routes;
