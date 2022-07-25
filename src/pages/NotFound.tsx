import { WarningOctagon } from 'phosphor-react';
import { Header } from '../components/Header';

function NotFound() {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <h1 className="text-4xl font-bold flex gap-4 text-red-400 mb-8">
          <WarningOctagon /> Page Not Found
        </h1>
        <p className="text-xl">
          Oops. It seems the page you were looking for does not exist.
        </p>
      </main>
    </div>
  );
}

export default NotFound;
