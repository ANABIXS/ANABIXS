import React  from 'react';
import ClassCounter from './components/ClassCounter';
import "./components/styles/App"
function App() {
 
  return (
    <div className="App">
     <div className='post'>
        <div className='post__content'>
          <strong>1. Javascript</strong>
          <div>
            Javascript - язык программирования
          </div>
        </div>
        <div className='post__btns'>
          <button>Удалить</button>
        </div>
     </div>
    </div>
  );
}

export default App;
