import {colors} from '../Styles/Colors';

export default {
    mainContainerList: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginTop: 3,
        marginBottom: 10,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.accent_blue
    },
    containerButton:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height:24,
    }
}