const axios = require("axios");
require("dotenv-flow").config();

const getVacantes = async (req, response) => {
    await axios({
        method: "GET",
        baseURL: "https://qa.magneto365.com/api/v1",
        url: "/vacancies",
        headers: {
            "HTTP-COMPANY-TOKEN": process.env.HTTP_COMPANY_TOKEN,
        },
    })
        .then((res) => {
            if (!res.data.vacants) {
                throw new Error("Datos no encontrados");
            }
            let data = res.data.vacants;
            console.log(data);
            response.json(data);
        })
        .catch((error) => {
            if (!axios.isCancel(error)) {
                console.log(error);
            }
        });
};
module.exports = getVacantes;
