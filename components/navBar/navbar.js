import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Select,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import React from "react";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FaBell, FaSignOutAlt, FaRss } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdDashboard, MdKeyboardArrowRight } from "react-icons/md";
import { ItemContent } from "../ItemContent";
import Link from "next/link";
import { dashboardTableData } from "../../Faker/general";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
export default function MainNavBar(props) {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const sidebar = useDisclosure();
  const { locale } = router;
  const t = locale == "en" ? en : ar;
  let ditLang = locale == "en" ? "ltr" : "rtl";
  const selectLanguage = (e) => {
    console.log(e.target.value);
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
    // localStorage.setItem("language", e.target.value);
  };
  const clickHandler = () => {
    const dispatch = useDispatch();
    dispatch(logout({ token: "", id: "" }));
    signOut({ callbackUrl: "/signin" });
  };

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.900", "gray.200");
  const iconHover = useColorModeValue("gray.600", "gray.300");
  const sidebarBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("inherit", "gray.700");
  const textColor = useColorModeValue("brand.500", "white");
  const flexColor = useColorModeValue("inherit", "gray.400");
  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    // sidebar icons and text style left nav
    return (
      <Flex
        color={flexColor}
        dir={ditLang}
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        _hover={{
          bg: bg,
          color: color,
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: iconHover,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      dir={ditLang}
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={sidebarBg}
      borderColor={borderColor}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text fontSize="2xl" ml="2" color={textColor} fontWeight="semibold">
          حوكمة
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link href="/dashboard" passHref>
          <NavItem icon={MdDashboard}>{t.dashboard}</NavItem>
        </Link>
        <Link href="/meeting" passHref>
          <NavItem icon={FaRss}>{t.addMeeting}</NavItem>
        </Link>
        {/* <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
        <NavItem icon={AiFillGift}>Changelog</NavItem> */}
        <Link href="/setting" passHref>
          <NavItem icon={BsGearFill}>{t.setting}</NavItem>
        </Link>

        <NavItem onClick={clickHandler} icon={FaSignOutAlt}>
          {t.signout}
        </NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      dir={ditLang}
      as="section"
      // bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={sidebarBg}
          borderBottomWidth="1px"
          borderColor={borderColor}
          h="14"
        >
          <AutoComplete rollNavigation>
            <AutoCompleteInput
              variant="filled"
              placeholder={t.search}
              autoFocus
            />
            <AutoCompleteList>
              {dashboardTableData.map((option, oid) => (
                <AutoCompleteItem
                  key={`option-${oid}`}
                  value={option.name}
                  textTransform="capitalize"
                >
                  {option.name}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>

          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{ base: "none", md: "flex" }}
          ></InputGroup>

          <Flex align="center">
            <Menu>
              <MenuButton>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <Select
                w={100}
                m={4}
                onChange={selectLanguage}
                defaultValue={locale}
              >
                <option value={"en"}>English</option>
                <option value={"ar"}>Arabic</option>
              </Select>
              </MenuButton>
              {/* <MenuButton>
                <Icon color="gray.500" as={FaBell} cursor="pointer" />
              </MenuButton> */}
              {/* <MenuList p="16px 8px">
                <Flex flexDirection="column">
                  <MenuItem borderRadius="8px" mb="10px">
                    <ItemContent
                      time="13 minutes ago"
                      info="AT 12 PM"
                      boldInfo="Meeting"
                      aName="Alicia"
                      aSrc={"avatar1"}
                    />
                  </MenuItem>
                  <MenuItem borderRadius="8px" mb="10px">
                    <ItemContent
                      time="2 days ago"
                      info="Due Date"
                      boldInfo="Task"
                      aName="Josh Henry"
                      aSrc={"avatar2"}
                    />
                  </MenuItem>
                  <MenuItem borderRadius="8px">
                    <ItemContent
                      time="3 days ago"
                      info="you missing a task"
                      boldInfo="Uncomplated Task"
                      aName="Kara"
                      aSrc={"avatar3"}
                    />
                  </MenuItem>
                </Flex>
              </MenuList> */}
            </Menu>
            <Avatar ml="4" size="sm" name="Solid" src="" cursor="pointer" />
          </Flex>
        </Flex>
        <Box as="main" p="4" {...props} />{" "}
      </Box>
    </Box>
  );
}
