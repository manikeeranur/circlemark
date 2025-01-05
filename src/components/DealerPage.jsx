import React, { useContext, useState } from "react";
import companyLogo from "@assets/images/company-logo.jpeg";
import ProductTable from "./Dealer/ProductTable";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "./Context/AppProvider";
import { handleLogout } from "./services/loginservices";
import AddProduct from "./Dealer/Product/AddProduct";
import CustomModalResponsive from "./Common/CustomModalResponsive";
import { Fullscreen } from "@mui/icons-material";

const DealerPage = () => {
  const [addProductModal, setAddProductModal] = useState(false);
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
      <Link to="addproduct" className="btn btn-primary btn-sm m-5 mb-0">
        Add Product
      </Link>

      {/* <div className="container py-3">
        <div className="row-between mb-3">
          <h5 className="fw-bold">Welcome to Dealer Page</h5>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setAddProductModal(true)}
          >
            Add Product
          </button>
        </div>
        <ProductTable />

        {addProductModal && (
          <CustomModalResponsive
            open={addProductModal}
            setOpen={setAddProductModal}
            width="80%"
            headerComponent={
              <div className="modal-header">
                <div className="header">Add Product</div>
                <i
                  className="bi bi-x-lg"
                  style={{ cursor: "pointer" }}
                  onClick={() => setAddProductModal(false)}
                ></i>
              </div>
            }
          >
            <div className="modal-body p-3">
              <AddProduct />
            </div>
          </CustomModalResponsive>
        )}
      </div> */}

      <Outlet />
    </>
  );
};

export default DealerPage;
