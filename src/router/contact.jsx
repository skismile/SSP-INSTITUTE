import { Box,Flex,Text,Input,Button, Stack } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useToast } from '@chakra-ui/react'

export default function Contact(){
const [NAME,setName]=useState('')
const toast = useToast()
useEffect(()=> {

  window.document.title='Contact Page'
 
    toast({
      title: 'Hi Candidate !',
      description: "Please Fill the form.",
      status: 'info',
      duration: 9000,
      isClosable: true,
      position:"top"
    })
  
  })



return <Box w='70%' m='auto' p='50px 0px 50px 0px' >
 

<Flex justifyContent={"space-between"} >
<Box color={'#007f7f'} w='30%' >
    <Text>Address : AT-MIDNAPORE STATION ROAD,NEAR WATER TANK,PASCHIM MEDINIPUR,WEST BENGAL,PIN-721101</Text><br />
    <Text>TEL : 7699442259</Text><br />
    <Text>EMAIL: SSPTRAININGINSTITUTE@GMAIL.COM</Text>
</Box>
<Stack w='60%' p={'2%'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} bg='white' >
<form  action="https://formspree.io/f/xeqdegrd"
// ssp paswd---> Ssp@2022
  method="POST" >
    <Input value={'JOB-SEEKER'+"  "+NAME} bg='teal' color={'white'} fontWeight={'bold'}  readOnly  name='subject' required autoComplete="off"  placeholder="enter subject" /> <br /><br />
    <Input onChange={(e)=>setName(e.target.value)} type="text" name='name' required autoComplete="off"  placeholder="enter your name" /><br /><br />
    <Input type="email" name='email'  required autoComplete="off" placeholder="enter your email"/><br /><br />
    <Input  type="number" name='Number'  required autoComplete="off" placeholder="enter your Contact Number"/><br /><br />
    <Input  type="text" name='message'  autoComplete="off"  placeholder="enter your message" /><br /><br />
    <Input  type='submit'  color={'white'} _hover={{backgroundColor:'green'}}  bg='#007f7f' /><br /><br />
    </form>
</Stack>
</Flex>


</Box>



}