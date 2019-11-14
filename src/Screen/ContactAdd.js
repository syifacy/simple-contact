import React, {Component} from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Alert
} from  'react-native';
import _ from 'lodash';
import { addContact, reset } from '../Actions/ContactAction';
import {boldLargeText, largeText} from '../Styles/String';
import styles from './ContactDetail.style';
import localString from '../Utils/LocalString';
import { ScrollView } from 'react-native-gesture-handler';

class ContactAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            photo: '',
            age: '',
        }
    }
    static navigationOptions = (props) => {
        console.log("props", props);
        return{
            title: _.startCase(localString.contactAddTitle),
        }
    };
    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        if (nextProps.createSuccess){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
              });
              this.props.navigation.dispatch(resetAction);
        }else {
            this.setState({
                firstName: '',
                lastName: '',
                age: '',
                photo: 'N/A',
            });
            Alert.alert(
                'Warning',
                'Create Failed. Please try again later.',
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
              );
        }
    }
    componentWillUnmount(){
        this.props.reset();
    }
    _onChangeFirstName = (value) =>{
        this.setState({
            firstName: value
        });
    }
    _onChangeLastName = (value) =>{
        this.setState({
            lastName: value
        });
    }
    _onChangeAge = (value) =>{
        this.setState({
            age: value
        });
    }
    _addContact = () =>{
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: _.toNumber(this.state.age),
            photo: "N/A",
        }
        this.props.addContact(body);
    }
    render() {
        const { isLoading } = this.props;
    return (
        <ScrollView style={styles.mainContainer}>
            {
                isLoading ?
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                : null
            }
            <View style={styles.containerImage}>
                <Image style={styles.imagePerson} source={require('../Images/icon_person.png')} />
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalFirstName}</Text>
                <TextInput 
                    style={[boldLargeText, styles.textInput]}  
                    onChangeText={text => this._onChangeFirstName(text)}
                    value={this.state.firstName}
                    editable
                />
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalLastName}</Text>
                <TextInput 
                    style={[boldLargeText, styles.textInput]} 
                    onChangeText={text => this._onChangeLastName(text)}
                    value={this.state.lastName}
                    editable
                />
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalAge}</Text>
                <TextInput 
                    style={[boldLargeText, styles.textInput]} 
                    onChangeText={text => this._onChangeAge(text)}
                    keyboardType='numeric'
                    value={_.toString(this.state.age)}
                    editable
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={this._addContact}>
                    <Text style={styles.textDelete}>{_.upperCase(localString.generalAdd)}</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
    };
}
const mapStateToProps = ({
    contactListReducer: {
        createSuccess
    }
}) =>{
    return {
        createSuccess
    }
}

const mapDispatchToProps = {
    addContact,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd);