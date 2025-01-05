import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formattedDate } from "@components/services/loginservices";
import { AppContext } from "@components/Context/AppProvider";
import ImageCropper from "@components/Common/ImageCropper";
import noImage from "@assets/images/no-image.png";

const schema = yup.object().shape({
  ProductName: yup.string().required("Product Name is required"),
  Offer: yup
    .string()
    .required("Offer is required")
    .matches(/^\d+%$/, "Offer must be a percentage (e.g., '25%')"),
  Size: yup.string().required("Size is required"),
  Type: yup.string().required("Type is required"),
  ItemPackageQty: yup
    .number()
    .required("Quantity is required")
    .positive("Must be a positive number"),
  Colour: yup.string().required("Colour is required"),
  Amount: yup
    .number()
    .required("Amount is required")
    .positive("Must be a positive number"),
  Availability: yup.string().required("Availability is required"),
  Brand: yup.string().required("Brand is required"),
  FrontImageFileName: yup.string().required("Front Image is required"),
  TopImageFileName: yup.string().required("Top Image is required"),
  LeftImageFileName: yup.string().required("Left Image is required"),
  RightImageFileName: yup.string().required("Right Image is required"),
});

const AddProduct = ({ isEdit = false }) => {
  const { UserId, RoleId } = useContext(AppContext);

  const [images, setImages] = useState({
    frontImage: "",
    topImage: "",
    leftImage: "",
    rightImage: "",
  });
  const [modal, setModal] = useState({
    front: false,
    top: false,
    left: false,
    right: false,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      FrontImageFileName: images.frontImage,
      TopImageFileName: images.topImage,
      LeftImageFileName: images.leftImage,
      RightImageFileName: images.rightImage,
    },
  });

  const onCroppedImage = (key, croppedImage) => {
    setImages((prev) => ({ ...prev, [key]: croppedImage }));
    setValue(key, croppedImage, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      RoleId: RoleId || "",
      UserId: UserId || "",
      UpdateTime: formattedDate(new Date()),
      ProductCatergoryID: Date.now(),
    };
    console.log(finalData);
  };

  const renderInput = (id, label, type = "text") => (
    <div className="col-12 col-md mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={label}
        className={`form-control ${errors[id] ? "is-invalid" : ""}`}
        {...register(id)}
      />
      {errors[id] && (
        <div className="invalid-feedback">{errors[id].message}</div>
      )}
    </div>
  );

  const renderImageUploader = (key, label) => (
    <div className="col-12 col-md mb-3">
      <div className="image-preview-wrapper" style={{ position: "relative" }}>
        <div> {label}</div>
        {images[key] ? (
          <div className="position-relative">
            <img
              className="rounded border"
              src={images[key]}
              alt="Preview"
              width="100%"
            />
            {isEdit ? (
              <em
                className="bi bi-pencil position-absolute edit-round bottom-0 end-0 m-3"
                onClick={() => setModal((prev) => ({ ...prev, [key]: true }))}
              ></em>
            ) : null}
          </div>
        ) : (
          <>
            <img
              className="rounded"
              src={noImage}
              alt="No image"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <button
              className="btn btn-outline-secondary mt-2 w-100"
              type="button"
              onClick={() => setModal((prev) => ({ ...prev, [key]: true }))}
            >
              Upload {label}
            </button>
          </>
        )}

        <small className="text-danger">{errors[key]?.message}</small>
      </div>

      {modal[key] && (
        <ImageCropper
          open={modal[key]}
          setOpen={(isOpen) => setModal((prev) => ({ ...prev, [key]: isOpen }))}
          aspect={16 / 9}
          objectFit="contain"
          cropShape="rectangle"
          zoomStep={1}
          onCroppedImage={(croppedImage) => onCroppedImage(key, croppedImage)}
          selectedImage={images[key]}
          header={label}
        />
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-0 p-5">
      <div className="row">
        {renderInput("ProductName", "Product Name")}
        {renderInput("Offer", "Offer (e.g., 25%)")}
      </div>
      <div className="row">
        {renderInput("Size", "Size")}
        {renderInput("Type", "Type")}
      </div>
      <div className="row">
        {renderInput("ItemPackageQty", "Item Package Quantity", "number")}
        {renderInput("Colour", "Colour")}
      </div>
      <div className="row">
        {renderInput("Amount", "Amount", "number")}
        <div className="col-12 col-md mb-3">
          <label htmlFor="Availability">Availability</label>
          <select
            id="Availability"
            className={`form-control ${
              errors.Availability ? "is-invalid" : ""
            }`}
            {...register("Availability")}
          >
            <option value="">Select Availability</option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
          {errors.Availability && (
            <div className="invalid-feedback">
              {errors.Availability.message}
            </div>
          )}
        </div>
      </div>
      <div className="row">{renderInput("Brand", "Brand")}</div>
      <div className="row">
        {renderImageUploader("FrontImageFileName", "Front Image")}
        {renderImageUploader("TopImageFileName", "Top Image")}
        {renderImageUploader("LeftImageFileName", "Left Image")}
        {renderImageUploader("RightImageFileName", "Right Image")}
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
