import React from "react";
import { Container, Title, ButtonMenu } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Icon name="menu" color="#121212" size={30} />
            </ButtonMenu>

            { title && (
            <Title>
                {title}
            </Title> 
            )}
        </Container>
    );
    }