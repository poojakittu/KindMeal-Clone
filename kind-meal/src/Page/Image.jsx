import { Image,Grid } from '@chakra-ui/react'
const Img=()=>{
    const images = [
        {
          src:
            "https://www.kindmeal.my/photos/deal/6/686-4475-m.jpg"
        },
        {
          src:
            "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg"
        },
        {
          src:
            "https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"
        },
        {
            src:
              "https://www.kindmeal.my/photos/deal/6/657-4063-m.jpg"
          },
          {
            src:
              "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg"
          },
          {
            src:
              "https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"
          },{
            src:
              "https://www.kindmeal.my/photos/deal/6/626-3611-m.jpg"
          }
      ];
    return(
        <Grid templateColumns='repeat(7, 1fr)' gap={6} justifyContent="space-around">
             {images.map((image, index) => (
             <Image key={index} 
            boxSize='150px'
            objectFit='cover'
            src={image.src}
            alt='Dan Abramov'
                />
            ))}
        </Grid>
    )
}
export default Img;