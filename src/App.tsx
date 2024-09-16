import MUITodoApp from './components/MUITodoApp';
import TailwindTodoApp from './components/TailwindTodoApp';
import ChakraTodoApp from './components/ChakraTodoApp';
import AntDesignTodoApp from './components/AntDesignTodoApp';
import MantineTodoApp from './components/MantineTodoApp';
import RadixTodoApp from './components/RadixTodoApp';

function App() {
	return (
		<div className="min-h-screen">
			<h1 className="text-5xl font-bold text-center mb-8">TODO App Gallery</h1>
			<div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="card">
					<div className="p-4">
						<MUITodoApp />
					</div>
				</div>
				<div className="card">
					<div className="p-4">
						<TailwindTodoApp />
					</div>
				</div>
				<div className="card">
					<div className="p-4">
						<ChakraTodoApp />
					</div>
				</div>
				<div className="card">
					<div className="p-4">
						<AntDesignTodoApp />
					</div>
				</div>
				<div className="card">
					<div className="p-4">
						<MantineTodoApp />
					</div>
				</div>
				<div className="card">
					<div className="p-4">
						<RadixTodoApp />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
