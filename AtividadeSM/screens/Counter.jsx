import { useState } from 'react';
import {View, Text, Button} from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);

    const adcionar = () => {
        setCount(count+1);
    }

    const diminuir = () => {
        if (count > 0) {
            setCount(count-1);
        }
    }
    return (
        <View style={
            {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",

            }
        }>
            <Text>Counter: {count}</Text>
            <View style={{flexDirection: "row"}}>
            <Button
            title='Adcionar'
            onPress={adcionar}
            />
                        <Button
            title='Diminuir'
            onPress={diminuir}
            />
            </View>
        </View>
    )
}
