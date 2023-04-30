import Splash from '../../screens/auth/splash/Splash';
import Login from '../../screens/auth/login/Login';
import SignUp from '../../screens/auth/signUp/SignUp';
import StarScreen from '../../screens/auth/startScreen/StarScreen';
import Screens from '../../config/Screens';
import IntroScreen from '../../screens/auth/introScreen/IntroScreen';
import VerifyEmail from '../../screens/auth/VerifyEmail/VerifyEmail';
import CreateNewPassword from '../../screens/auth/CreateNewPassword/CreateNewPassword';
import ForgotPassword from '../../screens/auth/forgotpassword/ForgotPassword';
import PasswordSuccess from '../../screens/auth/PasswordSuccess.js/PasswordSuccess';

export const authRoutes = [
  {
    name: Screens.splash,
    component: Splash,
  },
  {
    name: Screens.introScreen,
    component: IntroScreen,
  },
  {
    name: Screens.startScreen,
    component: StarScreen,
  },
  {
    name: Screens.login,
    component: Login,
  },
  {
    name: Screens.SignUp,
    component: SignUp,
  },
  {
    name: Screens.verifyEmail,
    component: VerifyEmail,
  },
  {
    name: Screens.ForgotPassword,
    component: ForgotPassword,
  },
  {
    name: Screens.CreateNewPassword,
    component: CreateNewPassword,
  },
  {
    name: Screens.PasswordSuccess,
    component: PasswordSuccess,
  },
];
