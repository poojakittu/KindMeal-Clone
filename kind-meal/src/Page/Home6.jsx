import { Box,Heading,Image,Grid,GridItem,Text,Button } from '@chakra-ui/react'
const Home6=()=>{
    const data=[
        {img:"https://www.kindmeal.my/images/intro_deal.png",
        head:"Get Great Deals",
        text:"Show our FREE digital coupons to instantly enjoy exciting deals",
        id:1},
        {img:"https://www.kindmeal.my/images/intro_kindmoment.png",
        head:"Share KindMoments",
        text:"Spread the joy by sharing your yummy dining moments",id:2},
        {img:"https://www.kindmeal.my/images/intro_menu.png",
        head:"Discover Delicious Food",
        text:"Explore the latest exquisite offerings and creative menus",id:3},
        {img:"https://www.kindmeal.my/images/intro_friends.png",
        head:"Meet Food Lovers",
        text:"Make new, compassionate friends and share great food tips",id:4},
    ]
    return(
        <Box paddingTop="40px"  background="white" textAlign="center" width="80%" margin="auto" marginTop="60px" >
            <Box>
            <Heading as='h2' size='xl'>Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform
            </Heading>
            <Box display="flex" paddingLeft="440px">
            <Heading as='h2' size='lg' padding="20px">Brought to you by </Heading>
            <Image width={80} src='https://www.kindmeal.my/images/logo-petfinder-v2.png' alt='Dan Abramov' />
            </Box >
            <Heading as='h2' marginTop={70} color="gray" size='xl'>Instant coupon & dining. No upfront coupon payment, booking or printing.
            </Heading>

            <Grid templateColumns='repeat(4, 1fr)' gap={6} marginTop="150px">
            {data?.map((el)=>(
                <GridItem  boxShadow='dark-lg' p='6' rounded='md' bg='white' borderRadius="15px" padding={10} key={el.id}>
                <Image margin="auto" src={el.img} alt='Dan Abramov'  />
                <Heading size='lg' marginTop={10}>{el.head}</Heading>
                <Text marginTop={3}>{el.text}</Text>
                </GridItem> ))}
            </Grid>
            </Box>
        
            <Text fontSize='2xl' margin="auto" marginTop="90px" width="90%" >Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
                Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</Text>

            <Button background="red" borderRadius="15" height={40} display="row" margin={90} color="white" padding={10} width="40%">
                <Heading size="2xl">Join KindMeal Now</Heading>
                <Heading size="md">Your tasty journey begins here</Heading>
            </Button>

            <Heading color="gray">Featured On</Heading>
            <Box margin="auto" width="90%">
                <Image src="https://www.kindmeal.my/images/media-feature2.png"/>
            </Box>
            
        </Box>

    )
}
export default Home6