import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header 
    {...headerProps}
    className={`w-full flex justify-between ${className}`}>
      <div className='space-x-5 m-5'>
        <Link href="#">About</Link>
        <Link href="#">Store</Link>
      </div>
      <div className='space-x-5 flex items-center m-5'>
        <Link href="#" className='sm:inline'>Gmail</Link>
        <Link href="#" className='sm:inline'>Image</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-sm text-gray-600 dark:text-gray-300">
            JL
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
