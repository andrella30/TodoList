import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    taskContent: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        flex: 1
    },
    taskContentMarked: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        textDecorationLine: 'line-through'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonRemove: {
        color: '#FFF',
        fontSize: 24
    },
    checkbox: {
        alignSelf: 'center',
        color: 'black',
        marginLeft: 12,    
      },

})