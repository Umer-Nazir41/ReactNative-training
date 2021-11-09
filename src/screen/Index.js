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
};

export default screens;
