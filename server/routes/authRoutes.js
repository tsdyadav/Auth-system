import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendRestotp, sendVerifyOtp, verifyEmail } from "../controllers/authController.js";
import userAuth from '../middleware/userAuth.js';



const authRouter = express.Router();


authRouter.post('/register',register);// when ever we hit the '/register' the it call register
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);
authRouter.get('/is-auth',userAuth,isAuthenticated);
authRouter.post('/send-reset-otp', sendRestotp);///-----------change sendRestotp to sendRESETopt
authRouter.post('/reset-password',resetPassword);





export default authRouter;
