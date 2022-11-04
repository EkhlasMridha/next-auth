import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';

export default NextAuth({
  callbacks: {
    // async signIn({ user, account }) {
    //   console.log(user);
    //   if (account?.provider === 'credentials') return true;

    //   return false;
    // },
    async session({ token, session, user }) {
      if (user) {
        (session.user as any).id = user.id;
        (session as any).accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = (user as any).token;
      }
      console.log(token, user);
      return token;
    },
  },

  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProviders({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        let payload = {
          username: credentials?.username,
          password: credentials?.password,
        };
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
        });

        const token = await res.json();

        return token;
      },
    }),
  ],
});
