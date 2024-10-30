import React from "react";
import Nevbar from "./Nevbar";

export default function MasterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Nevbar />
      {children}
    </div>
  );
}
