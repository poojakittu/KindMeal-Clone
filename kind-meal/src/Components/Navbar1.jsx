import { Box,Stack,Text } from '@chakra-ui/react'
import {Link} from "react-router-dom";

const links=[
    {path:"/", title:"Home"},
    {path:"/Meal", title:"Meal Deal"},
    {path:"/Kind", title:"Kind Moments"},
    {path:"/Hotpics", title:"Hotpics"},
    {path:"/Recipes", title:"Recipes"},
    {path:"/Directory", title:"Directory"},
    {path:"/Articels", title:"Articels"},
    {path:"/Help", title:"Help"},
]
const Navbar1=()=>{
    return(
        <Box bg='#2bb673' w='100%'p={2} color='white'>
          
            <Stack spacing={{lg:'80px',base:"20px"}} direction={{lg:'row',base:"column"}} align='center' w='80%' margin="auto" >
            {links?.map((el)=><Link key={el.path} to={el.path}>
                <Text fontSize='2xl' fontWeight="box">
                {el.title}
                </Text>
            </Link>)}   
            </Stack>  
            
        </Box>
    )
}
export default Navbar1