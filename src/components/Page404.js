
function Page404() {
  return(
    <div className="errorPageContainer">
      <h1>Page Not Found</h1>
      <div>Unfortunately the page you're looking for doesn't exist (anymore) or there was an error in the link you followed or typed.</div>
      <div>
        <button>Go to Homepage</button>
      </div>
    </div>
  );
}

export default Page404;