import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className='rounded-b-lg bg-white fixed w-full'>
                <Navigation />
            </div>
            <Outlet />
            <Footer />
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
})