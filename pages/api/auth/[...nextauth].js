import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import registerUser from "../../../lib/services/user/registerUser"
import Users from '../../../lib/models/user/userModel'
export default NextAuth({

  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "jsmith"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },

      async authorize(credentials, req) {
        const data = await Users.find({})
        console.log( credentials.email)
        console.log( credentials.password)
        // console.log(data)
        // registerUser('ali','ali@gg.com','1234')

        const user = {
          id: data[0].id,
          name: data[0].name,
          email: data[0].email
        }
        if (credentials.email === data[0].email && credentials.password === data[0].password) {
        return user
        }
        return null
      }
    })
  ],
  callbacks: {
    jwt: async ({
      token,
      user
    }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: ({
      session,
      token
    }) => {
      if (token) {
        session.id = token.id
      }
      return session
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
  pages: {
    signIn:'/signin'
  }
})