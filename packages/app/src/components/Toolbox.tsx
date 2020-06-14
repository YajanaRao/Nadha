import React, {useState} from 'react';
import {Card, Fab, Icon, Text} from "@nadha/views";
import {TouchableOpacity} from "react-native";

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
                <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => navigation.navigate("Player")}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}} >Active song</Text>
                    <Text>Active song details</Text>
                </TouchableOpacity>
            </Card>
            <Fab
                style={{position: "absolute", bottom: 10, right: 10}}
                onPress={() => navigation.navigate("DataPull")}
            />
        </React.Fragment>

    )
}