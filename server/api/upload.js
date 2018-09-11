const router = require('express').Router()

router.post('/', (req, res, next) => {
  console.log('REQ!', req.body)
})

module.exports = router
