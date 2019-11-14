import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import _ from 'lodash';
import {getListContact} from '../Actions/ContactAction'
import styles from './ContactBoard.style';
import ContactList from '../Components/ContactList';
import localString from '../Utils/LocalString';

class ContactBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        }
    }
    static navigationOptions = (props) => ({
        headerTitle: _.startCase(localString.contactBoardTitle),
        headerRight: (
            <TouchableOpacity
                onPress={() => props.navigation.navigate('AddContact')}
            >
                <Image style={{width: 24, height: 24, marginRight: 5}} source={require('../Images/icon_plus.png')}/>
            </TouchableOpacity>
        )
        
    });
    componentDidMount(){
        this.props.getListContact();
    }
    _onRefresh = async() =>{
        await this.props.getListContact();
    }
    _goToDetail= (item) => async() =>{
        this.props.navigation.navigate('Detail', {item})
    }
   
    render() {
        const {listContact, isLoading} = this.props;
      return (
        <ScrollView style={styles.mainContainer}>
            <ContactList 
                listData={listContact}
                refreshing={isLoading}
                onDetailListPress={this._goToDetail}
                onRefresh={this._onRefresh}
            />
        </ScrollView>
      )
    };
}

const mapStateToProps = ({
    contactListReducer: {
        errorMsg,
        isLoading,
        listContact,
    }
}) =>{
    return {
        errorMsg,
        isLoading,
        listContact,
    }
}

const mapDispatchToProps = {
    getListContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactBoard)