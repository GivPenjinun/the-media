import Cookies from "js-cookie";
import axios from "axios";

function jwtInterceptor() {
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
    (req) => {
      return req;
    },
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
