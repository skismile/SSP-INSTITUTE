import {Box,Button,Image, SimpleGrid,Text} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const data=["./body1.png",'/banner.jpeg',"./allbanks.jpeg","./mainbanner.jpeg"]

export default function Home(){
const [num,setNum]=useState(0)
if(num==3)
{
    setNum(0)
}
useEffect(()=>{

   
    setInterval(
    ()=>{
 

            setNum(prev=>prev+1)
    

},3000)
    
},[])
// console.log(num)
// console.log(num)

return <Box w={'70%'} m='auto' mb={'30px'} >
   <Box h={{
    base:'200px',sm:"200px",md:'300px',lg:'400px',xl:'400px'
   }}  ><Image  h={'100%'} w={'100%'} src={data[num]} /></Box>
   <br /><br />
<SimpleGrid columns={2}  >
    <Box>
        <Text fontSize={'2xl'} >About</Text>
        <Text> <b> ISO 9001:2015 Certified
Institute</b></Text>
       <Text>Learn More About Programs</Text>
       <Link to='/aboutus' >< Button bg="teal" color={'white'} _hover={{backgroundColor:'green'}} >Learn More</Button></Link>
    </Box>
    <Box>
<Text fontSize={'2xl'} >Programs</Text>
<SimpleGrid columns={2} gap='20px' >
<Box h={'100%'} ><Image h={'100%'} src='/program.png'/></Box>
<Box h={'100%'} ><Image h={'100%'}  src='/career-counselling.jpeg'/></Box>

</SimpleGrid>

    </Box>
</SimpleGrid>

</Box>


}