import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";

import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({data}) {
    return (
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
    );
}