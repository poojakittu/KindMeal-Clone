import { Heading,Box,Text ,Grid,GridItem,FormControl,FormLabel,Input,Select,Image} from "@chakra-ui/react"

const Signup1=()=>{
    return(
        <Box display="flex" width="80%" margin="auto">
            <Box width="30%"> 
            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/join_normal.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>Food Lover Sign Up</Heading>
                    </Box>

            </Box>

            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/join_shop.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>Restaurant Sign Up</Heading>
                    </Box>

            </Box>

            </Box>
            <Box width="70%" padding={"10"} textAlign="left">
                <Heading size={"lg"}>Restaurant / Shop Owner? Sign Up Now</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"}>
                Improve your business, build brand loyalty, and save precious animal lives! Join KindMeal now to enjoy the following features:
                </Text>
                <Box width="90%" padding={3} paddingLeft={4}>
                <ul padding={"10"}>
                    <li>
                    <Text fontSize="20px">Effectively reach over 200,000 consumers</Text>
                    </li>
                    <li>
                    <Text fontSize="20px">Feature your shop across premium partner platforms & media channels</Text>
                    </li>
                    <li>
                    <Text fontSize="20px">Offer coupons & deals to attract new customers</Text>
                    </li>
                    <li>
                    <Text fontSize="20px">Showcase your delicious meat-free meals</Text>
                    </li>
                    <li>
                    <Text fontSize="20px">Interact with our community of food lovers</Text>
                    </li>
                    <li>
                    <Text fontSize="20px">Get your exclusive Shop Page — https://KindMeal.my/YourShopName</Text>
                    </li>
                </ul>
                </Box>
                <Text fontSize="20px" width={"30"} paddingRight={"5"}>
                To support our welfare causes, we offer simple, affordable Premium Plans on a monthly subscription basis, starting from RM 99 only. No deal commissions, no hidden fees. Premium Plan details are available upon signing up.
                </Text>
                <Box marginTop={"15"}>
                    <Heading color={"gray"}>Personal Profile</Heading>
                    <p>First, we setup your personal profile, then proceed to configure your shop promotions.</p>
                <FormControl>
                <Grid templateColumns='repeat(5, 1fr)' marginTop={"10"}gap={"4"}>                
                
                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Your Name</Text>
                    </GridItem>
                    <GridItem colSpan={2} ><FormLabel>First Name</FormLabel>
                    <Input type='email' /></GridItem>

                    <GridItem colSpan={2}><FormLabel>Last Name</FormLabel>
                    <Input type='email' /></GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Email</Text>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <FormLabel>Your email must be correct to receive activation email</FormLabel>
                        <Input type='email' />
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Re-Enter Email:</Text>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Input type='email' />
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Password</Text>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Input type='email' />
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"} paddingTop={"14"}>Username</Text>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <FormLabel>Choose a cool username for your Personal Profile page, comments & reviews</FormLabel>
                        <FormLabel>http://KindMeal.my/Username</FormLabel>
                        <Input type='email' />
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Birth Date</Text>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Input type='email' />
                    </GridItem>

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Country</Text>
                    </GridItem>
                    <GridItem colSpan={3} >
                    <Select placeholder='Select option'>
                        <option value='india'>India</option>
                        <option value='usa'>Usa</option>
                        <option value='ml'>Malashiya</option>
                    </Select>
                    </GridItem>
                    <GridItem colSpan={1} />

                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>State</Text>
                    </GridItem>
                    <GridItem colSpan={3} >
                    <Select placeholder='Select option'>
                        <option value='india'>India</option>
                        <option value='usa'>Usa</option>
                        <option value='ml'>Malashiya</option>
                    </Select>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={1} >
                        <Text fontSize={"22"}>Gender</Text>
                    </GridItem>
                    <GridItem colSpan={3} >
                    <Select placeholder='Select option'>
                        <option value='india'>India</option>
                        <option value='usa'>Usa</option>
                        <option value='ml'>Malashiya</option>
                    </Select>
                    </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={1}><Input type="Submit" bg={"red"}color="white" colorScheme={"red"}/></GridItem>


                </Grid>
                    
            </FormControl>
                </Box>
            
            </Box>
        </Box>
    )
}
export default Signup1