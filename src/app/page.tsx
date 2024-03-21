import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('./components/Navbar'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar />
    </main>
  );
}
