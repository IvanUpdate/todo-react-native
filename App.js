import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {colors} from './Colors';
import {AntDesign} from '@expo/vector-icons';
import {tempData} from "./tempData";
import TodoList from "./components/TodoList";

export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.divider}/>
                <Text style={styles.left_title}>Todo </Text>
                <Text style={styles.right_title}>Lists</Text>
                <View style={styles.divider}/>
            </View>
            <View style={styles.main}>
                <TouchableOpacity style={styles.addList}>
                    <AntDesign name="plus" size={16} color={colors.blue}/>
                </TouchableOpacity>
                <Text style={styles.addLabel}>Add List</Text>
            </View>
            <View style={{height: 275, paddingLeft: 32}}>
                <FlatList
                    data={tempData}
                    keyExtractor={item => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <TodoList list = {item} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: "row",
    },
    divider: {
        backgroundColor: colors.lightblue,
        height: 1,
        flex: 1,
        alignSelf: "center",
    },
    right_title: {
        fontSize: 38,
        fontWeight: "300",
        color: colors.blue,
        paddingRight: 64,
    },
    left_title: {
        fontSize: 38,
        fontWeight: "800",
        color: colors.black,
        paddingLeft: 64,
    },
    main: {
        marginVertical: 48,
    },
    addList: {
        borderWidth: 2,
        borderColor: colors.lightblue,
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    addLabel: {
        color: colors.blue,
        fontWeight: "600",
        fontSize: 14,
        marginTop: 8
    }
});
