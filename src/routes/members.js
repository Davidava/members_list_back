const router = require("express-promise-router")()

const { member } = require('../controllers')

router.route('/:page').get(member.getAll)


module.exports = router;