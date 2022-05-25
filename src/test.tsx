import React from 'react';
import { Menu, Transition } from '@headlessui/react';

export const TestMenu = (props: { text: string }) => {

    const { text } = props;
    return <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex text-base">
            {text}
        </Menu.Button>
        <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item key="1">
                        {({ active }) => (
                            <div
                                onClick={() => { console.log(''); }}
                                className={`${active ? 'bg-gray-100' : ''} cursor-pointer block px-4 py-2 text-base text-gray-700`}
                            >
                                Item 222222
                            </div>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
}

export default TestMenu