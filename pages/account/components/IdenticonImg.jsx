import { Image } from '@chakra-ui/react'
import { identicon } from 'minidenticons'
import { useMemo } from 'react'

const IdenticonImg = ({ username, saturation, lightness, ...props }) => {
  const svgURI = useMemo(
    () => 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(username, saturation, lightness)),
    [username, saturation, lightness]
  )
  return (
    <Image
      bg={"#03172c"}
      borderRadius='full'
      boxSize='150px' 
      src={svgURI} 
      alt={username} 
      {...props} />
  )
}
export default IdenticonImg