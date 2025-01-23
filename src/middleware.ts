import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Ensure that auth checks are performed on all routes except public routes
  publicRoutes: ["/", "/about", "/services", "/contact", "/donate", "/api/clerk-webhook"],
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

