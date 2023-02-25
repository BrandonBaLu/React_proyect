import React, {Component} from "react";
import {StyleSheet, TouchableOpacity ,Text, View} from 'react-native';

/*const HelloWorkApp = ()=> {
  return (
    <View
    style ={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Hello World!</Text>
      <Text>Hello World!</Text>
    </View>
  );
};
export default HelloWorkApp;
*/

class App extends Component{
  //incrementar y decrementar un contador de 1 en 1
    constructor(props){
      super(props);
      this.state = {
        contador: 0
      }
    }
    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1
        });
        }
    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        });
        }
    render(){
        return (
            <View style={styles.container}>
            <Text>Contador: {this.state.contador}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.incrementar}>
                <Text>Incrementar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this.decrementar}>
                <Text>Decrementar</Text>
            </TouchableOpacity>
            </View>
        );
    }    
  
}


 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  }
});
export default App;