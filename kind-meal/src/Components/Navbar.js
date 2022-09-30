import Navbar1 from './Navbar1';
import Login from '../Page/Login';
import { Box, Image, Text, Button, Wrap, WrapItem } from "@chakra-ui/react";
import Signup from '../Page/Singnup';
const Navbar = () => {
  return (
    <div>
      <Box bg="white" w="100%" p={2} color="white" display={{ base: 'coloumn', md: 'coloumn', lg: 'row' }} padding={4}>
        <Wrap spacing="120px" width="80%"  margin="auto"  justifyContent={{lg:"space-between"}}>
          <Box>
            <Image
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt="nav"
              width="400px"
            />
          </Box>
          <Box display="flex" padding={{base:"-20px",md:"-40px",lg:"10px"}} marginTop={{base:"-50px",md:"-50px"}} >
            <Image
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              alt="link"
              width="70px"
              height="70px"
              padding="10px"
            />
            <Image
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              alt="fb"
              width="70px"
              height="70px"
              padding="10px"
            />
            <Image
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              alt="twitter"
              width="70px"
              height="70px"
              padding="10px"
            />
          </Box>

          <Wrap spacing={4} padding="20px">
            <Login/> 
           
            <WrapItem>
              <Button colorScheme="teal" size="sm">
                <Text fontSize="lg">Facebook</Text>{" "}
              </Button>
            </WrapItem>
            <WrapItem>
              <Button bg="#666666" color="white" size="sm">
                {" "}
                <Text fontSize="lg">Email</Text>{" "}
              </Button>
            </WrapItem>
            <WrapItem>
                <Signup/>
            </WrapItem>
          </Wrap>
        </Wrap>
      </Box>
      <Navbar1/>
    </div>

  );
};
export default Navbar;
