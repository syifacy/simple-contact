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
import { getDetailContact, updateContact, reset, deleteContact } from '../Actions/ContactAction';
import {boldLargeText, largeText} from '../Styles/String';
import styles from './ContactDetail.style';
import localString from '../Utils/LocalString';
import { ScrollView } from 'react-native-gesture-handler';

class ContactDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            photo: '',
            age: 0,
            editable: false,
            onEditMode: false,
        }
    }
    static navigationOptions = (props) => {
        return{
            title: _.startCase(localString.contactDetailTitle),
        }
    };
    componentDidMount(){
        this.setState({
            firstName: this.props.navigation.state.params.item.firstName,
            lastName: this.props.navigation.state.params.item.lastName,
            age: this.props.navigation.state.params.item.age,
            photo: this.props.navigation.state.params.item.photo,
        });
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.updateSuccess || nextProps.deleteSuccess){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
              });
              this.props.navigation.dispatch(resetAction);
        }else if (nextProps.updateFail){
            this.setState({
                firstName: this.props.navigation.state.params.item.firstName,
                lastName: this.props.navigation.state.params.item.lastName,
                age: this.props.navigation.state.params.item.age,
                photo: this.props.navigation.state.params.item.photo,
            });
            Alert.alert(
                'Warning',
                'Update Failed. Please try again later.',
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
    _deleteContact = () =>{
        const {item} = this.props.navigation.state.params;
        this.props.deleteContact(item.id);
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
    _allowEdit = () => {
        this.setState({
            editable: true,
            onEditMode: true
        });
    }
    _updateData = () =>{
        const {item} = this.props.navigation.state.params;
        const body = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: _.toNumber(this.state.age),
            photo: this.state.photo,
        }
        this.setState({onEditMode: false});
        this.props.updateContact(item.id, body);
    }
    render() {
        const { isLoading } = this.props;
        const {item} = this.props.navigation.state.params;
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
            {
                item.photo === 'N/A' ?
                <Image style={styles.imagePerson} source={require('../Images/icon_person.png')} />
                : 
                <Image style={styles.imagePerson} source={{uri: `${item.photo}`}} />
            }
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalFirstName}</Text>
                <TextInput 
                    style={[boldLargeText, {width: '60%'}]} 
                    onChangeText={text => this._onChangeFirstName(text)}
                    value={this.state.firstName}
                    editable={this.state.editable}
                />
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalLastName}</Text>
                <TextInput 
                    style={[boldLargeText, {width: '60%'}]} 
                    onChangeText={text => this._onChangeLastName(text)}
                    value={this.state.lastName}
                    editable={this.state.editable}
                />
            </View>
            <View style={styles.containerText}>
                <Text style={largeText}>{localString.generalAge}</Text>
                <TextInput 
                    style={[boldLargeText, {width: '60%'}]} 
                    onChangeText={text => this._onChangeAge(text)}
                    keyboardType='numeric'
                    value={_.toString(this.state.age)}
                    editable={this.state.editable}
                />
            </View>
            <View style={styles.containerButton}>
            {
                this.state.onEditMode ?
                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={this._updateData}>
                    <Text style={styles.textDelete}>{_.upperCase(localString.generalUpdate)}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonDelete}
                    onPress={this._allowEdit}>
                    <Text style={styles.textDelete}>{_.upperCase(localString.generalEdit)}</Text>
                </TouchableOpacity>
            }
                
            </View>
            <View style={styles.containerButtonDelete}>
                <TouchableOpacity
                    onPress= {this._deleteContact}
                    style={styles.buttonDelete}
                    >
                    <Text style={styles.textDelete}>{_.upperCase(localString.generalDeleteTitle)}</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
    };
}
const mapStateToProps = ({
    contactListReducer: {
        errorMsg,
        isLoading,
        updateSuccess,
        updateFail,
        deleteSuccess
    }
}) =>{
    return {
        errorMsg,
        isLoading,
        updateSuccess,
        updateFail,
        deleteSuccess
    }
}

const mapDispatchToProps = {
    getDetailContact,
    updateContact,
    reset,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);