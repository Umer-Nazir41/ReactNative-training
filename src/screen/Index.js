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
import ContactPage from './Profile/Contacts';
import Camera from './Profile/Camera';
import InterceptorScreen from '../screen/Interceptor/Interceptor';
import InterceptorLogin from '../screen/Interceptor/InterceptorLogin';
import InterceptorUploadContact from '../screen/Interceptor/InterceptorContact';

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
  ContactPage,
  Camera,
  InterceptorScreen,
  InterceptorLogin,
  InterceptorUploadContact,
};

export default screens;
