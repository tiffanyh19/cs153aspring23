import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {
    const [change,setChange] = useState(0)
    const [num,setNum] = useState(0);
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                U.S. Change Counter
            </Text>
            <Text style = {{fontSize: 20}}>
                {change} {num}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title={"Pennies " + change}
                    onPress = {() => {setChange(change+1);setNum(num+1)}}
                />
                <Button
                    title={"Nickels " + change}
                    onPress = {() => {setChange(change+5);setNum(num+5)}}
                />
                <Button
                    title={"Dimes " + change}
                    onPress = {() => {setChange(change+10);setNum(num+10)}}
                />
                <Button
                    title={"Quarters " + change}
                    onPress = {() => {setChange(change+25);setNum(num+25)}}
                />
                <Button
                    title={"Half Dollars " + change}
                    onPress = {() => {setChange(change+50);setNum(num+50)}}
                />
            </View>
      </View>
    )
  }


export default App;
