
import { Box, FormControl, FormControlError, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Heading, Input, InputField, Text } from '@gluestack-ui/themed'
import React from 'react'

const LoginScreen = () => {
    return (
        <Box mx='$12' bgColor='$amber50'>
            <Heading alignSelf='center'>Login</Heading>
            <FormControl >
                <FormControlLabel>
                    <FormControlLabelText>UserName or Email</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField />
                </Input>
                <FormControlHelper>
                    <FormControlHelperText>
                        What would you like people to call you?
                    </FormControlHelperText>
                </FormControlHelper>
            </FormControl>
            <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
            >
                <FormControlLabel mb="$1">
                    <FormControlLabelText>Password</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField type="password" defaultValue="12345" placeholder="password" />
                </Input>
                <FormControlHelper>
                    <FormControlHelperText>
                        Must be at least 6 characters.
                    </FormControlHelperText>
                </FormControlHelper>
                <FormControlError>
                    {/* <FormControlErrorIcon as={AlertCircleIcon} /> */}
                    <FormControlErrorText>
                        At least 6 characters are required.
                    </FormControlErrorText>
                </FormControlError>
            </FormControl>
            <Text

            >Sign up</Text>
        </Box >
    )
}

export default LoginScreen