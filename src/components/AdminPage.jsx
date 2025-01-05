import React, { useContext } from "react";
import companyLogo from "@assets/images/company-logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Context/AppProvider";
import { handleLogout } from "./services/loginservices";

const AdminPage = () => {
  const navigate = useNavigate();
  const { Name } = useContext(AppContext);
  return (
    <>
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container justify-content-center justify-content-lg-between">
            <div className="d-flex align-items-center gap-3">
              <Link to="/">
                <img src={companyLogo} alt="logo" width={130} />
              </Link>
              <div className="font-14 fw-bold">{Name}</div>
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleLogout(navigate)}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
      <div className="container py-3">
        <h5 className="fw-bold">Welcome to Admin Page</h5>
      </div>
    </>
  );
};

export default AdminPage;
