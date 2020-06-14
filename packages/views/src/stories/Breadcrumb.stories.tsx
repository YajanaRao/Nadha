import React from "react";
import { action } from "@storybook/addon-actions";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { Container } from "../components/Container/Container";

const navigation = {
  navigate: action("navigate")
} ;

export const RootBreadcrumb = () => (
    <Container>
        <Breadcrumb routes={['Library']} navigate={(route: string) => navigation.navigate(route)} />
    </Container>
);

export const NestedBreadcrumb = () => (
    <Container>
        <Breadcrumb routes={['Library', 'Music', 'Kannada']} navigate={(route: string) => navigation.navigate(route)} />
    </Container>
);

export default {
    title: "Breadcrumb",
};
