import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/login", AuthControllers.credentialsLogin)
router.post("/refresh-token", AuthControllers.getNewAccessToken)
router.post("/logout", AuthControllers.logout)
router.get("/me", checkAuth(), AuthControllers.getMe);


export const AuthRoutes = router;