// App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import { ShopProvider } from './shopping/ShopContext';

const App = () => {
  return (
    <ShopProvider>
      <AppRouter />
    </ShopProvider>
  );
};

export default App;
