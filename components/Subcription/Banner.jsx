import { colors } from '@/utils/colors'
import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

const BannerSubcription = () => {
  return (
    <Flex
            bg={colors.darkBg}
            bgImage={"/banner-subcribe.jpeg"}
            bgPos="center center"
            bgRepeat="no-repeat"
            bgSize="cover"
            minH="80vh"
            minW="100vw"
            h="100%"
            pb={4}
            align="center"
            justify="center"
            id="bannerSubcription"
        >
            <Flex
                  
                    flexDirection={"row"}
                    align={"center"}
                    justifyContent={"center"}
                    h={450}
                    w={"100%"}
                    position="relative"
                    mt={12}
                >
                    <Image
                        src="/logo_footer.svg"
                        objectFit="cover"
                        borderRadius={24}
                        w={200}
                        zIndex={1}
                    />
                </Flex>
    </Flex>
  )
}

export default BannerSubcription