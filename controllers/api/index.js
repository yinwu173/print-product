const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/profile', profileRoutes);

module.exports = router;