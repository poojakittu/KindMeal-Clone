import Smallimg from "./Smallimage"
import {Grid,Box,Heading } from '@chakra-ui/react'

const Home5=()=>{
    const news = [
        {
          src:
            "https://www.kindmeal.my/photos/member/19/19509-m.jpg",
            title:"KenixLim"
        },
        {
          src:"https://www.kindmeal.my/photos/member/41/41629-m.jpg",
            title:"LooBoonLan"
        },
        {
          src:
            "https://www.kindmeal.my/photos/member/23/23028-m.jpg",
            title:"YinYinBoey"
        },
        {
            src:
              "https://www.kindmeal.my/photos/member/23/23201-m.jpg",
              title:"JanisYang"
          },
          {
            src:
              "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg",
              title:"ThamEllie"
          }
      ];
    return(
        <Box width="80%" margin="auto" marginTop="30px" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Box>
                    <Box display="flex" justifyContent="space-around" >
                    <Heading size='lg'>Amazing Superheroes</Heading>
                    <Heading size='md'>Latest Buzz</Heading>
                    <Heading size='md'> Lifestyle Ambassadors</Heading>
                    <Heading size='md'> Win Gifts!</Heading>
                    </Box>
            </Box>
            <Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} padding="10px">
             {news.map((image, index) => (
                <Smallimg img={image.src} title={image.title} id={image.index} size="250"/>
             ))}
             </Grid>
            </Box>

        </Box>

    )
}
export default Home5