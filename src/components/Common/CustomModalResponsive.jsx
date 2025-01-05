// import React from "react";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import styled from "@emotion/styled";

// const StyledDialogTitle = styled(DialogTitle)({
//   "&": {
//     padding: 16,
//     borderBottom: "1px solid var(--bs-gray-300)",
//   },
// });

// const StyledDialogFooter = styled(DialogActions)({
//   "&": {
//     padding: 16,
//     borderTop: "1px solid var(--bs-gray-300)",
//   },
// });

// function CustomModalResponsive({
//   open,
//   setOpen,
//   handleClose,
//   headerComponent,
//   footerComponent,
//   width,
//   children,
//   className = "",
//   backDropClose = true,
//   disablePortal = false,
// }) {
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleDialogClose = (event, reason) => {
//     if (backDropClose === false && reason === "backdropClick") return;
//     handleClose ? handleClose() : setOpen?.(false);
//   };

//   return (
//     <Dialog
//       className={`custom-modal-responsive`}
//       fullScreen={fullScreen}
//       open={open}
//       onClose={handleDialogClose}
//       aria-labelledby="responsive-dialog-title"
//       fullWidth
//       sx={{
//         ...(width && !fullScreen
//           ? {
//               "& .MuiDialog-paperFullWidth": {
//                 width: width,
//                 maxWidth: width,
//               },
//             }
//           : {}),
//       }}
//       disablePortal={disablePortal}
//     >
//       {headerComponent && (
//         <StyledDialogTitle
//           id="responsive-dialog-title"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {headerComponent}
//         </StyledDialogTitle>
//       )}
//       <DialogContent
//         className={`p-0 ${className}`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </DialogContent>
//       {footerComponent && (
//         <StyledDialogFooter onClick={(e) => e.stopPropagation()}>
//           {footerComponent}
//         </StyledDialogFooter>
//       )}
//     </Dialog>
//   );
// }

// export default CustomModalResponsive;

import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";

const StyledDialogTitle = styled(DialogTitle)(`
  padding: 16px;
  border-bottom: 1px solid var(--bs-gray-300);
`);

const StyledDialogFooter = styled(DialogActions)(`
  padding: 16px;
  border-top: 1px solid var(--bs-gray-300);
`);

function CustomModalResponsive({
  open,
  setOpen,
  handleClose,
  headerComponent,
  footerComponent,
  width,
  children,
  className = "",
  backDropClose = true,
  disablePortal = false,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDialogClose = (event, reason) => {
    if (backDropClose === false && reason === "backdropClick") return;
    handleClose ? handleClose() : setOpen?.(false);
  };

  return (
    <Dialog
      className={`custom-modal-responsive`}
      fullScreen={fullScreen}
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="responsive-dialog-title"
      fullWidth
      sx={{
        ...(width && !fullScreen
          ? {
              "& .MuiDialog-paperFullWidth": {
                width: width,
                maxWidth: width,
              },
            }
          : {}),
        // Add a style rule to make the child component full screen when fullScreen is true
        ...(fullScreen && {
          "& .MuiDialog-paper": {
            height: "100vh", // Make dialog take full height in full screen
            maxHeight: "100vh", // Ensure max height is 100% of the viewport
            width: "100%", // Make dialog full width
          },
          "& .MuiDialogContent-root": {
            height: "calc(100vh - 120px)", // Adjust based on header/footer height
            overflowY: "auto", // Allow scrolling if content overflows
          },
        }),
      }}
      disablePortal={disablePortal}
    >
      {headerComponent && (
        <StyledDialogTitle
          id="responsive-dialog-title"
          onClick={(e) => e.stopPropagation()}
        >
          {headerComponent}
        </StyledDialogTitle>
      )}
      <DialogContent
        className={`p-0 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </DialogContent>
      {footerComponent && (
        <StyledDialogFooter onClick={(e) => e.stopPropagation()}>
          {footerComponent}
        </StyledDialogFooter>
      )}
    </Dialog>
  );
}

export default CustomModalResponsive;
