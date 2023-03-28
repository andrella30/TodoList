import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#131016",
        padding: 8,
    },
    listContainer: {
        flex:1, 
        backgroundColor:"#131016",
        padding: 16,
        width: '100%'
    },
    titleName: {
        color: 'white', 
        fontSize: 32, 
        fontWeight: 'bold', 
        marginTop: 60,
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 28,
        marginBottom: 8,
        padding: 16
    },
    inputText: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1E25',
        borderRadius: 10,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    abasText: {
        justifyContent:'space-between',
        width: '100%',
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 18
    },
    createName: {
        color: '#00FFFF', 
        fontSize: 16, 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    finishName: {
        color: '#6495ED', 
        fontSize: 16, 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    divisor: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    emptyTextTitle: {
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    emptyTextSubtitle: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
    },

})