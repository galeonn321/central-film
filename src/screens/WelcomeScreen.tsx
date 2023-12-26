
import { Box, Button, ButtonSpinner, ButtonText, FormControl, FormControlError, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, Heading, Image, Input, InputField, Text } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground } from 'react-native';
import { LOG } from '../config/logger';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/Ionicons";

const WelcomeScreen = () => {
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
        </Box >
    )
}

export default WelcomeScreen;