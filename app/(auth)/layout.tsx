import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import Navbar from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SessionProvider from "../SessionProvider";

// Enum matching your Prisma schema
enum UserRole {
  USER = "USER",
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN",
}

// Define role-based routing
const roleRoutes: Record<UserRole, string> = {
  [UserRole.USER]: "/register-success",
  [UserRole.CUSTOMER]: "/",
  [UserRole.ADMIN]: "/",
};

function toUserRole(role: string): UserRole | undefined {
  return Object.values(UserRole).includes(role as UserRole)
    ? (role as UserRole)
    : undefined;
}

export default async function RoleBasedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, session } = await validateRequest();

  if (user) {
    const userRole = toUserRole(user.role);

    if (userRole && userRole in roleRoutes) {
      redirect(roleRoutes[userRole]);
    } else {
      console.warn(`Unrecognized user role: ${user.role}`);
      redirect("/login");
    }
  }

  return (
    <SessionProvider value={{ user, session }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </div>
    </SessionProvider>
  );
}
