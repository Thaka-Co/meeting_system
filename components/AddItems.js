import React from "react";
import {
  Flex,
  Text,
  Box,
  VisuallyHidden,
  Stack,
  Button,
  useColorModeValue,
  Icon,
  chakra,
  Input,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
function AddItems(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const router = useRouter();
  const { locale } = router;
  let t=locale== 0 ? en : ar;
  // t = locale === 0 ? en : ar;
  return (
    <div>
      <Heading m={10}>{t.addItem}</Heading>
      <Box bgColor={"white"} p={15} m={5} borderRadius={7}>
        {/* <Text fontSize="lg" color={textColor} fontWeight="bold">
          Meeting items
        </Text> */}
        {/*  */}
        <Input placeholder={t.title} mb={4}></Input>
        <Flex
          mt={1}
          justify="center"
          px={6}
          pt={5}
          pb={6}
          borderWidth={2}
          borderColor={useColorModeValue("gray.300", "gray.500")}
          borderStyle="dashed"
          rounded="md"
        >
          <Stack spacing={1} textAlign="center">
            <Icon
              mx="auto"
              boxSize={12}
              color={useColorModeValue("gray.400", "gray.500")}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Icon>
            <Flex
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
              alignItems="baseline"
            >
              <chakra.label
                htmlFor="file-upload"
                cursor="pointer"
                rounded="md"
                fontSize="md"
                color={useColorModeValue("brand.600", "brand.200")}
                pos="relative"
                _hover={{
                  color: useColorModeValue("brand.400", "brand.300"),
                }}
              >
                <span>{t.uploadFile}</span>
                <VisuallyHidden>
                  <input id="file-upload" name="file-upload" type="file" />
                </VisuallyHidden>
              </chakra.label>
              <Text pl={1}>{t.dragDrop}</Text>
            </Flex>
            <Text
              fontSize="xs"
              color={useColorModeValue("gray.500", "gray.50")}
            >
              PNG, JPG, GIF up to 10MB
            </Text>
          </Stack>
        </Flex>
        {/*  */}
        <Button mt={4}>{t.addItem}</Button>
        <Button ml={4} mt={4}>
          {t.delayedItem}
        </Button>
      </Box>
    </div>
  );
}

export default AddItems;
