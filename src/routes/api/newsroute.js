import {Router} from "express"
import newsController from "../../controllers/news"
import NewsValidator from '../../validators/newsValidator'
 
const router = Router();
router.get('/', newsController.getNews)
router.post('/', NewsValidator, newsController.addNews)
export default router;