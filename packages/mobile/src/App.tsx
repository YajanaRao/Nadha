import React from 'react';
import {
  Screen,
  Container,
  List,
  Card,
  Appbar,
  Fab,
  DefaultTheme,
  DarkTheme,
  ThemeProvider,
} from '@nadha/views';
import {Text} from 'react-native';

export function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Screen>
        <Appbar />
        <Container>
          <Card>
            <Text>
              Hi everyone! Seems like there hasn't been much going on in this
              issue lately. If there are still questions, comments, or bugs,
              please feel free to continue the discussion. Unfortunately, we
              don't have time to get to every issue. We are always open to
              contributions so please send us a pull request if you would like
              to help. Inactive issues will be closed after 30 days. Thanks!
            </Text>
          </Card>
        </Container>
        <Container>
          <List title={'Music'} icon="Folder" />
          <List title={'Kannada songs'} icon="Folder" />
        </Container>
        <Container>
          <List title={'Song title 1'} />
          <List title={'Song title 2'} />
        </Container>
        <Fab style={{position: 'absolute', bottom: 10, right: 10}} />
      </Screen>
    </ThemeProvider>
  );
}
