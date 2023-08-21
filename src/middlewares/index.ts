import handleErrors from "./handleErros";
import validateAdmin from "./validateAdmin.middlewares";
import validateBody from "./validateBody.middleware";
import validateCourseIdExists from "./validateCourseIdExists.middlewares";
import validateEmailExists from "./validateEmailExists";
import validateIdExists from "./validateIdExists";
import validateToken from "./validateToken.middlewares";
import verifyUser from "./verifyUser.middlewares";


export default { handleErrors,validateEmailExists,validateBody,validateIdExists,validateToken,verifyUser,validateAdmin,validateCourseIdExists
}