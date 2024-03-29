import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { PasswordField } from "../components/forms/passwordFiled";
import Header from "../components/navBar/landingHeader";
import { getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import CredentialsError from "../components/Alerts/credentialsError";
export default function App({ csrfToken }) {
  const route = useRouter();
  const error = route.asPath.includes("signin&error=CredentialsSignin");
  // const login = () => {
  //   fetch("/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //       // tools,
  //     }),
  //   }).then((res) => res.json());
  // };
  return (
    <>
      <Header />
      <Container
        maxW="lg"
        py={{
          base: "12",
          md: "24",
        }}
        px={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack
              spacing={{
                base: "2",
                md: "3",
              }}
              textAlign="center"
            >
              <Heading
                size={useBreakpointValue({
                  base: "xs",
                  md: "sm",
                })}
              >
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don&#39;t have an account?</Text>
                <Link href="/signup" passHref>
                  <Button variant="link" colorScheme="blue">
                    Sign up
                  </Button>
                </Link>
              </HStack>
            </Stack>
          </Stack>
          {/* <form method="post" action="/api/auth/callback/credentials"> */}
          <form method="post" action="/api/auth/callback/credentials">
            <Box
              py={{
                base: "0",
                sm: "8",
              }}
              px={{
                base: "4",
                sm: "10",
              }}
              bg={useBreakpointValue({
                base: "transparent",
                sm: "bg-surface",
              })}
              boxShadow={{
                base: "none",
                sm: useColorModeValue("md", "md-dark"),
              }}
              borderRadius={{
                base: "none",
                sm: "xl",
              }}
            >
              <Stack spacing="6">
                <Stack spacing="5">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />
                  {error ? <CredentialsError /> : <></>}
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" name="email" type="email" />
                  </FormControl>
                  <PasswordField />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultIsChecked>Remember me</Checkbox>
                  <Button variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button variant="primary" type="submit">
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  const { req, res } = context;
  console.log("this is context", context);
  const session = await getSession({ req });
  console.log(context);
  if (session && res) {
    console.log("working");
    res.writeHead(302, {
      Location: "/dashboard",
    });
    res.end();
  }
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
