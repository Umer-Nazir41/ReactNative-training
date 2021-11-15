import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';

//IMPORT REDUX FUNCTIONS
import {
  setCrudString1,
  updateCrudString1,
  deleteCrudString1,
  setCrudString2,
  updateCrudString2,
  deleteCrudString2,
} from '../../store/reducers/crudSlice';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crud1: '',
      crud2: '',
      crudValue: '',
    };
    this.onChangeCrud1 = this.onChangeCrud1.bind(this);
    this.onChangeCrud2 = this.onChangeCrud2.bind(this);
    this.onChangeCrudValue = this.onChangeCrudValue.bind(this);
  }

  onChangeCrud1(value) {
    this.setState({crud1: value});
  }

  onChangeCrud2(value) {
    this.setState({crud2: value});
  }

  onChangeCrudValue(value) {
    this.setState({crudValue: value});
  }

  render() {
    //DESTRUCTURING VARIABLE FROM PROPS AND STATE
    const {crudValue, crud1, crud2} = this.state;
    const {crudString2, crudString1} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <TextInput
            editable
            maxLength={40}
            placeholder="Crud String"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.onChangeCrudValue(text)}
            value={crudValue}
            style={{paddingHorizontal: 10, textAlign: 'center'}}
          />
        </View>
        <View style={styles.outputFieldOuterView}>
          <View style={styles.outputFieldView}>
            <Text style={styles.outputText}>{crud1}</Text>
          </View>
          <View style={styles.outputFieldView}>
            <Text style={styles.outputText}>{crud2}</Text>
          </View>
        </View>

        <View style={styles.controlView}>
          <TouchableOpacity
            onPress={() => {
              console.log(crudValue);
              this.props.dispatch(setCrudString1(crudValue));
            }}>
            <Text style={styles.outputText}>SET1</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              //onChangeCrudValue('');
              this.onChangeCrud1(crudString1);
              console.log(crudString1);
            }}>
            <Text style={styles.outputText}>GET1</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              this.props.dispatch(updateCrudString1(crudValue));
              //onChangeCrudValue('');
              this.onChangeCrud1(crudString1);
            }}>
            <Text style={styles.outputText}>UPDATE1</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>
          <TouchableOpacity
            onPress={() => {
              //onChangeCrudValue('');
              this.props.dispatch(deleteCrudString1());
              this.onChangeCrud1(crudString1);
            }}>
            <Text style={styles.outputText}>DELETE1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.controlView}>
          <TouchableOpacity
            onPress={() => {
              //onChangeCrudValue('');
              this.props.dispatch(setCrudString2(crudValue));
            }}>
            <Text style={styles.outputText}>SET2</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              //onChangeCrudValue('');
              this.onChangeCrud2(crudString2);
            }}>
            <Text style={styles.outputText}>GET2</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              this.props.dispatch(updateCrudString2(crudValue));
              //onChangeCrudValue('');
              this.onChangeCrud2(crudString2);
            }}>
            <Text style={styles.outputText}>UPDATE2</Text>
          </TouchableOpacity>

          <View style={{padding: 10}}></View>

          <TouchableOpacity
            onPress={() => {
              //onChangeCrudValue('');
              this.props.dispatch(deleteCrudString2());
              this.onChangeCrud2(crudString2);
            }}>
            <Text style={styles.outputText}>DELETE2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  outputFieldOuterView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  outputFieldView: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputText: {fontWeight: 'bold', fontSize: 15},
  controlView: {
    flex: 0.5,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
});

//REDUX STORE DATA

const mapStateToProps = state => ({
  crudString1: state.crud.crudString1,
  crudString2: state.crud.crudString2,
});

export default connect(mapStateToProps)(Crud);
