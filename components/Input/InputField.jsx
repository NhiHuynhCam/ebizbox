
import React, { useState } from 'react';
import { Button, FormControl,  Switch as ChakraSwitch, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { FaEllipsisV, FaEye, FaEyeSlash, FaSearch, FaTimes } from 'react-icons/fa';
const noop = () => null;
export function FormInput(props) {
    const [show, setShow] = useState(false)
    const { data: [name, val, setVal = () => {}, type = "text"]} = props
    return (
      <FormControl id={name} mb="3">
        <FormLabel fontWeight="bold">{name}</FormLabel>
        <InputGroup size="md">
          <Input
          borderColor={"#08C5BF"}
            focusBorderColor="red.500"
            type={!show ? type : "text"}
            value={val}
            onChange={e => setVal(e.target.value)}
            {...props}
          />
          {type === "password" && (
            <InputRightElement width="3.5rem">
              <Button h="1.25rem" size="sm" onClick={() => setShow(!show)} bg="transparent" color="black" _hover={{ bg: "transparent" }} _active={{ bg: "transparent"}}>
                {show ? <FaEye /> : <FaEyeSlash />}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
    )
  }
  

  export function SearchInput({ setter: [search, setSearch], ...restProps }) {
    return (
      <Box {...restProps}>
        <InputGroup>
          <Input 
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="cari"
            focusBorderColor="red.500"
          />
          <InputRightElement children={<FaSearch icon="search" />} />
        </InputGroup>
      </Box>
    )
  }

  export function FormInputSelection(props) {
    const { data: [name, val], onRemove, onClick, ...restProps } = props
    return (
      <Box {...restProps}>
        <FormControl id={name}>
          <FormLabel fontWeight="bold">{name}</FormLabel>
          <InputGroup>
            <Input 
              focusBorderColor="red.500"
              type={"text"}
              value={val}
              readOnly={true}
              bg={"gray.100"}
              onClick={onClick}
              {...restProps}
            />
            {onRemove && val ? 
              (
                <InputRightAddon
                  children={<FaTimes/>} 
                  onClick={onRemove}
                />
              ) : ( 
                <InputRightAddon
                  children={<FaEllipsisV />}
                  onClick={onClick}
                /> 
              )
            }
          </InputGroup>
        </FormControl>
      </Box>
    )
  }

  export const Switch = ({ storeValue, handleSubmit = noop }) => {
    const [value, setValue] = React.useState(storeValue);
    const handleChange = (e) => setValue(e.target.checked);
    React.useEffect(() => setValue(storeValue), [storeValue]);
    return (
      <ChakraSwitch
        size="md"
        colorScheme="cyan"
        variant="main"
        reversed={true}
        mt={2}
        isChecked={value}
        onChange={handleChange}
        onBlur={handleSubmit}
      />
    );
  }