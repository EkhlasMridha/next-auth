import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

export default NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'credentials') return true;

      return false;
    },

    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: "jwt-secret",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProviders({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let payload = {
          username: credentials?.username,
          password: credentials?.password,
        };
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        });

        const token = await res.json();

        return token;
      },
    }),
  ],
});
