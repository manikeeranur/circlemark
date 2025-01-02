import React, { useContext } from "react";
import companyLogo from "@assets/images/company-logo.jpeg";
import ProductTable from "./Dealer/ProductTable";
import { Link } from "react-router-dom";
import { AppContext } from "./Context/AppProvider";
const DealerPage = () => {
  const { user, setUser, theme, setTheme } = useContext(AppContext);
  return (
    <>
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container justify-content-center justify-content-lg-between">
            <Link to="/">
              <img src={companyLogo} alt="logo" width={130} />
            </Link>
            <div className="row-center gap-3 text-secondary">
              <span className="navbar-text"> {user}</span>
              <em className="bi bi-person-circle font-24"></em>
            </div>
          </div>
        </nav>
      </div>
      <div className="container py-5">
        <h1>Welcome to Dealer Page</h1>

        <ProductTable />
      </div>
    </>
  );
};

export default DealerPage;
