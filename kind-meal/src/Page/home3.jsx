import Smallimg from "./Smallimage"
import {Grid,Box,Heading } from '@chakra-ui/react'

const Home3=()=>{
    const news = [
        {
          src:
            "https://www.kindmeal.my/photos/moment/24/24454-47170-s.jpg",
            title:"Good Food By Gan YeeHuanGan"
        },
        {
          src:"https://www.kindmeal.my/photos/moment/24/24451-47163-s.jpg",
            title:"Raw Chef Yin YinYinBoey 🐢"
        },
        {
          src:
            "https://www.kindmeal.my/photos/moment/24/24446-47144-s.jpg",
            title:"WA Delicious KindMoment CindyChang"
        },
        {
            src:
              "https://www.kindmeal.my/photos/moment/24/24440-47121-s.jpg",
              title:"Ador Cafe ChewLengLeng"
          },
          {
            src:
              "https://www.kindmeal.my/photos/moment/24/24439-47120-s.jpg",
              title:"Unlikely Animal Friendships 🐻‍❄"
          }
      ];
    return(
        <Box width="80%" margin="auto" marginTop="30px" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Box>
                    <Box display="flex" justifyContent="space-around" >
                    <Heading size='lg'>Yummylicious Moments</Heading>
                    <Heading size='md'>Secret Recipes</Heading>
                    <Heading size='md'> Member Hot Picks</Heading>
                    <Heading size='md'>Photo Moments</Heading>
                    </Box>
            </Box>
            <Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} padding="10px">
             {news.map((image, index) => (
                <Smallimg img={image.src} title={image.title} id={image.index} size="230"/>
             ))}
             </Grid>
            </Box>

        </Box>

    )
}
export default Home3