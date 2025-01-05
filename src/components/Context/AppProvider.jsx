import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const UserId = localStorage.getItem("userId");
  const RoleId = localStorage.getItem("roleId");
  const Name = localStorage.getItem("name");
  return (
    <AppContext.Provider value={{ Name, UserId, RoleId }}>
      {children}
    </AppContext.Provider>
  );
};
