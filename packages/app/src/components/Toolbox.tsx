import React, {useState} from 'react';
import {Card, Fab, Icon, Text} from "@nadha/views";
import {View} from "react-native";

export const Toolbox = ({navigation}: { navigation: any }) => {
    const [state, setState] = useState("Play")
    return (
        <React.Fragment>
            <Card style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                flexDirection: "row",
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '70%'
            }}>
                <Icon name={state} onPress={() => setState("Pause")}/>
                <View style={{ marginHorizontal: 16 }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}} onPress={() => navigation.navigate("Player")}>Active song</Text>
                    <Text>Active song details</Text>
                </View>
            </Card>
            <Fab
                style={{position: "absolute", bottom: 10, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </React.Fragment>

    )
}