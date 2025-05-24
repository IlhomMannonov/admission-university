import {Router} from "express";
import {verifyJwtToken} from "../middilwares/Security";
import {enter_personal_data_manual} from "../controller/AdmissionController";
import {create, getAll, remove, update} from "../controller/AdmissionTypeController";

const router: Router = Router();

router.route('/create')
    .post(verifyJwtToken, create);

router.route('/update/:id')
    .put(verifyJwtToken, update);

router.route('/delete/:id')
    .delete(verifyJwtToken, remove);

router.route('/all')
    .get(getAll);


export default router;
