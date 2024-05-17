import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import appRoutes from './routes/routes';

import './App.css'

function App() {

  // 根據不同的環境，設定不同的樣式 (Line LIFF、)
  useEffect(() => {
    if (window.location.pathname.includes('/liff')) {
      window.document.documentElement.style.overflow = 'hidden';
      window.document.documentElement.style.height = '100svh';
      window.document.body.style.overflow = 'hidden';
      window.document.body.style.height = '100svh';
      const reactRoot = document.getElementById('root')!;
      reactRoot.style.height = '100svh';
      reactRoot.style.overflow = 'auto';
    }
    else {
      window.scrollTo(0, 1);
    }
  }, []);

  return (
    <RouterProvider router={createBrowserRouter(appRoutes)} />
  )
}

export default App
