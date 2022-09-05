import {Button, Box,Stack, Flex, SimpleGrid,Image,Text, MenuButton, MenuList, MenuItem, Menu, } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import {Link} from 'react-router-dom'
export default function Navbar(){
const navBtn={base:'100%',
 sm:'100%',
 md:'50%',
 lg:'70%',
xl:'70%'
}
return <Box  borderBottom={'1px solid gray'} >
  


<Flex w={'100%'}   gap={'5px'}  alignItems={'end'} >
<Box w={'15%'} h={{base:'200px'}}  >  <Image w={'100%'} h='100%'  src="/ssp-logo.png"  />  </Box>
<Box w={'60%'}   >

{/* ////////////////ssp heading */}

<Text fontSize={{base:"sm",sm:'sm',md:"xl",lg:'xl' ,xl:'2xl'}} color={'#007f7f'}  >SSP SKILL DEVELOPMENT TRAINING INSTITUTE</Text>

{/* ////////////drop down */}
<SimpleGrid  columns={{
  base:1,
  sm:1,
  md:2,
  lg:3  ,
  xl:4

}} 
spacing="10px"
 borderTop={'1px solid gray'} 
// border={'1px solid red'}
  p='1%' backgroundColor={'rgb(188, 242, 242)'} >


<Link to='/'><Button  w={navBtn} bg="teal" color={'white'} _hover={{backgroundColor:'green'}}  >
 <p>
 HOME
</p>
  </Button></Link>


<Menu>
  <MenuButton w={navBtn}  bg="teal" color={'white'} _hover={{backgroundColor:'green'}} as={Button} >
  PROGRAMS
  </MenuButton>
  <MenuList color={'white'} bg={'#007f7f'}  >
    <Link to='/lifecoach'><MenuItem  _hover={{backgroundColor:'gray'}} >LIFE COACH TRAINING </MenuItem></Link>
    <Link to='/careercounselling'><MenuItem  _hover={{backgroundColor:'gray'}} >CAREER COUNSELLING</MenuItem></Link>
  </MenuList>
</Menu>

<Link to='/aboutus' >
  <Button  w={navBtn} bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >
ABOUT US
  </Button>
</Link>


  <Link to='/contact'  ><Button w={navBtn}  bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >
CONTACT
  </Button></Link>


  <Link to='/hire' >
    <Button w={navBtn}   bg="teal" color={'white'}  _hover={{backgroundColor:'green'}}  >
HIRE FROM US
  </Button>
  </Link>




</SimpleGrid>

</Box>

{/* //////////////////////right div */}
<Box w={'25%'}  >
    <Text fontSize={{base:"sm",sm:'sm',lg:'xl'}} ><b>Have questions?</b></Text>
    <Text color={'#007f7f'} > <b>  Call us today: 7699442259 </b> </Text>
    <Text  fontSize={{base:"sm",sm:'sm',lg:'xl'}}><b>DROP MAIL:</b> </Text>
    <Text color={'#007f7f'} fontSize={{base:"sm",sm:'sm',lg:'xl'}}><b> SSPTRAININGINSTITUTE@GMAIL.COM</b></Text>
</Box>


</Flex>

   
</Box>

}