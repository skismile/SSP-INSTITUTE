
import {Box, Flex,Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export default function Footer(){

return <Box mt borderTop={'1px solid gray'} w={'70%'}     m='auto'  >
    {/* devloper add */}
{/* <marquee behavior="" direction=""   >
    <Text   w='50%'  color={'green'} fontWeight='bold' >
    To Build Your Website Contact Our Devloper Mr. Sk Ismile,  Call: 7001727360 
    or Mail : sk.ismile75@gmail.com
    </Text>
    </marquee> */}
<Flex p={'30px'} gap={'20px'}  >

<Box  w='50%' borderRight={'1px solid gray'} fontSize={{
    base:'10px',
    sm:'10px',
    md:'15px',
    lg:'20px',
    xl:'20px',
}}  >
<Text>Have questions? Call us today:</Text>
<Text>DROP MAIL : </Text>
<Text> <b> SSPTRAININGINSTITUTE@GMAIL.COM</b></Text>
</Box>

<Flex   w='50%' gap={'15px'} fontSize={{
    base:'30px',
    sm:'30px',
    md:'30px',
    lg:'40px',
    xl:'40px',
}} color='blue' >
<a  target={"_blank"} href='https://www.facebook.com/profile.php?id=100083238667078' ><i className="fa-brands fa-facebook"></i></a>
<Text color={'black'} fontSize={{
    base:'10px',
    sm:'10px',
    md:'10px',
    lg:'15px',
    xl:'20px',
}} >TO KNOW ABOUT OUR ALUMNUS, JOIN US ON FACEBOOK . </Text>

</Flex>

<Box>

</Box>


</Flex>

<Text textAlign={'center'} fontWeight='bold' fontSize={'20px'} >ISO  9001 : 2015  Certified
Institute</Text>

</Box>



}