import {Button, Box,Stack, Flex, SimpleGrid,Image,Text, MenuButton, MenuList, MenuItem, Menu, } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import {Link} from 'react-router-dom'
export default function Navbar(){

return <Box  borderBottom={'1px solid gray'} >
  


<Flex w={'100%'} border='10px solid red' alignItems={'end'} >
<Box w={'15%'}   >  <Image w={'100%'} h='100%' src="/ssp-logo.png"  />  </Box>
<Box w={'60%'}   >

{/* ////////////////ssp heading */}

<Text fontSize={'20px'} color={'#007f7f'}  >SSP SKILL DEVELOPMENT TRAINING INSTITUTE</Text>

{/* ////////////drop down */}
<Stack className="navButton" borderTop={'1px solid gray'} w='100%' p='1%' backgroundColor={'rgb(188, 242, 242)'} direction='row' justifyContent='space-between' >

<Link to='/'><Button  bg="teal" color={'white'} _hover={{backgroundColor:'green'}} as={Button} >
HOME
  </Button></Link>


<Menu>
  <MenuButton   bg="teal" color={'white'} _hover={{backgroundColor:'green'}} as={Button} rightIcon={<ChevronDownIcon/>}>
  PROGRAMS
  </MenuButton>
  <MenuList color={'white'} bg={'#007f7f'}  >
    <Link to='/lifecoach'><MenuItem  _hover={{backgroundColor:'gray'}} >LIFE COACH TRAINING </MenuItem></Link>
    <Link to='/careercounselling'><MenuItem  _hover={{backgroundColor:'gray'}} >CAREER COUNSELLING</MenuItem></Link>
  </MenuList>
</Menu>

<Link to='/aboutus' >
  <Button   as={Button} bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >
ABOUT US
  </Button>
</Link>


  <Link to='/contact'  ><Button  bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >
CONTACT
  </Button></Link>


  <Link to='/hire' ><Button  bg="teal" color={'white'} _hover={{backgroundColor:'green'}}  >
HIRE FROM US
  </Button></Link>




</Stack>

</Box>

{/* //////////////////////right div */}
<Box w={'25%'}  >
    <Text fontSize={'xl'} ><b>Have questions?</b></Text>
    <Text color={'#007f7f'} > <b>  Call us today: 7699442259 </b> </Text>
    <Text fontSize={'xl'}><b>DROP MAIL:</b> </Text>
    <Text color={'#007f7f'} fontSize={'xl'}><b> SSPTRAININGINSTITUTE@GMAIL.COM</b></Text>
</Box>


</Flex>

   
</Box>

}