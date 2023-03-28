import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles'
import React, {useState} from 'react';


import Checkbox from 'expo-checkbox';

type Props = {
    name: string
    onRemove: () => void
    checkTask: () => void
    notCheckTask: () => void
}

export function Task({name, onRemove, checkTask, notCheckTask} : Props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => {
                    setToggleCheckBox(newValue)
                    newValue ? checkTask() : notCheckTask()                   
                }}
                
            />

             <Text style={toggleCheckBox? styles.taskContentMarked : styles.taskContent}> {name} </Text>
             <TouchableOpacity 
                style={styles.button}
                onPress={onRemove}
            >
                  <Text style={styles.buttonRemove}> - </Text>
            </TouchableOpacity>
        </View>

    )
}