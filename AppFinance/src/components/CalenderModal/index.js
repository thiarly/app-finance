import React, {useState} from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";

import { 
    Container, 
    ButtonFilterText,
    ModalContent,
    ButtonFilter
   

} from "./styles";

import { Calendar, LocaleConfig } from "react-native-calendars";
import ptBR from './localeCalendar';

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function CalenderModal({ setVisible, handleFilter }){
    const [dateNow, setDateNow] = useState(new Date());
    const [markeddates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        
        setDateNow(new Date(date.dateString));

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: "#3b3dbf",
            textColor: "#fff"
            };
        
        setMarkedDates(markedDay);
        
    }

    function handleFilterDate(){
        handleFilter(dateNow); // era dateNow
        setVisible();
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex:1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent>
            
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markeddates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: "#FF0000",
                        selectedDayTextColor:"#fff",
                        selectedDayBackgroundColor:"#00adf5",
                    }}
                           
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>
                
            </ModalContent>

        </Container>
    );
}