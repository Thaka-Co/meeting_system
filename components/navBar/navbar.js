import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
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
  } from "@chakra-ui/react";
  import React from "react";
  import { AiFillGift } from "react-icons/ai";
  import { BsGearFill } from "react-icons/bs";
  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { FiMenu } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdDashboard, MdKeyboardArrowRight } from "react-icons/md";
  import { ItemContent } from "../ItemContent";

  import Link from "next/link";
  
  
  
  export default function MainNavBar(props) {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
  
    const NavItem = (props) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color={useColorModeValue("inherit", "gray.400")}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
            color: useColorModeValue("gray.900", "gray.200"),
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
                color: useColorModeValue("gray.600", "gray.300"),
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
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
          <Text
            fontSize="2xl"
            ml="2"
            color={useColorModeValue("brand.500", "white")}
            fontWeight="semibold"
          >
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
          <Link href="/dashbord">
            <NavItem icon={MdDashboard}>Dashboard</NavItem>
          </Link>
          <Link href="/meeting">
            <NavItem icon={FaRss}>Add meeting</NavItem>
          </Link>
          <NavItem icon={HiCollection}>Collections</NavItem>
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
          <NavItem icon={AiFillGift}>Changelog</NavItem>
          <NavItem icon={BsGearFill}>Settings</NavItem>
        </Flex>
      </Box>
    );
  
    return (
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
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
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
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
                  <Icon color="gray.500" as={FaBell} cursor="pointer" />
                </MenuButton>
                <MenuList p="16px 8px">
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
                </MenuList>
              </Menu>
              <Avatar ml="4" size="sm" name="Solid" src="" cursor="pointer" />
            </Flex>
          </Flex>
          <Box as="main" p="4" {...props}/>        </Box>
      </Box>
    );
  }
  