import React, { PureComponent } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './ContactListCard.style';

class ContactListCard extends PureComponent {
    render() {
        const {dataComponent} = this.props;
      return (
          <TouchableOpacity
            style={styles.mainContainerList}
            onPress={this.props.onDetailList(dataComponent)}
          >
            <View style={styles.containerButton}>
              <Text style={styles.boldText}>{`${dataComponent.firstName} ${dataComponent.lastName}`}</Text>
              <TouchableOpacity 
                style={styles.icon}
                onPress={this.props.onDeleteSelected(dataComponent)}
                >
                
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      )
    };
}

export default (ContactListCard);