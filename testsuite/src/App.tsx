import './App.css'
import { ThemeProvider } from "@/components/theme-provider"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from './components/mode-toggle'

import Sidebar from './components/sidebar'


function App() {


  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <main className='max-w-full flex flex-col h-screen '>
          <nav className='top-0 max-w-full z-50 sticky'>
            <Menubar className='top-0 w-full z-50 h-20'>
              <MenubarMenu>
                <MenubarTrigger></MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger></MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger></MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <div className='flex flex-row justify-center items-center space-x-2'>
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                    </div>
                    <div>
                      name
                    </div>

                  </div>

                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <ModeToggle />
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>

          </nav>
          <aside className='flex-1 w-10'>
            <Sidebar />

          </aside>
        </main>
      </ThemeProvider>

    </>
  )
}

export default App
