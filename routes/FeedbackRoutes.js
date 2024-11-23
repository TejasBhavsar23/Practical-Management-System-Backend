import { createAdmin, getAllAdmin } from "../controllers/AdminController.js";
import { createUser, roleCheck } from "../controllers/CommonController.js";
import express from "express";

import { getAllStudent, createStudent } from "../controllers/StudentController.js";
import { createTeacher, getAllTeacher } from "../controllers/TeacherController.js";
import { createSubject, getAllSubject } from "../controllers/SubjectController.js";
import { isAdmin, isAdminTeacher, isTeacher } from "../middleware/auth.js";
import {
  createPractical,
  enrollStudentInPractical,
  getAllPracticals,
} from "../controllers/PracticalController.js";

const router = express.Router();

//Admin
router.post("/createAdmin", createAdmin);

router.get("/getAllAdmin", getAllAdmin);

router.post("/createSubject", isAdmin, createSubject);
router.get("/getAllSubject", getAllSubject);

//Student
router.post("/createStudent", createStudent);

router.get("/getAllStudent", getAllStudent, isAdminTeacher);

//teacher
router.post("/createTeacher", createTeacher);
router.get("/getTeacher", getAllTeacher);

//common
router.get("/roleCheck", roleCheck);
router.post("/createUser", createUser);

//Pratical
router.post("/createPractical", createPractical, isTeacher);
router.get("/practicals/get", getAllPracticals);
router.post("/practicals/enroll", enrollStudentInPractical);

export default router;
