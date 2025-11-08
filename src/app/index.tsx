import { View } from "react-native";
import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target"
import { List } from "@/components/List"

const summary = {
    total : 'R$ 2.680,00',
    input: {label: 'Entradas', value: 'R$ 6.184,90'},
    output: {label: 'Saidas', value: 'R$ 883,65'}
}

const targets = [
    {
        id:'1',
        name: 'Comprar uma cadeira ergonômica',
        percentage: '75%',
        current: 'R$ 900,00',
        target: 'R$ 1.200,00'
    },
    {
        id:'2',
        name: 'Apple Watch',
        percentage: '50%',
        current: 'R$ 580,00',
        target: 'R$ 1.160,00'
    },
    {
        id:'3',
        name: 'Viagem para SP',
        percentage: '40%',
        current: 'R$ 1.000,00',
        target: 'R$ 400,00'
    },
    {
        id:'4',
        name: 'Carro',
        percentage: '10%',
        current: 'R$ 10.000,00',
        target: 'R$ 1.160,00'
    },
    {
        id:'5',
        name: 'Carro',
        percentage: '10%',
        current: 'R$ 10.000,00',
        target: 'R$ 1.160,00'
    },
    {
        id:'6',
        name: 'Carro',
        percentage: '10%',
        current: 'R$ 10.000,00',
        target: 'R$ 1.160,00'
    },
    {
        id:'7',
        name: 'Carro',
        percentage: '10%',
        current: 'R$ 10.000,00',
        target: 'R$ 1.160,00'
    },
    {
        id:'8',
        name: 'Carro',
        percentage: '10%',
        current: 'R$ 10.000,00',
        target: 'R$ 1.160,00'
    }
]
export default function Index(){
    return(
        <View style={{flex: 1}}>
            <HomeHeader data={summary}/>
            
            <List
                title="Metas"
                data={[]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Target data = {item}/>}
                emptyMessage="Nenhuma meta. Toque em nova meta para criar."
            />
        </View>
    )
}