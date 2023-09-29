import { ScrollView } from 'react-native'
import React from 'react'
import { Box, Image, Text, } from '@gluestack-ui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const MovieDetailScreen = ({ route }: any) => {
    const insets = useSafeAreaInsets();




    return (
        <ScrollView style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#000' }}>
            <Box>
                <Image
                    size="xs"
                    borderRadius={32}
                    source={{
                        uri: "https://images.unsplash.com/photo-1543973277-5020ef836640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
                    }}
                    my="$4"
                    mx="$4"
                />
                <Text>queso</Text>
            </ Box >
        </ ScrollView>
    );
}

export default MovieDetailScreen