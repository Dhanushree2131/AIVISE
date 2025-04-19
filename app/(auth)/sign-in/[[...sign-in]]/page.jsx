// app/sign-in/page.tsx or wherever you're rendering Clerk's SignIn

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignIn />
    </div>
  );
}
