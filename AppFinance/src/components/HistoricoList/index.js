import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";

import { TouchableWithoutFeedback, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";


export default function HistoricoList({data, deleteItem}) {

    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Você deseja excluir esse item?',
            [{
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Confirmar',
                onPress: () => deleteItem(data.id)
            
            }]
        )
    }

    return (
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon
                        name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                        color="#FFF" 
                        size={20} 
                        
                        />
                        <TipoText>{data.description}</TipoText>
                    </IconView>
                </Tipo>

                <ValorText>
                    R$ {data.value}
                </ValorText>
            </Container>
        </TouchableWithoutFeedback>
    );
}