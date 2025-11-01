import { Button, Text, View } from "react-native";
import { router } from 'expo-router'
export default function Target(){
    return(
        <View style={{flex :1, justifyContent: 'center'}}>
            <Text>Nova Meta</Text>
            <Button
            title='voltar'
            onPress={() => router.back()}
            />
        </View>
    )
}