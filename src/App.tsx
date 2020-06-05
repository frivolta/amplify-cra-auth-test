import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

const App: React.FC = () => {
  React.useEffect(()=>{
    console.log(Auth.currentAuthenticatedUser())
  },[])
  return (
    <div className="App">
          <AmplifySignOut />
    My App
    </div>
  );
}

export default withAuthenticator(App);
