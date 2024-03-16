import { Checkbox } from 'flowbite-react';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div>
            {/* <div className='flex flex-col items-center space-y-1'>
                <label htmlFor="darkModeToggle">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </label>
                <ToggleSwitch id="darkModeToggle" checked={darkMode} onChange={toggleDarkMode}/>
            </div> */}
            <label class="inline-flex items-center me-5 cursor-pointer">
                <Checkbox checked={darkMode} onChange={toggleDarkMode} class="sr-only peer" /> 
                <div className="relative w-14 h-7 bg-secondaryYellow peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-black rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900">
                    <div className='flex justify-between p-0.5'>
                        <div>{darkMode ? <Icon icon="ph:moon-fill" width="18" height="18" /> : ''}</div>
                        <div>{darkMode ? '' : <Icon icon="ph:sun-fill" width="18" height="18" />}</div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default DarkModeToggle;
