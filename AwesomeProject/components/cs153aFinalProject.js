import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {    
    const [mondayWater,setMondayWater] = useState(0)
    const [tuesdayWater,setTuesdayWater] = useState(0)
    const [wednesdayWater,setWednesdayWater] = useState(0)
    const [thursdayWater,setThursdayWater] = useState(0)
    const [fridayWater,setFridayWater] = useState(0)
    const [saturdayWater,setSaturdayWater] = useState(0)
    const [sundayWater,setSundayWater] = useState(0)
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                U.S. Change Counter
            </Text>
            <Text style = {{fontSize: 20}}>
                {change}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title= {"Monday" + mondayWater}
                    onPress = {() => {setMondayWater(mondayWater+1)}}
                />
                <Button
                    title={numNickels + " Nickels"}
                    onPress = {() => {setChange(change+5); setNumNickels(numNickels+1)}}
                />
                <Button
                    title={ numDimes + " Dimes"}
                    onPress = {() => {setChange(change+10); senNumDimes(numDimes+1)}}
                />
                <Button
                    title={numQuarters + " Quarters"}
                    onPress = {() => {setChange(change+25); setNumQuarters(numQuarters+1)}}
                />
                <Button
                    title={numHalfDollars + " Half Dollars"}
                    onPress = {() => {setChange(change+50); setNumHalfDollars(numHalfDollars+1)}}
                />
            </View>
            <Text style = {{fontSize: 20}}>
                total coins = {numPennies + numNickels + numDimes + numQuarters + numHalfDollars}
            </Text>
      </View>
    )
  }


export default App;