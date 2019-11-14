import { colors } from '../Styles/Colors';
export default {
    iconDelete: {
        width: 30, 
        height: 30, 
        marginRight:8, 
        backgroundColor: colors.newBlue
    },
    mainContainer:{
        flex: 1,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    imagePerson: {
        width: 250,
        height: 250,
        borderRadius: 250/2,
    },
    containerText: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 30,
        marginTop: 10,
        marginRight: 30
    },
    containerButton: {
        alignItems: 'center',
        marginTop: 20
    },
    containerButtonDelete: {
        alignItems: 'center',
        marginTop: 10
    },
    buttonDelete: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.heart_red,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginTop: 3,
        marginBottom: 10,
        height: 55,
        width: '65%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textDelete: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.heart_red
    },
    textInput: {
        width: '100%', 
        borderBottomWidth: 1, 
        borderBottomColor: colors.newBlue
    }

}