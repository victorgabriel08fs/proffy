import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: 'center',
        padding: 40,

    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 14,
        lineHeight: 20,
        maxWidth: 150,
        marginTop: 40
    }
});

export default styles;