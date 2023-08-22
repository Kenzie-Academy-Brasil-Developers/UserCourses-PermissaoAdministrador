import { Router } from "express";
import { coursesControllers } from "../controllers";
import middlewares from "../middlewares";
import { CourseAddSchema, courseCreateSchema } from "../schemas";

const courseRouter:Router=Router()

courseRouter.post("",middlewares.validateToken,
middlewares.validateAdmin,middlewares.validateBody(courseCreateSchema),
coursesControllers.create)

courseRouter.get("",coursesControllers.read )

courseRouter.post("/:courseId/users/:userId",middlewares.validateToken,
middlewares.validateAdmin,
middlewares.validateCourseIdExists,
middlewares.validateIdExists,
coursesControllers.addCourse )

courseRouter.delete("/:courseId/users/:userId",middlewares.validateToken,
middlewares.validateIdExists,
middlewares.validateAdmin,
middlewares.validateCourseIdExists,
coursesControllers.deleteCourseController)

courseRouter.get("/:courseId/users",middlewares.validateToken,middlewares.validateAdmin,coursesControllers.listCourseDeveloper)



export default courseRouter