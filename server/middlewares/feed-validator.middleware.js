const { body, param, query } = require('express-validator');
const { isValidDate } = require('../utils/validator.utils')

exports.getNeoFeedValidator = [
    query('startDate')
        .not()
        .isEmpty().withMessage('startDate shoud not be empty')
        .custom(isValidDate).withMessage('startDate shoud be a valid date'),

    query('endDate')
        .not()
        .isEmpty().withMessage('endDate shoud not be empty')
        .custom(isValidDate).withMessage('endDate shoud be a valid date')
];