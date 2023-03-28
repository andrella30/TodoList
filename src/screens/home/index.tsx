import {View, Text, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native'
import { styles } from './style'

import {Line}  from '../../components/Line'
import {Task} from '../../components/Task'
import { useState } from 'react'


type TaskInterface = {
    id: number
    text: string
    isChecked: boolean
}


export default function Home() {
    const [tasks, setTasks] = useState<TaskInterface[]>([])
    const [taskName, setTaskName] = useState('')

    const [createTasks, setCreateTasks] = useState(0)
    const [finishTasks, setFinishTasks] = useState(0)
    
    const [idState, setIdState] = useState(1)

    function handleTasksAdd() {
        setIdState(prevId => prevId + 1)
        const task: TaskInterface = ({id: idState, text: taskName, isChecked: false})

        setTasks(prevTask => [...prevTask, task])
        setTaskName('')
        setCreateTasks(prevTask => prevTask + 1)
    }

    function handleTasksRemove(item: TaskInterface) {
        Alert.alert("Remover", `Deseja remover a tarefa ${item.text}?`, [
            {
                text: 'Sim',
                onPress: () => { 
                    setTasks(prevState => prevState.filter(TaskInterface => TaskInterface.text !== item.text)) 
                    setCreateTasks(prevTask => prevTask - 1)
                    handleNotCheckTask(item)
                }
            },
            {
                text: 'Não',
                style: 'cancel',
            }
        ])
    }
 
    function handleCheckTask(task: TaskInterface) {
        task.isChecked = true
        tasks.sort((a, b) => (a.isChecked > b.isChecked) ? 1 : -1)
        setFinishTasks(prev => prev + 1)
    }

    function handleNotCheckTask(task: TaskInterface) {
        task.isChecked = false
        setFinishTasks(prev => prev - 1)
    }


    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                
                <View>
                    <Text key="1" style={styles.titleName}>todo</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputText}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor= "#6B6B6B"
                        onChangeText={setTaskName}
                        value={taskName}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleTasksAdd}>
                        <Text style={styles.buttonText}> + </Text>
                    </TouchableOpacity>

                </View>
            </View>



            <View style={styles.listContainer}>
                <View style={styles.abasText}>
                    <Text key="2" style={styles.abasName}>Criadas {createTasks}</Text>
                    <Text key="3" style={styles.abasName}>Concluidas {finishTasks}</Text>
                </View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item.text}
                    renderItem={({item})  => (
                        
                        <Task 
                            key={item.id}
                            name={item.text}
                            onRemove={() => {handleTasksRemove(item)}}
                            checkTask={() => {handleCheckTask(item)}}
                            notCheckTask={() => {handleNotCheckTask(item)}}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View> 
                            <Line />
                            <Text style={styles.emptyTextTitle}> Você ainda não tem tarefas cadastradas </Text>
                            <Text style={styles.emptyTextSubtitle}> Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>











        </View>
    );
}