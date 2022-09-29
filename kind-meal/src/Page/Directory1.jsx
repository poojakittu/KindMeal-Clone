import {
  Text,
  Stack,
  Box,
  Input,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
  Image,
  
} from "@chakra-ui/react";
import{useState} from "react"




const Directory1 = (props) => {
  
  const [name, setName] = useState("");
 
  const handlesubmit=(e)=>{
    e.preventDefault();
    props.onSubmit(name)
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
            <Box width="20%">
              <Menu paddingTop="-10px">
                <MenuButton
                  as={Button}
                  bg="white"
                  width="100%"
                  fontSize="20px"
                  rightIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  }
                >
                  All Shops in Malaysia
                </MenuButton>
                <MenuList name="search">
                  <MenuItem minH="48px" value="ann">
                    <span>Annalashmi Cafe</span>
                  </MenuItem>
                  <MenuItem minH="40px" value="ber">
                    <span>Berjaye Cafe</span>
                  </MenuItem>
                  <MenuItem minH="48px" value="ba">
                    <span>Ba-Xian Cafe</span>
                  </MenuItem>
                  <MenuItem minH="40px" value="bakti">
                    <span>Bakti Wodless Cafe</span>
                  </MenuItem>
                </MenuList>
              </Menu>
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

