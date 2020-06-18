import React from 'react';
import {Container} from '../..';
import {Text} from '../..';
import {Theme} from '../../types';
import {useTheme} from '../../theme';
import {FlatList, TextStyle, View} from 'react-native';
import {Icon} from "../Icons";

interface Props {
    routes: string[];
    navigate: (route: string) => void;
}

const TEXT_STYLE: TextStyle = {
    fontWeight: '600',
    fontSize: 18
};

const Divider = () => (
    <View style={{marginHorizontal: 6}}>
        <Icon name={"ArrowForward"}/>
    </View>
);


export const Breadcrumb = ({routes, navigate}: Props) => {
    const routesLength: number = routes.length - 1;
    const theme: Theme = useTheme();
    const {colors: {primary}} = theme;
    return (
        <Container style={{flexDirection: "row", alignItems: "center"}}>
            <FlatList
                data={routes}
                renderItem={({item, index}) => (index !== routesLength ? <Text
                    key={item}
                    style={[{color: primary}, TEXT_STYLE]}
                    onPress={() => navigate(item)}>
                    {item}
                </Text> : <Text
                    key={item}
                    style={TEXT_STYLE}
                >
                    {item}
                </Text>)}
                horizontal={true}
                ItemSeparatorComponent={Divider}
                keyExtractor={item => item}
            />
        </Container>
    );
};
