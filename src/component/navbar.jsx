import {Button, Box,Stack, Flex, SimpleGrid,Image,Text, MenuButton, MenuList, MenuItem, Menu, color, } from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";

const navBtn={base:'100%',
 sm:'100%',
 md:'50%',
 lg:'70%',
xl:'70%'
}
const clr=[
  {color:"red"},
  {color:"blue"},
  // {color:"green"}
]

export default function Navbar(){
const[i,setColor]=useState(0)
const[today,setToday]=useState(new Date())
if(i==2){
  setColor(0)
 }
useEffect(()=>{

   
  let id=setInterval(
  ()=>{


          setColor(prev=>prev+1)
  

},1000)

return ()=>{
clearInterval(id)
}
  
},[])

return <Box  borderBottom={'1px solid gray'} >
  

  <Text textAlign={'center'} fontSize={{base:"xl",sm:'xl',md:"4xl",lg:'4xl' ,xl:'4xl'}} color={'#007f7f'}  >SSP SKILL DEVELOPMENT TRAINING INSTITUTE</Text>
<Flex w={'100%'}   gap={'5px'}  alignItems={'end'} >
<Box
//  w={'15%'}
w={{
  base:'30%',
  sm:'30%',
  md:'20%',
lg:'15%',
xl:'15%',
}}

h={{base:'200px'}}  >  <Image borderRadius={'2rem'} w={'100%'} h='100%'  src="/ssp-logo.png"  />  </Box>
<Box
// w={'60%'}
w={{
  base:'40%',
  sm:'40%',
  md:'50%',
lg:'60%',
xl:'60%',
}}
>

{/* ////////////////ssp heading */}



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


  <Link to='/contact'  ><Button autoFocus w={navBtn}  bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >
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
  <Text color={'#007f7f'} fontSize={{base:"sm",sm:'sm',lg:'xl'}} ><b> Date : {today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()}</b></Text>
    
    
    <Text fontSize={{base:"sm",sm:'sm',lg:'xl'}} ><b>Have questions?</b></Text>
    <Text color={'#007f7f'} style={clr[i]} > <b>  Call us today: 7699442259 </b> </Text>
    <Text  fontSize={{base:"sm",sm:'sm',lg:'xl'}}><b>DROP MAIL:</b> </Text>
    <Text color={'#007f7f'} fontSize={{base:"sm",sm:'sm',lg:'xl'}}><b> SSPTRAININGINSTITUTE@GMAIL.COM</b></Text>
</Box>


</Flex>

   
</Box>

}