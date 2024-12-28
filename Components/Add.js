import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useState } from "react";
import { RadioButton } from 'react-native-paper';
import { items } from "../data";


const Add = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [selectedValue, setSelectedValue] = useState('Electronics');



    const handleSubmit = (name, description, price, category) => {

        let id = items.length + 1;
        const newItem = { name, description, price, category, id }

        items.push(newItem);

        console.log(newItem);
        console.log(items)

    }
    return (
        <View>
            <Text style={styles.title}>Add An Item</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Enter description"

            />

            <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}

                placeholder="Enter Price"

            />


            <View style={styles.radiobuttons}>


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

            <Button title="Submit" style={styles.submit} onPress={() => handleSubmit(name, description, price, selectedValue)}>Submit</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 380,
        textAlign: 'left',
        alignSelf: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
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
        marginRight: 50,
        alignSelf: 'center',
        flexWrap: 'wrap'

    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 0
    },
    submit: {
        backgroundColor: 'grey',
        color: 'white'
    }
});

export default Add
