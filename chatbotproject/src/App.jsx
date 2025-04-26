import React from 'react';

import CustomChatbot from './components/ChatBot';
import Counter from './components/Counter';
import Table from './components/Table';

function App() {
  const tableData = [
    { name: 'Shiv', age: 21, email: 'shiv@gmail.com' },
    { name: 'Ashish', age: 25, email: 'ashish@gmail.com' },
    { name: 'Vishal', age: 23, email: 'vishal@gmail.com' },
  ];
  return (
    <div>
      <CustomChatbot />
      {/* <Counter /> */}
      {/* <Table data={tableData} /> */}
    </div>
  );
}

export default App;