import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        flex: 0.3,
        backgroundColor: '#000000',
        padding: 24,
        
    },
    listContainer: {
        flex:1, 
        backgroundColor:"#131016",
        padding: 24,
        width: '100%'
    },
    titleName: {
        color: 'white', 
        fontSize: 32, 
        fontWeight: 'bold', 
        marginTop: 68,
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 8,
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
    abasName: {
        color: 'white', 
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
    }

})