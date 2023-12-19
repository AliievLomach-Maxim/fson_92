import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
