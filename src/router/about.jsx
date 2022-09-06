import {  Box,Text,Image,Grid,SimpleGrid, Heading,Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const headImg={
    base:'200px',sm:"200px",md:'300px',lg:'400px',xl:'400px'
   }

export default function AboutUs(){
useEffect(()=>{

    window.document.title='About'

})

return <Box p={'30px'} w={'70%'} m='auto' >
<br /><br />

<Box h={headImg} >
    <Image w='100%' h="100%"  src='/banner.jpeg' />
 
</Box>
<br /><br /><br />
<Box h={headImg} >

    <Image w='100%' h="100%"  src='/allbanks.jpeg' />
    
</Box>
<br /><br /><br /><br />
<Flex  gap={'20px'} >
    <Box h={headImg} w='40%' ><Image h={'100%'} w={'100%'} src='/about-2.jpeg'/></Box>
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

<br /><br /><br />
<Box h={headImg} >
<Image w={'100px'} w='100%' h="100%"   src='https://i.gifer.com/7yAb.gif'/>
</Box>
<br /><br /><br />
<Box h={headImg} >
   
    <Image w='100%' h="100%"  src='/about.jpeg' />
</Box>
<br /> <br /> <br /> <br />


<SimpleGrid w={
    {
        base:'120%',
        sm:'120%',
        md:'100%',
        lg:'70%',
        xl:'60%',
    }
}  m='auto' columns={[1,1,1,1,1]}  gap='30px' >
    <Flex borderRadius={'2rem'}  justifyContent={'space-around'} alignItems='center' gap='10px' h='300px' 
   boxShadow={' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}
    _hover={{
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
    }}
    
    >
        <Image borderRadius={'2rem'} h='100%' w='50%' src='CEO.jpeg'/>
        <Box color={'#007f7f'} >
            <Text>
                <b>
                CHIF 
                </b>
            </Text>
            <Text>
                <b>
                Managing directors 
                </b>
            </Text>
            <Text>
                <b>
             CEO and founder
                </b>
            </Text>
        </Box>
    </Flex>
    <Flex gap='10px' borderRadius={'2rem'}  justifyContent={'space-around'} alignItems='center' h='300px'
     boxShadow={' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}
     _hover={{
         boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
     }}
    >
    <Image borderRadius={'2rem'} h='100%' w='50%' src='MD -PIKLU.jpeg'/>
    <Box color={'#007f7f'} >
            <Text>
                <b>
                Managing directors 
                </b>
            </Text>
            <Text>
                <b>
                and
                </b>
            </Text>
            <Text>
                <b>
              founder
                </b>
            </Text>
        </Box>
    </Flex>
    <Flex gap='10px' borderRadius={'2rem'} justifyContent={'space-around'} alignItems='center' h='300px'  boxShadow={' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}
    _hover={{
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
    }} >
    <Image borderRadius={'2rem'}  h='100%' w='50%' src='MD-LEGAL.jpeg'/>
    <Box color={'#007f7f'}>
            <Text>
                <b>
                Managing directors   
                </b>
            </Text>
            <Text>
                <b>
                and
                </b>
            </Text>
            <Text>
                <b>
                founder  of Legal Department
                </b>
            </Text>
        </Box>
    </Flex>
    
    
    
</SimpleGrid>

</Box>



}