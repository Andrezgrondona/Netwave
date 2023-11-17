
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

//--------------------------------------------------
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
  ],

 
  allowedHosts: [
    'localhost:3000', 
    'netwave-a6c3yygdh-andrezgrondona.vercel.app', // ✅ Agregar dominio de producción
  ],
  
});

export {handler as GET , handler as POST}








