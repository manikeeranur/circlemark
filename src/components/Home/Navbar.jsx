import React from "react";
import companyLogo from "@assets/images/company-logo.jpeg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="border-bottom ">
        <div className="py-3">
          <div className="container">
            <div className="row w-100 align-items-center gx-lg-2 gx-0">
              <div className="col-xxl-2 col-lg-3 ">
                <a className="navbar-brand d-none d-lg-block">
                  <img src={companyLogo} alt="logo" width={130} />
                </a>
                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <Link to="/" className="navbar-brand">
                    <img src={companyLogo} alt="logo" width={130} />
                  </Link>

                  <div className="d-flex align-items-center lh-1">
                    <div className="list-inline me-4">
                      <div className="list-inline-item">
                        <a
                          href="#!"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#userModal"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </a>
                      </div>
                      <div className="list-inline-item">
                        <a
                          className="text-muted position-relative "
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          href="#offcanvasExample"
                          role="button"
                          aria-controls="offcanvasRight"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-shopping-bag"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                            1
                            <span className="visually-hidden">
                              unread messages
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>

                    <button
                      className="navbar-toggler collapsed"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#navbar-default"
                      aria-controls="navbar-default"
                      aria-label="Toggle navigation"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="bi bi-text-indent-left text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-5 d-none d-lg-block">
                <form>
                  <div className="input-group ">
                    <input
                      className="form-control rounded"
                      type="search"
                      placeholder="Search for products"
                    />
                    <span className="input-group-append">
                      <button
                        className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                        type="button"
                      >
                        <em className="bi bi-search"></em>
                      </button>
                    </span>
                  </div>
                </form>
              </div>

              <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block ms-auto">
                <div className="list-inline">
                  <div className="list-inline-item me-4">
                    <a className="text-muted position-relative">
                      <em className="bi bi-heart-fill font-24 text-secondary"></em>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        5
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>
                  <div className="list-inline-item me-4">
                    <Link to="/signin" className="text-secondary">
                      <em className="bi bi-person-circle font-24"></em>
                    </Link>
                  </div>
                  <div className="list-inline-item">
                    <a
                      className="text-muted position-relative "
                      role="button"
                      aria-controls="offcanvasRight"
                    >
                      <em className="bi bi-bag-check-fill font-24"></em>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        12
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4 "
          aria-label="Offcanvas navbar large"
        >
          <div className="container">
            <div
              className="offcanvas offcanvas-start"
              tabindex="-1"
              id="navbar-default"
              aria-labelledby="navbar-defaultLabel"
            >
              <div className="offcanvas-header pb-1">
                <a>
                  <img
                    src={companyLogo}
                    alt="eCommerce HTML Template"
                    width={130}
                  />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="d-block d-lg-none mb-4">
                  <form action="#">
                    <div className="input-group ">
                      <input
                        className="form-control rounded"
                        type="search"
                        placeholder="Search for products"
                      />
                      <span className="input-group-append">
                        <button
                          className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>

                <div className="dropdown me-3 d-lg-block">
                  <button
                    className="btn btn-primary px-6 "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-grid"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    </span>{" "}
                    All Departments
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item">Dairy, Bread &amp; Eggs</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Snacks &amp; Munchies</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Fruits &amp; Vegetables</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Cold Drinks &amp; Juices</a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        Breakfast &amp; Instant Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">Bakery &amp; Biscuits</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Chicken, Meat &amp; Fish</a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="navbar-nav align-items-center ">
                    <li className="nav-item dropdown w-100 w-lg-auto">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item">Home 1</a>
                        </li>
                        <li>
                          <a className="dropdown-item">Home 2</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown w-100 w-lg-auto">
                      <a
                        className="nav-link dropdown-toggle"
                        type="button"
                        id="storeMenu"
                        data-bs-toggle="dropdown"
                        aria-bs-haspopup="true"
                        aria-bs-expanded="false"
                      >
                        Store
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-bs-labelledby="storeMenu"
                      >
                        <a className="dropdown-item">Store List</a>
                        <a className="dropdown-item">Store Grid</a>
                        <a className="dropdown-item">Store Single</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown w-100 w-lg-auto">
                      <a
                        className="nav-link dropdown-toggle"
                        type="button"
                        id="shopMenu"
                        data-bs-toggle="dropdown"
                        aria-bs-haspopup="true"
                        aria-bs-expanded="false"
                      >
                        Shop
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-bs-labelledby="shopMenu"
                      >
                        <a className="dropdown-item">Shop 1</a>
                        <a className="dropdown-item">Shop 2</a>
                        <a className="dropdown-item">Shop 3</a>
                      </div>
                    </li>

                    <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mega menu
                      </a>
                      <div className="dropdown-menu pb-0 col-md-8 ms-md-5">
                        <div className="row p-2 p-lg-4">
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <h6 className="text-primary ps-3">
                              Dairy, Bread &amp; Eggs
                            </h6>
                            <a className="dropdown-item">Butter</a>
                            <a className="dropdown-item">Milk Drinks</a>
                            <a className="dropdown-item">Curd &amp; Yogurt</a>
                            <a className="dropdown-item">Eggs</a>
                            <a className="dropdown-item">Buns &amp; Bakery</a>
                            <a className="dropdown-item">Cheese</a>
                            <a className="dropdown-item">Condensed Milk</a>
                            <a className="dropdown-item">Dairy Products</a>
                          </div>
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <h6 className="text-primary ps-3">
                              Dairy, Bread &amp; Eggs
                            </h6>
                            <a className="dropdown-item">Butter</a>
                            <a className="dropdown-item">Milk Drinks</a>
                            <a className="dropdown-item">Curd &amp; Yogurt</a>
                            <a className="dropdown-item">Eggs</a>
                            <a className="dropdown-item">Buns &amp; Bakery</a>
                            <a className="dropdown-item">Cheese</a>
                            <a className="dropdown-item">Condensed Milk</a>
                            <a className="dropdown-item">Dairy Products</a>
                          </div>
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <h6 className="text-primary ps-3">
                              Dairy, Bread &amp; Eggs
                            </h6>
                            <a className="dropdown-item">Butter</a>
                            <a className="dropdown-item">Milk Drinks</a>
                            <a className="dropdown-item">Curd &amp; Yogurt</a>
                            <a className="dropdown-item">Eggs</a>
                            <a className="dropdown-item">Buns &amp; Bakery</a>
                            <a className="dropdown-item">Cheese</a>
                            <a className="dropdown-item">Condensed Milk</a>
                            <a className="dropdown-item">Dairy Products</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
