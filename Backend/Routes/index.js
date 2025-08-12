import express from 'express'
import authRoutes from './authRoutes.js'
import photoRoutes from './photoRoutes.js'
import userRoutes from './userRoutes.js'  //give the exact name 



const router = express.Router();


router.use('/auth',authRoutes); //entry point  app.use('/api',routes)
router.use('/photos',photoRoutes);
router.use('/users',userRoutes);

export default router;