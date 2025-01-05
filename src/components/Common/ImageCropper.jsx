import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Slider } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import CustomModalResponsive from "./CustomModalResponsive";

// Helper function to create an image element from a URL
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

// Helper function to crop the image and return it as a Base64 string
const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("Failed to get canvas context");
    return null;
  }

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return canvas.toDataURL("image/jpeg");
};

const ImageCropper = ({
  open,
  setOpen,
  aspect = 4 / 3,
  cropShape = "rect",
  objectFit = "contain",
  minZoom = 1,
  maxZoom = 3,
  zoomStep = 0.1,
  onCroppedImage,
  selectedImage,
  header,
}) => {
  const [image, setImage] = useState(selectedImage || "");
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(minZoom);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropImage = async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImg = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImg);
      if (onCroppedImage) onCroppedImage(croppedImg);
      setOpen(false);
    } catch (error) {
      console.error("Crop image error:", error);
    }
  };

  const handleToggleZoom = (type, value) => {
    setZoom((zoom) =>
      type === "INC"
        ? Math.min(zoom + value, maxZoom)
        : Math.max(zoom - value, minZoom)
    );
  };

  return (
    <>
      <CustomModalResponsive
        open={open}
        setOpen={setOpen}
        headerComponent={
          <div className="modal-header">
            <div className="header">{header ? header : "Crop Image"}</div>
            <i
              className="bi bi-x-lg"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
            ></i>
          </div>
        }
      >
        <div className="modal-body p-3">
          <div className="upload-image">
            <input
              className="form-control"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          <div
            style={{
              position: "relative",
              height: "300px",
              width: "80%",
              marginTop: "20px",
              marginInline: "auto",
            }}
          >
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape={cropShape}
              objectFit={objectFit}
            />
          </div>

          {image && (
            <div className="row-center gap-3 my-3">
              <button
                onClick={() => handleToggleZoom("DEC", zoomStep)}
                className="btn btn-secondary btn-sm"
              >
                <Remove />
              </button>
              <Slider
                value={zoom}
                min={minZoom}
                max={maxZoom}
                step={zoomStep}
                onChange={(e, value) => setZoom(Number(value))}
                style={{ width: "200px" }}
              />
              <button
                onClick={() => handleToggleZoom("INC", zoomStep)}
                className="btn btn-secondary btn-sm"
              >
                <Add />
              </button>
            </div>
          )}
          {image && (
            <div className="d-flex justify-content-end mt-3">
              <button onClick={handleCropImage} className="btn btn-primary">
                Crop Image
              </button>
            </div>
          )}

          {croppedImage && (
            <div style={{ marginTop: "20px" }}>
              <h3>Cropped Image:</h3>
              <img
                src={croppedImage}
                alt="Cropped"
                style={{ maxWidth: "100%", maxHeight: "400px" }}
              />
            </div>
          )}
        </div>
      </CustomModalResponsive>
    </>
  );
};

export default ImageCropper;
