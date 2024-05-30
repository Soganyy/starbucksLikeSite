import SideBar from "@/Components/SideBar";
import { getDisplayName } from "next/dist/shared/lib/utils";

export default function MenuLayout({ children }) {
  console.log
  return (
    <div style={{ display: "flex", flexWrap: "wrap"}}>
      <SideBar />
      <main style={{maxWidth: "70%"}}>{children}</main>
    </div>
  );
}
