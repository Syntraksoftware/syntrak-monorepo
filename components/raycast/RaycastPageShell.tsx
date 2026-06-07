import RaycastNavbar from "./RaycastNavbar";
import RaycastFooter from "./RaycastFooter";

export default function RaycastPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="raycast-site min-h-screen">
      <RaycastNavbar />
      <main>{children}</main>
      <RaycastFooter />
    </div>
  );
}
