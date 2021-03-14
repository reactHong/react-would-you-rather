import { useState } from "react";
import { Redirect } from "react-router-dom";

function Page404() {
  const [toHome, setToHome] = useState(false);

  if (toHome) {
    return <Redirect to="/" />
  }

  return(
    <div className="errorPageContainer">
      <h1>Page Not Found</h1>
      <div>Unfortunately the page you're looking for doesn't exist (anymore) or there was an error in the link you followed or typed.</div>
      <div>
        <button onClick={() => setToHome(true)}>Go to Homepage</button>
      </div>
    </div>
  );
}

export default Page404;