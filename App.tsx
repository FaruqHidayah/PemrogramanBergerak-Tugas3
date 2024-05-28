import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Bangun Pagi' },
    { id: '2', name: 'Gosok gigi' },
    { id: '3', name: 'Cuci muka' },
    { id: '4', name: 'Mandi' },
    { id: '5', name: 'Sholat' }
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: (tasks.length + 1).toString(), name: task }]);
      setTask('');
    } else {
      alert('masukkan kegiatan');
    }
  };

  return (
    <ScrollView style={{ flex: 1, paddingTop: 40 }}>
      <View style={{ alignItems: 'center', padding: 10 }}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFc1P-3RZhcK8yGApegjhP8qbEyhIxQqaCQ&s://cache.lahelu.com/image-PoBoBRpeT-70035' }}
          style={{ width: 200, height: 200, marginBottom: 20 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Kegiatan Hari ini</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8, marginBottom: 20, width: '80%' }}
          placeholder="Masukkan Kegiatan"
          onChangeText={setTask}
          value={task}
        />
        <Button
          title="Tambahkan Kegiatan"
          onPress={addTask}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Tasks:</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 18, height: 44 }}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}


