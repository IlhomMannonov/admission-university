import {Router} from "express";
import {create, getAll, remove, update} from "../controller/EduFormController";
import {verifyJwtToken} from "../middilwares/Security";

const router: Router = Router();

router.route('/create')
    .post(verifyJwtToken, create);


router.route('/update/:id')
    .put(verifyJwtToken, update);


router.route('/all')
    .get(getAll);


router.route('/delete/:id')
    .delete(verifyJwtToken, remove);


export default router;