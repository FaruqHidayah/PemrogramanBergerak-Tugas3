import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const reversedText = inputText.split('').reverse().join('');
    setIsPalindrome(inputText === reversedText);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image
        source={{
          uri: 'data:image/jpeg;base64,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'
        }}
        style={{width:100, height:100}}
      />

      <TextInput
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Masukkan kata"
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title="Check Palindrome" onPress={checkPalindrome} />
      {isPalindrome !== null && (
        <Text 
        style={{ marginTop: 20, fontSize: 18 }}>
          {isPalindrome ? 'Palindrome valid' : 'Invalid palindrome!'}
        </Text>
      )}
    </View>
  );
};

export default App;

