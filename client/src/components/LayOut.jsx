import { Outlet } from "react-router-dom";

//Outlet component is used to render the child route's components
const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
