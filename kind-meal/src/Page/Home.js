
import { Box ,Image} from '@chakra-ui/react'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
const Home=()=>{
    
    return(
        <Box width="100%">
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
            <Home6/>        
            <Box width="100%" background="#ececec"marginTop="90px" marginBottom="-50px">
                <Box width="80%"  justifyItems="center"  margin="auto">
                <Image src="https://www.kindmeal.my/images/banner_whykindmeal.png" width="100%"/>
                </Box>
            </Box>
        </Box>
        
        
        
      
    )
}
export default Home