import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {colors} from "../Colors";
import {Touchable} from "react-native-web";
import {TodoModal} from "./TodoModal";

export const TodoList = ({list}) => {

    const [visibleList, setVisibleList] = useState(false);

    const toggleListModal = () => setVisibleList(!visibleList);

    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.filter(todo => !todo.completed).length;

    return (
        <View>
            <Modal animationType="slide" visible={visibleList} onRequestClose={() => toggleListModal()}>
                <TodoModal list={list} closeModal={() => toggleListModal()} />
            </Modal>
            <TouchableOpacity
                style={[styles.listContainer, {backgroundColor: list.color}]}
                onPress={() => toggleListModal()}
            >
                <Text style={styles.listTitle} numberOfLines={1}>
                    {list.name}
                </Text>

                <View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 18,
        color: colors.white,
        alignItems: "center"
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: colors.white,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: colors.white,
    },
})
