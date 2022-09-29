import { Image,Text } from '@chakra-ui/react'
const Smallimg=({id,img,title,size})=>{
    return(
        <div>

            <Image key={id} 
            boxSize={size}
            objectFit='cover'
            src={img}
            alt='Dan Abramov'
            />
            <Text>{title}</Text>
        </div>
    )
}
export default Smallimg;