# React Todo List (More Fundamental)

Materi kali ini kita akan belajar lebih lanjut tentang React Component. Setelah kalian mengetahui basic cara react bekerja, 
kita sudah bisa memakai fungsi" dan kelebihan react dalam melakukan interaksi data dengan user.

Gua akan memakai contoh untuk membuat project simple todo list. Pertama tama kalian harus buat project baru menggunakan CRA (create react app).

`yarn create react-app todo-list`

*disini gua pakai package manager yarn, karena mac aga susah memakai NPM.


Seperti biasa bersihkan content default dari CRA di `App.js`

```JSX
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>RPN Todo List</h1>
    </div>
  );
}

export default App;
```

## CSS Styling

Hal yang pertama kita pelajari adalah bagaimana kita menambahkan styling di dalam reactjs.

ada 2 cara untuk melakukan styling.

### .css file

cara pertama adalah kita membuat `.css` file terpisah dan melakukan import module ke dalam react component.
disini kita akan mengubah `App.css` dari default react menjadi custom styling kita sendiri.

Hapus semua code yang ada di `App.css` dan ganti color background seperti ini :

```css
.App {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

body {
  background-color: #161c24;
}
```

![image](https://github.com/user-attachments/assets/b6425f43-a84e-42c9-bb9a-2de13c94055e)

### Inline Styling (JSX)

cara kedua adalah kita melakukan inline styling menggunakan property `style` di setiap tag elemen JSX yang kalian buat.
karena font h1 jelek sekali, kita akan ubah ganti warna dan adjust centering.

```JSX
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#43B2E2'}}>RPN Todo List</h1>
    </div>
  );
}

export default App;
```

seperti kalian lihat, ada perbedaan inline styling di JSX. dimana css ini menggunakan camelCase.

![image](https://github.com/user-attachments/assets/6fec46f6-ddcf-4202-87d0-b8aec67b4b33)


## Handling Events

Lanjut kita akan belajar gimana cara handle events di react. Salah satu event yang umum dipakai adalah `onChange` event.

`onChange` adalah event handler di React yang digunakan untuk menangani perubahan input pada elemen form, seperti `<input>`, `<textarea>`, dan `<select>`. 
Event ini dipicu setiap kali ada perubahan nilai pada elemen tersebut. `onChange` sangat berguna untuk mengontrol elemen input dan memperbarui state 
komponen berdasarkan input dari user.

Kita akan membuat komponen textfield untuk menulis task todolist di project ini, setiap user input text didalam textfield dan klik button submit. Maka todo yang sudah dibuat akan masuk kedalam state list of task.

Buatlah komponen `AddTask` di dalam folder src/components. 

src/components/AddTask.jsx
```JSX
import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
```

jangan lupa tambahkan css untuk AddTask agar terlihat menarik, di `App.css`
```css
form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #FDFDFE
  ;
}

button {
  padding: 10px 20px;
  background-color: #43B2E2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}
```

Fungsi `handleSubmit` digunakan untuk menangani perubahan nilai input. Fungsi ini mengambil nilai terbaru dari event target (event.target.value) dan memperbarui state `text`.

Dengan menggunakan `onChange`, kita dapat membuat komponen form yang interaktif dan responsif terhadap input dari user, memastikan bahwa state komponen selalu sinkron dengan nilai input yang diberikan oleh user.

Props onAdd ini penghubung antara App.js dan AddTask komponen untuk menyalurkan data todo ke parent agar di push ke dalam `tasks` state.

update ke App.js
```JSX
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task)
    setTasks([...tasks, { id: Date.now(), text: task, completed: false, date: new Date() }]);
  };

  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: '#43B2E2'}}>RPN Todo List</h1>
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
```

`addTask` function berfungsi untuk mendaftar kan task ke dalam task list state di parent `App`. 
Function ini disalurkan lewat props agar bisa dipanggil di AddTask component dimana kita melakukan 
handleChange event untuk menerima input dari user.

Testing untuk input todo di textfield dan mari kita lihat `console.log(task)` di inspect element.

![image](https://github.com/user-attachments/assets/49fb25f4-1cd3-4646-b3f9-3bc3ebf41b38)






