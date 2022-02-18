import React from 'react';
import Select from "../components/select";
import RadioBox from "../components/radiobox";
import ComboBox from "../components/combobox";

const MainPage = () => {
    const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt']


    return (
        <div className={'w-1/2 space-y-10'}>
            <Select items={people}
                    onSelectChanged={(item) => console.log(item)}
                    selectedItem={people[2]}/>
            <RadioBox
                items={people}
                onSelectChanged={(item) => console.log(item)}/>
            <ComboBox
                items={people}
                onSelectChanged={(item) => console.log(item)}
                selectedItem={people[2]}
            />
        </div>
    );
};

export default MainPage;