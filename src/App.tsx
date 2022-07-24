import { Header } from './components/Header';
import { Image } from './components/Image';

function App() {
  return (
    <div>
      <Header />
      <main className="my-8">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">
          Todays pictures:
        </h1>

        <div className="columns-3 gap-8">
          <Image />
        </div>
      </main>
    </div>
  );
}

export default App;
