import {
    FlatList,
    Text,
    FlatListProps,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native'

import { styles } from './styles'
import { colors } from '@/theme'
import { Separator } from "../Separator"

// o <T> significa um tipo dinanico igual o var
type Props<T> = FlatListProps<T> & {
    title: string
    emptyMessage?: string
    containerStyle?: StyleProp<ViewStyle>
}

export function List<T>({
    containerStyle,
    title,
    data,
    renderItem,
    emptyMessage,
    ...rest
}: Props<T>){
    return (
        <View style={[styles.container,containerStyle]}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                data={data}
                renderItem = {renderItem}
                showsVerticalScrollIndicator = {false}
                ItemSeparatorComponent={() => <Separator color={colors.gray[400]} />}
                ListEmptyComponent={() => (
                    <Text style={styles.empty}>{emptyMessage}</Text>
                )}
                {...rest}
            />
        </View>
    )
}