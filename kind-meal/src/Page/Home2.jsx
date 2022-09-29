import Smallimg from "./Smallimage"
import {Grid,Box,Heading } from '@chakra-ui/react'

const Home2=()=>{
    const news = [
        {
          src:
            "https://www.kindmeal.my/photos/deal/6/686-4475-m.jpg",
            title:"Indulge In Bings Banting''s Decadent Desserts Of Bingsu, Cub.."
        },
        {
          src:
            "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/302450409_1447446119095671_650723446000958095_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ksp6O1xUXLIAX-JRuNS&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_YjIg6GLP99RntFqoNhAakGcKMveUZ_Vbs96I0zaq3hg&oe=63397C80",
            title:"Ethel The Tortoise''s Bedtime Routine 🐢"
        },
        {
          src:
            "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/304779427_454113786736771_1344955773046935629_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=IIpGL-F38DYAX9XgIEC&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9f5z2KCcTf5KQCrREW8oGIYeYlMOOMy8m9_czOVkoy-A&oe=633ADE6D",
            title:"Watch Sally''s Incredible Transformation"
        },
        {
            src:
              "https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/74671980_573691586712442_6808626047337103360_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=PQqO7lMlEmMAX9vFzOm&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9qAr0SUfIZopMak2hR9kwAhVbzILhErGSrFCHCEwAS7Q&oe=633A48D7",
              title:"Nature''s Miracle Orphans: Orphan Koala Plays With Carer"
          },
          {
            src:
              "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg",
              title:"Unlikely Animal Friendships 🐻‍❄"
          }
      ];
    return(
        <Box width="80%" margin="auto" marginTop="30px" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Box>
                    <Box display="flex" justifyContent="space-around" >
                    <Heading size='lg'>Latest News & Videos</Heading>
                    <Heading size='md'>Save Lives with Your Blog</Heading>
                    <Heading size='md'>News & Articles</Heading>
                    <Heading size='md'>Follow Our Facebook</Heading>
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
export default Home2