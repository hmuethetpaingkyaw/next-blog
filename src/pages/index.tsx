
import Search from '@/components/utility/search/Search';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {

  return (
    <section className='flex flex-col items-center gap-y-5 mt-36'>
      <h1 className='text-4xl'>Google</h1>
      <Search/>
      <p>
        Google offered in 
        <Link href="/" className='ms-2 underline text-blue-600'>
          Francis
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};