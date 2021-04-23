import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import params from "./src/params";
import Field from "./src/components/Field";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Iniciando o Mines!</Text>
            <Text>
                Tamanho da grade: {params.getRowsAmount()}x
                {params.getColumnsAmount()}
            </Text>
            <Field />
            <Field opened />
            <Field opened nearMines={1} />
            <Field opened nearMines={2} />
            <Field opened nearMines={3} />
            <Field opened nearMines={6} />
            <Field mined />
            <Field mined opened />
            <Field mined opened exploded />
            <Field flagged />
            <Field flagged opened />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
