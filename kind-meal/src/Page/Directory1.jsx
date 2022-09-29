import {
  Text,
  Stack,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import{useState} from "react"




const Directory1 = (props) => {
  
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
 
  const handlesubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(name)
  }
  const handlesubmit1=(e)=>{
    e.preventDefault();
    props.onSubmit1(country)
  }
 

  return (
    <Box width="100%" bg="#f0f0f0">
      <Box
        width="80%"
        margin="auto"
        textAlign="left"
        padding="40px"
        textColor=""
      >
       
        <Stack spacing={4}>
          <Text fontSize="4xl">Vegetarian Restaurants In Malaysia</Text>
          <Text fontSize="xl">
            Looking for even more delicious choices? Explore hundreds of
            vegetarian and vegan restaurants in Malaysia
          </Text>
          <Text fontSize="xl">
            Are you a restaurant or cafe owner? Boost your business with an
            attractive KindMeal profile and deals for FREE. Find out more or
            contact us now.
          </Text>

          <Stack spacing="95px" paddingTop="30px" direction="row">
            <Box width="25%">
              <form onSubmit={handlesubmit}>
              <Input
                placeholder="Search Shop Name"
                size="md"
                width="100%"
                padding="20px"
                bg="white"
                fontSize="20px"
                name="search"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
              </form>
            </Box>
            <Box width="50%" height="20px">
           
              <select name="country" value={country} onClick={handlesubmit1}  onChange={(e) => setCountry(e.target.value)} >
                <option padding="15px">All Shops in Malashiya</option>
                <option value="Berjaye Cafe">Berjaye Cafe</option>
                <option value="Berjaye Cafe">Berjaye Cafe</option>
                <option value="Ba-Xian Cafe">Ba-Xian Cafe</option>
                <option value="Arti Wodless Cafe">Arti Wodless Cafe</option>
              </select>
            
             
            </Box>
            <Box width="15%">
              <Button
                bg="red"
                borderRadius="5px"
                color="White"
                fontSize="22px"
                size="md"
                width="100%"
              >
                Search Shop
              </Button>
            </Box>
            <Box width="15%">
              <Button
                bg="green"
                borderRadius="5px"
                color="White"
                fontSize="22px"
                size="md"
                width="100%"
              >
                Add a Shop
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default Directory1;

