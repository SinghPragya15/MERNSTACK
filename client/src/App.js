import { GoogleOAuthProvider} from '@react-oauth/google';
import Messenger from "./Components/Messenger";
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId = '131882108635-hffdvu2irhpq9laq4867nh0mh5fjj23b.apps.googleusercontent.com';
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
