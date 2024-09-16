import MUITodoApp from './components/MUITodoApp';
import TailwindTodoApp from './components/TailwindTodoApp';
import ChakraTodoApp from './components/ChakraTodoApp';

const App = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-center mb-8">TODO App Gallery</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				<div className="bg-white border rounded-lg overflow-hidden shadow-lg">
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-4 text-center">MUI Version</h2>
						<MUITodoApp />
					</div>
				</div>
				<div className="bg-white border rounded-lg overflow-hidden shadow-lg">
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-4 text-center">Tailwind Version</h2>
						<TailwindTodoApp />
					</div>
				</div>
				<div className="bg-white border rounded-lg overflow-hidden shadow-lg">
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-4 text-center">Chakra UI Version</h2>
						<ChakraTodoApp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
