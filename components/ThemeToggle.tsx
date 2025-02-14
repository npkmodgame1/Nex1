import { SetStateAction, useContext } from 'react';
import { Switch } from '@headlessui/react';
import { ThemeContext } from '../ThemeContext';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface Props {
  className?: string;
  mobileMenu?: boolean;
  setOpenMenu?: React.Dispatch<SetStateAction<boolean>>;
  openMenu?: boolean;
}

export const ThemeToggle = ({ className, openMenu, setOpenMenu }: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Switch.Group
      as='div'
      className={`  w-[9rem] flex items-center  ${className}  `}>
      <Switch
        checked={theme}
        onChange={() => {
          localStorage.setItem('theme', !theme ? 'true' : 'false');
          setTheme((prev) => !prev);

          if (openMenu) {
            setOpenMenu(false);
          }
        }}
        className={classNames(
          theme ? 'bg-blue-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none '
        )}>
        <span
          aria-hidden='true'
          className={classNames(
            theme ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as='span' className='ml-3'>
        <span
          className={`text-sm font-medium ${
            theme ? 'text-white' : 'text-gray-900'
          }`}>
          {theme ? 'Dark' : 'Light'}
        </span>
        {/* <span className='text-sm text-gray-500'>(Save 10%)</span> */}
      </Switch.Label>
    </Switch.Group>
  );
};
