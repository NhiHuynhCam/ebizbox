import { Box, Image } from '@chakra-ui/react';
import React from 'react'

const EmptyCard = ({ image }) => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent">
         <Image src={image}
        px={2}
        objectFit="cover"
        borderRadius="5px"
      />
    </Box>;
  };

export default EmptyCard