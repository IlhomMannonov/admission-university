import {Router} from "express";
import {verifyJwtToken} from "../middilwares/Security";
import {create, getAll, remove, update} from "../controller/EduLangController";

const router: Router = Router();

router.route('/create')
    .post(verifyJwtToken, create);

router.route('/update/:id')
    .put(verifyJwtToken, update);

router.route('/delete/:id')
    .delete(verifyJwtToken, remove);

router.route('/all')
    .get(verifyJwtToken, getAll);


export default router;
