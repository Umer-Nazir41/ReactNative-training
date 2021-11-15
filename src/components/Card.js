import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//CARD COMPONENT FOR FLATLIST
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //DESTRUCTURE ALL REQUIRED PROPS
    const {title, body, id, navigation} = this.props;

    //DISPLAY CARD WITH DATA IN IT
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('UserProfile', {
            title: title,
            body: body,
            id: id,
          });
        }}>
        <View style={styles.item}>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexGrow: 10,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingRight: 5,
  },
  body: {
    textAlign: 'justify',
    fontSize: 12,
  },
  logo: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
});

export default Card;
