import Cookies from "js-cookie";
import axios from "axios";

function jwtInterceptor() {
  //call fuction everytime sending request
  axios.interceptors.request.use((req) => {
    const hasToken = Boolean(Cookies.get("authToken"));

    if (hasToken) {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${Cookies.get("authToken")}`,
      };
    }

    return req;
  });

  axios.interceptors.response.use(
    //The success handler is not modifying the response
    (req) => {
      return req;
    },
    //the error handler
    (error) => {
      if (
        error.response.status === 401 &&
        error.response.statusText === "Unauthorized"
      ) {
        //cookie remove
        Cookies.remove("authToken");
        localStorage.removeItem("user");
        window.location.replace("/login");
      }
    }
  );
}

export default jwtInterceptor;
