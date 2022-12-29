import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const history = useNavigate()
    return (
<>
      <Heading position='absolute' left='0.5rem' top='0.5rem' fontSize='2.5rem'><span>TSF-Bank</span></Heading>
        <Box
          display='flex'
          height='100vh'
          width='100%'
          justifyContent='center'
          alignItems='center'
          >
            <Box  
              marginLeft='2rem'
              width='38%'
              >
                <Heading fontFamily='ui-rounded;' fontSize='4rem'>Get <span>Best Banking Services</span> In The World</Heading>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eveniet repellendus, in cumque velit illo.</p>
                <Button marginTop='2rem' onClick={() => history('/customers')} colorScheme='teal' size='md'>View All Customers</Button>
                <Button marginTop='2rem' marginLeft='0.7rem' colorScheme='teal' variant='outline'> About Us </Button>
            </Box>
            <Box>
                <img src="assets/img.png" alt="photo"/>
            </Box>
        </Box>
          </>
    )
}

export default Home