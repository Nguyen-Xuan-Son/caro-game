const initMiddleware = (app) => {
    const bodyParser = require('body-parser');
    const cors = require('cors');

    app.use(cors());
    app.use(bodyParser.json());
};

module.exports = initMiddleware;
