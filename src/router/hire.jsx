import { useToast,Box,SimpleGrid,Text,Flex, FormControl, FormLabel, FormHelperText,Input, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
export default function Hire(){
  const toast = useToast()
  useEffect(()=>{

    window.document.title='Hire Page'
    toast({
      title: 'Hi Hr !',
      description: "Please Fill the form.",
      status: 'info',
      duration: 9000,
      isClosable: true,
      position:"top"
    })

})

return <Box w='70%' p={'30px 0px 30px 0px '} m='auto' >

<Flex justifyContent={'space-between'} >
    <Box   w='30%' color={'#007f7f'} > <Text fontSize={{base:"10px",sm:'sm',lg:'xl'}} >Address : AT-MIDNAPORE STATION ROAD,NEAR WATER TANK,PASCHIM MEDINIPUR,WEST BENGAL,PIN-721101</Text><br />
    <Text fontSize={{base:"10px",sm:'sm',lg:'xl'}}>TEL : 7699442259</Text><br />
    <Text fontSize={{base:"10px",sm:'sm',lg:'xl'}}>EMAIL: SSPTRAININGINSTITUTE@GMAIL.COM</Text></Box>
    
    
    <Stack p='5px' w='60%' boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'} bg='white'   >
   
    <form   action="https://formspree.io/f/xeqdegrd"
    // skismile--> action="https://formspree.io/f/mqkjajnd"
  method="POST"  >  
  <FormLabel   color={'#007f7f'} fontSize={{base:"10px",sm:'15px',md:'30px',lg:'xl',xl:'xl'}} >Learn more about hiring</FormLabel>

  <Input value='HIRE-DEPARTMENT' bg='teal' color={'white'} autoComplete="off" readOnly  name='subject'   /><br /> <br />
  
  <Input fontSize={{base:"10px",sm:'sm',lg:'xl'}} autoComplete="off" required  name='name'  type='text' placeholder="enter name"  /><br /><br />
  <Input fontSize={{base:"10px",sm:'sm',lg:'xl'}} autoComplete="off" required name='email'  type='email' placeholder="enter email" /><br /><br />
  <Input fontSize={{base:"10px",sm:'sm',lg:'xl'}} autoComplete="off" required name='phone number' type='number' placeholder="enter phone number" /><br /><br />
  <Input fontSize={{base:"10px",sm:'sm',lg:'xl'}} autoComplete="off"  name='company name'   type='text' placeholder="enter Company  Name" /><br /><br />
  <Input fontSize={{base:"10px",sm:'sm',lg:'xl'}} autoComplete="off"  name='message' h={'100px'}   type='text' placeholder="message" /><br /><br />
  

  <Input  type='submit' _hover={{backgroundColor:'green'}} color='white' bg='#007f7f' />
  </form>
    </Stack>

</Flex>

</Box>



}