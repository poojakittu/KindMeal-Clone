import { Image,Box } from '@chakra-ui/react'
import Img from './Image';
const Home1=()=>{
    const images = [
        {
          src:
            "https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg",
            title:"Yishensu Oriental cuisine"
        }
      ];
    return(
        <Box width="80%" margin="auto"  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Box width="100%"  display="flex">
             {images.map((image) => (
                <Box boxSize='md' width="60%" >
                    <Image src={image.src} alt='Dan Abramov' width="100%" height="100%" />
                    <div backgroundColor="#564d38"
                        style={{ backgroundColor: '#564d38', marginTop: -46 ,width:780, position:"absolute", height:60,color:"white", paddingTop:13}} >
                        <p style={{fontSize:25}}>{image.title}</p>
                    </div>
                </Box>
             ))}
           
                <Box  boxSize='md'width="40%">
                    <Image src='https://www.kindmeal.my/photos/shop/5/568-4306-m.jpg' alt='Dan Abramov' width="100%" height="100%"/>
                </Box>
            </Box>
                <Box padding="30px">
                    <Img/>
                </Box>
                
        </Box>

    )
}
export  default Home1