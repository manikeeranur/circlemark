import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="border-bottom ">
        <div className="py-5">
          <div className="container">
            <div className="row w-100 align-items-center gx-lg-2 gx-0">
              <div className="col-xxl-2 col-lg-3 ">
                <a className="navbar-brand d-none d-lg-block" href="index.html">
                  <img
                    src="assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
                  />
                </a>
                <div className="d-flex justify-content-between w-100 d-lg-none">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="assets/images/logo/freshcart-logo.svg"
                      alt="eCommerce HTML Template"
                    />
                  </a>

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

              <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block ms-auto">
                <div className="list-inline">
                  <div className="list-inline-item me-5">
                    <a className="text-muted position-relative">
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
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        5
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>
                  <div className="list-inline-item me-5">
                    <a className="text-muted">
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
                    src="assets/images/logo/freshcart-logo.svg"
                    alt="eCommerce HTML Template"
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
                        href="#"
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

                    <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Mega menu
                      </a>
                      <div className="dropdown-menu pb-0">
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
                              Breakfast &amp; Instant Food
                            </h6>
                            <a className="dropdown-item">Breakfast Cereal</a>
                            <a className="dropdown-item">
                              Noodles, Pasta &amp; Soup
                            </a>
                            <a className="dropdown-item">Frozen Veg Snacks</a>
                            <a className="dropdown-item">
                              Frozen Non-Veg Snacks
                            </a>
                            <a className="dropdown-item">Vermicelli</a>
                            <a className="dropdown-item">Instant Mixes</a>
                            <a className="dropdown-item">Batter</a>
                            <a className="dropdown-item">Fruit and Juices</a>
                          </div>
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <h6 className="text-primary ps-3">
                              Cold Drinks &amp; Juices
                            </h6>
                            <a className="dropdown-item">Soft Drinks</a>
                            <a className="dropdown-item">Fruit Juices</a>
                            <a className="dropdown-item">Coldpress</a>
                            <a className="dropdown-item">
                              Water &amp; Ice Cubes
                            </a>
                            <a className="dropdown-item">Soda &amp; Mixers</a>
                            <a className="dropdown-item">Health Drinks</a>
                            <a className="dropdown-item">Herbal Drinks</a>
                            <a className="dropdown-item">Milk Drinks</a>
                          </div>
                          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                            <div className="card border-0">
                              <img
                                src="assets/images/banner/menu-banner.jpg"
                                alt="eCommerce HTML Template"
                                className="img-fluid"
                              />
                              <div className="position-absolute ps-6 mt-8">
                                <h5 className=" mb-0 ">
                                  Dont miss this <br />
                                  offer today.
                                </h5>
                                <a
                                  href="#"
                                  className="btn btn-primary btn-sm mt-3"
                                >
                                  Shop Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
                      <a
                        className="nav-link"
                        href="#"
                        id="navbarDropdownDocs"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Docs
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-lg"
                        aria-labelledby="navbarDropdownDocs"
                      >
                        <a className="dropdown-item align-items-start">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-file-text text-primary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                            </svg>
                          </div>
                          <div className="ms-3 lh-1">
                            <h6 className="mb-1">Documentations</h6>
                            <p className="mb-0 small">
                              Browse the all documentation
                            </p>
                          </div>
                        </a>
                        <a className="dropdown-item align-items-start">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-layers text-primary"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"></path>
                            </svg>
                          </div>
                          <div className="ms-3 lh-1">
                            <h6 className="mb-1">
                              Changelog{" "}
                              <span className="text-primary ms-1">v1.2.0</span>
                            </h6>
                            <p className="mb-0 small">See what's new</p>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
