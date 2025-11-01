import { Stack } from 'expo-router';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from '@expo-google-fonts/inter'

import { Loading } from '@/components/Loading';

//Quando um arquivo começa com _ ele reconhece todas as rotas, e é o primeiro arquivo a ser executado

export default function Layout(){
    // fontsLoaded - logica que ira receber
    // .F. - quando a fonte nao for carregada
    // .T. - Quando a fonte for carregada

    const[fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    })

    if(!fontsLoaded){
        return <Loading />
    }
    
    console.log('Passou pelo layout primeiro')
    return <Stack
        screenOptions={{
            headerShown: false
        }}
    />
}