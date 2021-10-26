import Profile from './Profile/Profile';
import Contact from './Profile/Contact';
import SignIn from './Auth/SignIn';
import CreateAccount from './Auth/CreateAccount';
import ForgetPassword from './Auth/ForgetPassword';
import Home from './Home';

//Export all pages from a single point
const screens = {
  Profile,
  Contact,
  SignIn,
  CreateAccount,
  ForgetPassword,
  Home,
};

export default screens;
