



// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     })
//   ]
// })

// export {handler as GET , handler as POST}


//--------------------------

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
   
    onError: (error, _, res) => {
      console.error("Error durante la autenticación:", error);
      return res.status(500).end(error.message);
    }
  }
})

export { handler as GET, handler as POST }



