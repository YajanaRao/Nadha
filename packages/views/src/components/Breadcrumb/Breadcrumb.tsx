import React from 'react';
import { Container } from '../Container/Container';
import { Text } from '../Text/Text';
import { Theme } from '../../types';
import { useTheme } from 'emotion-theming';
import { TextStyle } from 'react-native';

interface Props {
    routes: string[];
    navigate: (route: string) => void;
}

const TEXT_STYLE: TextStyle = {
    fontWeight: '500',
    fontSize: 16
}

const Divider = () => (
    <Text style={{ marginHorizontal: 6, color: 'gray' }}>/</Text>
)

export const Breadcrumb = ({ routes, navigate }: Props) => {
    const routesLength: number = routes.length - 1;
    const theme: Theme = useTheme();
    const { colors: { primary } } = theme;
    return (
        <Container style={{ flexDirection: "row" }}>
            {routes.map((route, index) => index != routesLength ? (
                <Text
                    key={route}
                    style={[{ color: primary }, TEXT_STYLE]}
                    onPress={() => navigate(route)}>
                    {route}
                    <Divider />
                </Text>) : (
                    <Text key={route} style={TEXT_STYLE}>{route}</Text>
                )
            )}
        </Container>
    );
};