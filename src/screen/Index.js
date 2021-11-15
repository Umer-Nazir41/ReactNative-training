import Redux from './Profile/Redux';
import Map from './Profile/Map';
import SignIn from './Auth/SignIn';
import CreateAccount from './Auth/CreateAccount';
import ForgetPassword from './Auth/ForgetPassword';
import Home from './Home/Home';
import UserPost from './UserData/UserPosts';
import UserProfile from './UserData/UserProfile';
import UserDetails from './UserData/UserDetails';
import Splash from './Auth/Splash';
import Camera from './Profile/Camera';
import ContactPage from './Profile/Contact';
import InterceptorLogin from './Interceptor/InterceptorLogin';
import InterceptorSignup from './Interceptor/InterceptorSignup';
import InterceptorUploadContact from './Interceptor/InterceptorCreateContact';
import Crud from './Profile/Crud';

//EXPORT ALL SCREENS FROM SINGLE POINT
const screens = {
  Redux,
  Map,
  SignIn,
  CreateAccount,
  ForgetPassword,
  Home,
  UserPost,
  UserProfile,
  UserDetails,
  Splash,
  Camera,
  ContactPage,
  InterceptorLogin,
  InterceptorSignup,
  InterceptorUploadContact,
  Crud,
};

export default screens;
