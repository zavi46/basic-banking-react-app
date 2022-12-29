import { Box, Spinner, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore/lite"
import InitialFocus from '../components/Modal';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from '../Firebase/fire-index';

const CustomerPage = () => {
    const { id } = useParams()
    const [user, setUser] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [buttn, setButtn] = useState(true)

    const userCollectionRef = collection(db, "users")
    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(userCollectionRef);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUser().then(response => { 
            setSpinner(true)
            setButtn(false)
         })
    }, [])

    let specificUser = user.filter(obj => { return obj.id === id });
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            {spinner || <Spinner
                thickness='1rem'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                position='fixed'
                top='50%'
                left='50%'
            />}
            {
                specificUser.map(obj => {
                    return (

                        <Table variant='striped'
                            width='50%'
                            position='fixed'
                            top='5rem'
                            left='20rem'
                        >
                            <Thead>
                                <Tr>
                                    <Th>Full Name</Th>
                                    <Th>Email</Th>
                                    <Th isNumeric>Account No</Th>
                                    <Th isNumeric>Current Balance</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    specificUser.map(obj => {
                                        return (
                                            <Tr
                                                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                                            >
                                                <Td>{obj.name}</Td>
                                                <Td>{obj.email}</Td>
                                                <Td isNumeric>{obj.Acc}</Td>
                                                <Td isNumeric>{obj.balance}</Td>
                                            </Tr>
                                            
                                        )
                                    })
                                }

                            </Tbody>
                        </Table>
                    )
                })
            }
            {buttn || <Box
                position='fixed'
                top='30%'
                left='25%'
                >
                <InitialFocus />
            </Box>}
        </>
    )
}
export default CustomerPage