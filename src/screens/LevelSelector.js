import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

const LevelButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: props.bgColor }]}
            onPress={() => props.onLevelSelected(props.levelDificulty)}
        >
            <Text style={styles.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>
    );
};

export default (props) => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <LevelButton
                        {...props}
                        bgColor={"green"}
                        levelDificulty={0.1}
                        label={"Fácil"}
                    />
                    <LevelButton
                        {...props}
                        bgColor={"yellow"}
                        levelDificulty={0.2}
                        label={"Médio"}
                    />
                    <LevelButton
                        {...props}
                        bgColor={"red"}
                        levelDificulty={0.3}
                        label={"Difícil"}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EEE",
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: "#EEE",
        fontWeight: "bold",
    },
});
