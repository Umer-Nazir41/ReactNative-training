import Profile from './Profile/Profile';
import Contact from './Profile/Contact';
import SignIn from './Auth/SignIn';
import CreateAccount from './Auth/CreateAccount';
import ForgetPassword from './Auth/ForgetPassword';
import Home from './Home';
import UserPost from './UserData/UserPosts';
import UserProfile from './UserData/UserProfile';
import UserDetails from './UserData/UserDetails';

//Export all pages from a single point
const screens = {
  Profile,
  Contact,
  SignIn,
  CreateAccount,
  ForgetPassword,
  Home,
  UserPost,
  UserProfile,
  UserDetails,
};

export default screens;
