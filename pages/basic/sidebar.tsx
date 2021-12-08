// 07 DEC 2021 TRAN MINH HAI 
// demo sidebar responsive ref chakra-ui-template
// props.children: some components don't know their children ahead of time
// interface extends FlexProps: 

import { Box, 
   Text, 
   Link, 
   CloseButton, 
   Flex, 
   useColorModeValue, 
   FlexProps, 
   BoxProps, 
   Icon,
   useDisclosure,
   Drawer,
   DrawerContent, 
   IconButton} from "@chakra-ui/react";
 import { FiHome, 
   FiTrendingUp, 
   FiCompass, 
   FiStar, 
   FiSettings, 
   FiMenu } from 'react-icons/fi'
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string; 
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  {name: 'Home', icon: FiHome},
  {name: 'Trending', icon: FiTrendingUp}, 
  {name: 'Explore', icon: FiCompass}, 
  {name: 'Favourite', icon: FiStar}, 
  {name: 'Settings', icon: FiSettings}
]; 


interface NavItemProps extends FlexProps {
  icon: IconType, 
  children: ReactText
}

const NavItem = ({ icon, children, ...rest }: NavItemProps ) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }}>
      <Flex 
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{bg: 'cyan.400', color: 'white'}}
        {...rest}
      >
        {icon && (<Icon mr='4' fontSize='16' _groupHover={{color:'white'}} as={icon}></Icon>)}
        {children}
      </Flex>
    </Link>
  );
}


interface SidebarProps extends BoxProps {
  onClose: () => void; 
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg='gray.500'
      w={{base:'full', md: 60}}
      h='full'
      position='fixed'
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      {...rest}
    >
      <Flex h='20' alignItems='center' max='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={()=>{
          console.log('hide sidebar')
          onClose()
        }}></CloseButton>
      </Flex>
      {LinkItems.map((link, index) => {
        return (
          <NavItem key={index} icon={link.icon}>{link.name}</NavItem>
        )
      })}
    </Box>
  );
}


interface MobileProps extends FlexProps {
  onOpen: () => void; 
}

const MobileNav = ({ onOpen, ... rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {... rest}
    >
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu></FiMenu>}
      >
      </IconButton>
      <Text
        fontSize='2xl'
        ml='8'
        fontFamily='monospace'
        fontWeight='bold'
      >
        Logo 
      </Text>
    </Flex>
  );
}

const Sidebar = () => {
  
  const {isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg='tomato'
      width='100%'
      height='100vh'
    >
      <SidebarContent
        onClose={onClose}
        display={{ base:'none', md: 'block' }}
      >
      </SidebarContent>
      <Drawer
        onClose={onClose}
        autoFocus={false}
        isOpen={isOpen}
        size='full'
        placement='left'
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose}></SidebarContent>
        </DrawerContent>
      </Drawer>  
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen}>
      </MobileNav>

      {/* Children */}
    </Box>
  );
}

export default Sidebar; 
