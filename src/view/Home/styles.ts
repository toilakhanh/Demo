import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
    },
    itemList: {
        width: width * 0.45,
        height: width * 0.65,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#FFF',
    },
    userAvatar: {
        width: width * 0.4, height: width * 0.4
    },
    basicInfo: {
        width: width * 0.45,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleEmployment: {
        flexShrink: 1,
        marginTop: 4
    },
    labelInfo: {
        fontWeight: 'bold',
        fontSize: 12
    },
    reloadButton: { height: 40, width: 140, backgroundColor: 'red', alignSelf: 'center', borderRadius: 8, alignItems: 'center', justifyContent: 'center', margin: 12 },
    reloadText: {
        fontSize: 16, color: '#FFF', fontWeight: 'bold'
    }
})