import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import companyLogo from "@assets/images/company-logo.jpeg";
import signIn from "@assets/images/signin.svg";

const SignIn = () => {
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const roleId = localStorage.getItem("roleId");

    if (userId && roleId) {
      if (parseInt(roleId) === 1) {
        navigate("/admin");
      } else if (parseInt(roleId) === 2) {
        navigate("/dealer");
      }
    }
  }, [navigate]);

  const validationSchema = yup.object().shape({
    UserName: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://circlemark.in/AdminService/api/UserLogin/Vailduser",
        data,
        {
          headers: {
            "x-api-key": "7413aea-5e6f-4e2f-b198-f6407413fb3b",
          },
        }
      );

      if (response.data.length > 0) {
        const { UserId, RoleId, UserName } = response.data[0];
        localStorage.setItem("userId", UserId);
        localStorage.setItem("roleId", RoleId);

        if (RoleId === 1) {
          navigate("/admin");
        } else if (RoleId === 2) {
          navigate("/dealer");
        }
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container justify-content-center justify-content-lg-between">
            <Link to="/">
              <img src={companyLogo} alt="logo" width={130} />
            </Link>
            <span className="navbar-text">
              Do not have an account? <a>Signup</a>
            </span>
          </div>
        </nav>
      </div>

      <div className="container mt-100">
        <div className="row-evenly">
          <div className="col-12 col-md-4 order-2 order-md-1 text-center">
            <img src={signIn} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4 order-1 order-md-2">
            <div className="mb-5">
              <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
              <p className="text-secondary">
                Welcome back to FreshCart! Enter your email to get started.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="email"
                    id="UserName"
                    placeholder="UserName"
                    className={`form-control ${
                      errors.UserName ? "is-invalid" : ""
                    }`}
                    {...register("UserName")}
                  />
                  {errors.UserName && (
                    <div className="invalid-feedback">
                      {errors.UserName.message}
                    </div>
                  )}
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a>Forgot password?</a>
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <div>
                  Don’t have an account? <a>Sign Up</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
