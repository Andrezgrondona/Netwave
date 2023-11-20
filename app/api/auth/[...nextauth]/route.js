

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
  ],

  secret: process.env.GOOGLE_SECRET,

 
  allowedHosts: [
    'localhost:3000', 
    'netwave-sigma.vercel.app',
  ],
  
});

export {handler as GET , handler as POST}








