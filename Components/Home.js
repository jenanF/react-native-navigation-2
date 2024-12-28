import { View, Text, FlatList, Image, Button, TextInput } from "react-native"
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListItem from "./ListItem";
import { items } from "../data";
import { useState } from "react";
import { RadioButton } from 'react-native-paper'

const Home = () => {

    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedValue, setSelectedValue] = useState('All');

    const filters = items.filter((item) => {
        return item.category === selectedValue
    }
    );

    const filteredData = filters.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredDataAll = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <View style={styles.radiobuttons}>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="All"
                        status={selectedValue === 'All' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('All')}
                    />
                    <Text style={styles.optionText}>All</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Electronics"
                        status={selectedValue === 'Electronics' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Electronics')}
                    />
                    <Text style={styles.optionText}>Electronics</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Home Decor"
                        status={selectedValue === 'Home Decor' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Home Decor')}
                    />
                    <Text style={styles.optionText}>Home Decor</Text>
                </View>

                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Fashion"
                        status={selectedValue === 'Fashion' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Fashion')}
                    />
                    <Text style={styles.optionText}>Fashion</Text>
                </View>


                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Fitness & Outdoor"
                        status={selectedValue === 'Fitness & Outdoor' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Fitness & Outdoor')}
                    />
                    <Text style={styles.optionText}>Fitness & Outdoor</Text>
                </View>


                <View style={styles.radioGroup}>
                    <RadioButton
                        value="Books & Stationery"
                        status={selectedValue === 'Books & Stationery' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('Books & Stationery')}
                    />
                    <Text style={styles.optionText}>Books & Stationery</Text>
                </View>
            </View>



            <FlatList
                data={selectedValue === 'All' ? filteredDataAll : filteredData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ListItem name={item.name} price={item.price}  /*onPress={() => handleItemPress(item.id)}*/ />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchBar: {
        height: 40,
        width: 380,
        textAlign: 'left',
        marginRight: 100,
        marginLeft: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },

    item: {
        fontSize: 18,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 5,
    },

    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',

        marginLeft: 20
    },
    optionText: {
        fontSize: 16,
    },

    selectedValue: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',

    },

    radiobuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 65,
        flexWrap: 'wrap'

    }
});

export default Home
