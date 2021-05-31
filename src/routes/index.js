import {Router} from 'express'
import newsRoute from './api/newsroute'
import usersROute from './api/usersroutes'
import lessonsRoute from './api/lessonsROutes'

const router = Router();
router.use('/news', newsRoute)
router.use('/users', usersROute)
router.use('/lessons', lessonsRoute)
export default router;