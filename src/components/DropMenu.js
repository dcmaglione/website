import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DropMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="hover:text-accent dark:hover:text-accent transition-all cursor-pointer">
          <FiMenu />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-center xs:origin-top-right absolute -right-11 xs:right-0 mt-1 w-max shadow-md border-2 border-primaryBgDark dark:border-primaryBgLight bg-secondaryBgDark dark:bg-secondaryBgLight text-2xl font-mono font-semibold">
          <div className="p-1/4">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#about"
                  className={classNames(
                    active
                      ? 'bg-primaryBgDark dark:bg-primaryBgLight text-primaryTextDark dark:text-primaryTextLight'
                      : 'text-secondaryTextDark dark:text-secondaryTextLight',
                    'block p-2'
                  )}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#experience"
                  className={classNames(
                    active
                      ? 'bg-primaryBgDark dark:bg-primaryBgLight text-primaryTextDark dark:text-primaryTextLight'
                      : 'text-secondaryTextDark dark:text-secondaryTextLight',
                    'block p-2'
                  )}
                >
                  Experience
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#projects"
                  className={classNames(
                    active
                      ? 'bg-primaryBgDark dark:bg-primaryBgLight text-primaryTextDark dark:text-primaryTextLight'
                      : 'text-secondaryTextDark dark:text-secondaryTextLight',
                    'block p-2'
                  )}
                >
                  Projects
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#skills"
                  className={classNames(
                    active
                      ? 'bg-primaryBgDark dark:bg-primaryBgLight text-primaryTextDark dark:text-primaryTextLight'
                      : 'text-secondaryTextDark dark:text-secondaryTextLight',
                    'block p-2'
                  )}
                >
                  Skills
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#education"
                  className={classNames(
                    active
                      ? 'bg-primaryBgDark dark:bg-primaryBgLight text-primaryTextDark dark:text-primaryTextLight'
                      : 'text-secondaryTextDark dark:text-secondaryTextLight',
                    'block p-2'
                  )}
                >
                  Education
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropMenu;
