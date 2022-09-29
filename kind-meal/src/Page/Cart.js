import { Grid,GridItem, Heading,Text,Divider,Image } from '@chakra-ui/react'
 const Card=({id,name,des,phone,address,opening})=>{
    
    return(
        <GridItem spacing="20px" paddingTop="20px" textAlign="left" rowGap="50px" padding="25px" boxShadow='dark-lg' p='6' rounded='md' bg='white' borderRadius="15px" id={id}>
                <Heading>{name}</Heading>
                
                <Text fontSize="18px" paddingTop="10px">{des}</Text>
                <Divider orientation='horizontal' width="100%" height="1px" bg="gray" margin="auto" marginTop="20px" />
                <Text fontSize="25px" marginTop="25px">Phone</Text>
                <Text fontSize="19px" paddingTop="10px">{phone}</Text>

                <Text fontSize="25px" marginTop="25px">Address</Text>
                <Text fontSize="19px" paddingTop="10px">{address}</Text>

                <Text fontSize="25px" marginTop="25px">Opening Hours</Text>
                <Text fontSize="19px" paddingTop="10px">{opening}</Text>
                <Image src='https://developers.google.com/maps/images/landing/hero_geocoding_api.png' alt='Dan Abramov' width="100%" marginTop="20px"/>
                <Grid templateColumns='repeat(3, 1fr)' RowGap="40px"  marginTop="10px">
                <Text fontSize="23px">Visit Website |   </Text>
                <Text fontSize="23px">Get Direction |</Text>      
                <Text fontSize="23px">Near By Shops</Text>
                   
                </Grid>

                
            </GridItem> 
    )
}
export default Card