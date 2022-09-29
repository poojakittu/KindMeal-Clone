import { Box,Heading,Text,Stack,Grid } from "@chakra-ui/react";
const Footer=()=>{
    return(
        <Box width="100%" background="#2bb673" padding="50px" marginTop="50px" color="white">
            <Box width="80%" margin="auto" display="column">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>

            <Stack spacing={1} textAlign="left">
                <Heading as='h2' size='sm' noOfLines={1}>General</Heading>
                <Text fontSize='md'>Home</Text>
                <Text fontSize='md'>Sign Up</Text>
                <Text fontSize='md'>Sign Up</Text>
                <Text fontSize='md'>Advertising</Text>
                <Text fontSize='md'>Terms & Conditions</Text>
                <Text fontSize='md'>Inspiring Partners</Text>
                <Text fontSize='md'>Lifestyle Ambassadors</Text>
                <Text fontSize='md'>Jobs & Careers</Text>
                <Text fontSize='md'>Contact-Us</Text>
            </Stack>

            <Stack spacing={1} textAlign="left">
                <Heading as='h2' size='sm' noOfLines={1}>Features</Heading>
                <Text fontSize='md'>Meat-Free Deals</Text>
                <Text fontSize='md'>Kind Moments</Text>
                <Text fontSize='md'>Tasty Menus</Text>
                <Text fontSize='md'>Meat-Free Recipes</Text>
                <Text fontSize='md'>Member Recommendations</Text>
                <Text fontSize='md'>Featured Restaurants</Text>
                <Text fontSize='md'>Vegetarian & Vegan Directory</Text>
                <Text fontSize='md'>Food Map</Text>
                <Text fontSize='md'>Become A Superhero</Text>
                <Text fontSize='md'>Vegetarian & Vegan Directory</Text>
                <Text fontSize='md'>Vegan News & Vegetarian Articles</Text>
                <Text fontSize='md'>Latest Comments</Text>
            </Stack>

            <Stack spacing={1} textAlign="left">
                <Heading as='h2' size='sm' noOfLines={1}>Social Media</Heading>
                <Text fontSize='md'>KindMeal Widget</Text>
                <Text fontSize='md'>Facebook</Text>
                <Text fontSize='md'>Tweeter</Text>
                <Text fontSize='md'>Instagram</Text>
            </Stack>

            <Stack spacing={1} textAlign="left">
                <Heading as='h2' size='sm' noOfLines={1}>Mobile</Heading>
                <Text fontSize='md'>iPhone & iPod App  </Text>           
                <Text fontSize='md'>Android App</Text>
                <Heading as='h2' size='sm' noOfLines={1}>Exciting Promos</Heading>
                <Text fontSize='md'>Meat-Free Recipes</Text>
                <Text fontSize='md'>Member Recommendations</Text>
                <Text fontSize='md'>Featured Restaurants</Text>
                <Text fontSize='md'>Vegetarian & Vegan Directory</Text>
                <Text fontSize='md'>Food Map</Text>
                <Text fontSize='md'>Become A Superhero</Text>
                <Text fontSize='md'>Vegetarian & Vegan Directory</Text>
                <Text fontSize='md'>Vegan News & Vegetarian Articles</Text>
                <Text fontSize='md'>Latest Comments</Text>
            </Stack>

            <Stack spacing={1} textAlign="left">
                <Heading as='h2' size='sm' noOfLines={1}>PetFinder.my</Heading>
                <Text fontSize='md'>Adopt A Pet</Text>
                <Text fontSize='md'>Smartphone Apps</Text>
                <Text fontSize='md'>WAGazine</Text>
                <Text fontSize='md'>Discussion Forum</Text>
                <Text fontSize='md'>Medical Fund</Text>
                
            </Stack>
            </Grid>
            <Box marginTop="40px">
                <Text>
Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</Text><Text>
This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</Text>
            </Box>
            </Box>

        </Box>
    )
}
export default Footer;