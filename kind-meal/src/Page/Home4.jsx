import Smallimg from "./Smallimage"
import {Grid,Box,Heading } from '@chakra-ui/react'

const Home4=()=>{
    const news = [
        {
          src:
            "https://www.kindmeal.my/photos/item/0/381-4198-s.jpg",
            title:"Green Tea Latte"
        },
        {
          src:"https://www.kindmeal.my/photos/item/0/234-2320-s.jpg",
            title:"Mixed Berries Smoothies"
        },
        {
          src:
            "https://www.kindmeal.my/photos/item/0/419-4837-s.jpg",
            title:"Spaghetti ala Fungi"
        },
        {
            src:
              "https://www.kindmeal.my/photos/item/0/361-3902-s.jpg",
              title:"Earl Grey Latte"
          },
          {
            src:
              "https://www.kindmeal.my/photos/item/0/169-4287-s.jpg",
              title:"Creamy TomYam Pasta"
          }
      ];
    return(
        <Box width="80%" margin="auto" marginTop="30px" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Box>
                    <Box display="flex" justifyContent="space-around" >
                    <Heading size='lg'>Discover Restaurants</Heading>
                    <Heading size='md'>Vegetarian Directory</Heading>
                    <Heading size='md'> Restaurant Menu</Heading>
                    <Heading size='md'> Food Map</Heading>
                    </Box>
            </Box>
            <Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} padding="10px">
             {news.map((image, index) => (
                <Smallimg img={image.src} title={image.title} id={image.index} size="220"/>
             ))}
             </Grid>
            </Box>

        </Box>

    )
}
export default Home4