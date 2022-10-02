import { Heading,Box,Text ,Image,Center,Divider} from "@chakra-ui/react"

const Help=()=>{
    return(
        <Box display="flex" width="80%" margin="auto" >
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
            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/icon-megaphone.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>Advertising</Heading>
                    </Box>

            </Box>
            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/about_us.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>About KindMeal</Heading>
                    </Box>

            </Box>
            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/about_hero.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>Superhero Guide</Heading>
                    </Box>

            </Box>
            <Box border="1px solid gray" borderRadius="15px" margin="40px"   padding={6} paddingLeft={"14"} >
                    <Box margin="auto">
                        <Image src="https://www.kindmeal.my/images/contact.png" alt="ss"/>

                    </Box>
                    <Box>
                        <Heading size="md" marginBottom={2}>Contact us</Heading>
                    </Box>

            </Box>

            </Box>
            <Box width="70%" padding={"10"} textAlign="left">
                <Heading size={"lg"}>General Help</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                Improve your business, build brand loyalty, and save precious animal lives! Join KindMeal now to enjoy the following features:
                </Text>
               
                <Center height='1px' bg="gray" margin={"10"}>
                        <Divider orientation='vertical' />
                      </Center>
                
                <Box>
                <Heading size={"lg"} color="gray">What is KindMeal?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                KindMeal is Malaysia's (and possibly the world's!) pioneering meat-free lifestyle platform. We provide an effective platform to promote compassionate dining in a fun and effective way, that would allow you to save precious animal lives, improve your health, enjoy a cleaner environment and of course, save your hard-earned money.
                </Text>

                <Heading size={"lg"} color="gray" paddingTop={"10"}>How do I sign up to KindMeal? Is it free?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                Yes, it is absolutely free. To join our community of food lovers and grab awesome deals, please sign up here.

                If you are a merchant that wish to promote your business for FREE, please proceed to our Businesses Page.
                </Text>
               

                <Heading size={"lg"} color="gray" paddingTop={"10"}>What is a Username?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                A Username is a nickname exclusively used to identify your profile. It will be used to access your Public Page, such as https://KindMeal.my/MyUsername, and it will also be displayed when you share KindMoments, comments and reviews.
                </Text>
              

                <Heading size={"lg"} color="gray" paddingTop={"10"}>How do KindMeal deals work?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                Restaurants create attractive deals within KindMeal, which you can obtain coupons for. Our coupons differ from other conventional deal sites in that you do not need to make any upfront payment at KindMeal, and you can easily present our LiveCoupon via computer, mobile or laptop without any print coupons. For restaurants that do not require advance reservations, you can even use the LiveCoupon immediately! After all, eating is an impulsive decision, right?
                </Text>

                <Heading size={"lg"} color="gray">How do I get a KindMeal coupon?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                Just browse to a deal you like, select the corresponding outlet location (if the restaurant has multiple locations), then click on Get Coupon. Please note that the outlet location cannot be changed after the coupon is obtained.

                Each member is limited to 5 active coupons only. You must use the coupons before you can obtain additional ones. Unused coupons will automatically expire upon reaching its due date.

                </Text>

                <Heading size={"lg"} color="gray" paddingTop={"10"}>What is KindWords?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                KindWords is a great way to tell your friends about the great food and instantly get more discount.

                For deals with KindWords enabled, you can enjoy DOUBLE the discount if you share the deal on Facebook or Twitter. Once you successfully share it, you will immediately receive the exclusive discount for your deal. If you prefer not to take advantage of KindWords, you can still proceed to get the deal at the normal discount price. Please note that not all deals support KindWords - it depends on the merchant.
                </Text>
               

                <Heading size={"lg"} color="gray" paddingTop={"10"}>What is a Username?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                Once a coupon is received, you can access the LiveCoupon and use it via one of the following ways. An Internet connection is required.
                    At KindMeal website, under Account -{">"} My Coupons section
                    With our KindMeal mobile app, under Deals -{">"} My Coupons section
                    You should only activate the LiveCoupon when you are at the restaurant, and upon informing the merchant. Some merchants may require that you activate it during the ordering process, while some will be during the payment process. Please inform the merchant first when you are ordering to ensure they are aware of your KindMeal LiveCoupon.

                    Once an active LiveCoupon is loaded, you will see a timer counting down the time remaining to use it. To activate it, click on Use LiveCoupon. Please ensure that you only activate it upon the request of the merchant. Activating it ahead of time may void your coupon and deal.
                </Text>
              

                <Heading size={"lg"} color="gray" paddingTop={"10"}>What if I don't have a mobile device or Internet connection, can I use a Print Coupon?</Heading>
                <Text fontSize="20px" width={"30"} paddingRight={"5"} paddingTop={"2"}>
                This depends on the specific deal. If the merchant allows it, you can also choose to print out the coupon and bring it along. Please refer to the deal's Terms & Conditions to check if print coupons are allowed, and if any prior reservation and usage delay are required.

To print your coupon, first access it via KindMeal website at the Account-{">"}Account -{">"} My Coupons section, then click on Print Coupon at the corresponding coupon. If the Print Coupon button is not available, it means that only LiveCoupons are accepted for the deal.
                </Text>
               

                </Box>            
            </Box>
        </Box>
    )
}
export default Help