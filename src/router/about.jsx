import {  Box,Text,Image,Grid,SimpleGrid, Heading,Flex } from "@chakra-ui/react";

export default function AboutUs(){


return <Box p={'30px'} w={'70%'} m='auto' >

<Box h={'500px'} >
    <Image w='100%' h="100%"  src='/banner.jpeg' />
 
</Box>
<br /><br /><br />
<Box h={'500px'} >

    <Image w='100%' h="100%"  src='/allbanks.jpeg' />
    
</Box>
<br /><br /><br />
<Box h={'500px'} >
   
    <Image w='100%' h="100%"  src='/about.jpeg' />
</Box>
<br /> <br /> <br /> <br />
<Flex  gap={'40px'} >
    <Box h={'300px'} w='40%%' ><Image h={'100%'} w={'100%'} src='/about-2.jpeg'/></Box>
    <Box w={'70%'} >
<Text  color={'#007f7f'} ><b>About the Institute</b></Text>
<Text>SSP SKILL TRAINING INSTITUTE is a leading Skills and Talent Development Corporation that is building a manpower pool for global industry requirements. The company, its human resource challenges, today ranks among the world’s leading training companies owing to its vast, yet comprehensive array of talent development programs. With a footprint across 30 nations, SSP offers training and development solutions to Individuals, Enterprises and Institutions.</Text>
<Text> <b> ISO 9001:2015 Certified
Institute</b></Text>

<ul>
    <li>Training by Ex Senior Bankers</li>
    <li>Interactive Virtual Classroom Sessions</li>
    <li>Doubt Clearing Sessions</li>
    <li>Academic Training Partner with leading Universities</li>
    <li>Latest and Updated Syllabus as per Banking Industry Norms</li>
    <li>Course exclusively designed for Placement in Retail Banking</li>
    <li>Preparation for NISM Series VA: Mutual Fund Distributors Certification Examination</li>

</ul>
    </Box>
</Flex>


</Box>



}