import React, {useMemo} from "react";
import { Container, Label, Balance } from "./styles";

export default function Balanceitem({data}) {

    const labelName = useMemo(() => {
        if(data.tag == 'saldo'){
            return{
                label: 'Saldo Atual',
                color: '7b81f7'
            } 
        }else if(data.tag == 'receita'){
            return{
                label: 'Entrada de hoje',
                color: '7b81f'
            }
        }else{
            return{
                label: 'Saída de hoje',
                color: 'ef857d'
            }
        }

    },[data]);

    return (
        <Container bg={labelName.color}> 
            <Label>{labelName.label}</Label>
            <Balance>R$:{data.saldo}</Balance>
        </Container>
    );
    }