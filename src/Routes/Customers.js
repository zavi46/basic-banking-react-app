import { react, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../Firebase/fire-index';
import { Box, Heading, Button, UnorderedList, ListItem, Spinner, Grid, GridItem } from '@chakra-ui/react';
import PersonIcon from '@material-ui/icons/Person';

const Customers = () => {

  const [user, setUser] = useState([])
  const [spinner, setSpinner] = useState(false)
  const [showHeading, setShowHeading] = useState(true)

  const history = useNavigate()

  const userCollectionRef = collection(db, "users")
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUser().then(response=>{
      setSpinner(true)
      setShowHeading(false)
    })
  }, [])
  return (
    <Box maxW='100%'
      minH='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      >
      {
        showHeading 
        ||
        <Heading
          width='80%'
          marginTop='1rem'
          as='h2' 
          size='2xl'
        >All Customers</Heading>}
      {spinner || <Spinner
        thickness='1rem'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />}

        <Grid
          marginTop='3rem'
          templateColumns='repeat(3, 1fr)' gap={6}
          templateRows='repeat(4, 1fr)' gap={6}
          heigh='100vh'
          width='90%'
        >
          
            {
              user.map((user)=>{
                return(
                  <GridItem
                   className='customer-card'
                   display='flex'
                   justifyContent='space-around'
                   alignItems='center'
                   height='10rem'
                   backgroundColor='#edf2f7'
                   borderRadius='2xl'
                  >
                    <PersonIcon
                    style={{fontSize:'6rem', color:'#319795'}}
                    />
                    <Heading as='h4' size='md'>{user.name}</Heading >
                    <Button onClick={() => history(`/customerPage/${user.id}`)} colorScheme='teal' size='sm'>View Account</Button>
                  </GridItem>
                )
              })
            }
          
        </Grid>
    </Box>
  )
}

export default Customers