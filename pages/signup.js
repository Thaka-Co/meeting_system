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
import * as React from "react";
import Link from "next/link";
import { PasswordField } from "../components/forms/passwordFiled";
import Header from "../components/navBar/landingHeader";
<<<<<<< HEAD
import { getCsrfToken, getSession } from "next-auth/react";
=======
import { getCsrfToken, getSession } from "next-auth/react"

>>>>>>> 2b40437e24f871855c40fa1784b54632fa41e319

export default function App() {
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
                Create your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">You have an account?</Text>
                <Link href="/signin">
                  <Button variant="link" colorScheme="blue">
                    Sign in
                  </Button>
                </Link>
              </HStack>
            </Stack>
          </Stack>

<<<<<<< HEAD
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
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultIsChecked>Remember me</Checkbox>
              </HStack>
              <Stack spacing="6">
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
=======
          <form method="post" action="/api/auth/signup" >

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
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" type="text" name='name' required />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" name='email' required />
                  </FormControl>
                  <PasswordField />
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultIsChecked>Remember me</Checkbox>
                </HStack>
                <Stack spacing="6">
                  <Button variant="primary" type="submit" >Sign up</Button>
                </Stack>
              </Stack>
            </Box>

          </form>


>>>>>>> 2b40437e24f871855c40fa1784b54632fa41e319
        </Stack>
      </Container>
    </>
  );
}


export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
<<<<<<< HEAD
  if (session && res) {
    console.log("working");
    res.writeHead(301, {
      Location: "/",
    });console.log('done');
=======
  console.log(session)
  if (session && res) {
    console.log('working')
    res.writeHead(302, {
      Location: '/'
    });
>>>>>>> 2b40437e24f871855c40fa1784b54632fa41e319
    res.end();
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 2b40437e24f871855c40fa1784b54632fa41e319
}
