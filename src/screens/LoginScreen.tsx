
import { Box, Button, ButtonSpinner, ButtonText, FormControl, FormControlError, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Heading, Image, Input, InputField, Text } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground } from 'react-native';
import { LOG } from '../config/logger';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState<Boolean>(false)

    const onPressShowPassword = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }

    useEffect(() => {
        LOG.info(showPassword);
    }, [showPassword])


    return (
        <Box w='$full' h={windowHeight} bgColor='$black'>
            <Image
                source={require('../../assets/images/cinema.jpg')}
                alt='miniature example'
                size="full"
                opacity={0.5}
                alignSelf="center"
                mt='$2'
                role="presentation"
                position='absolute'
            />
            <Image
                source={require('../../assets/images/icon.png')}
                alt='miniature example'
                size="md"
                rounded={"$full"}
                alignSelf="center"
                mt='$2'
                role="presentation"
            />
            <Heading alignSelf='center' color='#fff' fontSize={'$5xl'} pt='$10' mb='$20'>Central Film</Heading>
            <Box mx='$8'>

                <FormControl >
                    <FormControlLabel>
                        <FormControlLabelText color='#fff'>UserName</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                        <InputField color='#fff' />
                    </Input>
                </FormControl>
                <FormControl
                    mt={'$4'}
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    isRequired={false}
                >
                    <FormControlLabel mb="$1">
                        <FormControlLabelText color='#fff'>Password</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant='underlined'>
                        <InputField type="password" color='#fff' />
                    </Input>
                    <Text mt='$3' color='#fff9'>Forgot Password?</Text>
                </FormControl>
                <Button mt='$10' rounded={'$full'} bgColor='$cyan600' size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}>
                    {/* <ButtonSpinner mr="$1" /> */}
                    <ButtonText onPress={onPressShowPassword}>Log In</ButtonText>
                </Button>
                <Text textAlign='center' mt='$4'>Sign up</Text>

            </Box>

        </Box >
    )
}

export default LoginScreen