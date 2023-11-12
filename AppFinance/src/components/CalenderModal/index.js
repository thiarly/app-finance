import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";

import { 
    Container, 
    ButtonFilterText,
    ModalContent,
    ButtonFilter
   

} from "./styles";


export default function CalenderModal({ setVisible }){
    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex:1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent>
            
                <ButtonFilter>
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>
                
            </ModalContent>

        </Container>
    );
}