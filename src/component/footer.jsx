
import {Box, Flex,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export default function Footer(){

return <Box mt borderTop={'1px solid gray'} w={'70%'}     m='auto'  >

<Flex p={'30px'} gap={'20px'}  >

<Box  w='50%' h='150px' borderRight={'1px solid gray'} >
<Text>Have questions? Call us today:</Text>
<Text>DROP MAIL : </Text>
<Text> <b> SSPTRAININGINSTITUTE@GMAIL.COM</b></Text>
</Box>

<Flex   w='50%' gap={'50px'} fontSize='50px' >
<a href='https://www.facebook.com/profile.php?id=100083238667078' ><i className="fa-brands fa-facebook"></i></a>
<Text fontSize={'20px'} >JOIN US ON FACEBOOK</Text>

</Flex>

<Box>

</Box>


</Flex>
<Text textAlign={'center'} fontWeight='bold' fontSize={'20px'} >ISO  9001 : 2015  Certified
Institute</Text>

</Box>



}