// import theme style scss file
import 'styles/theme.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContextProvider from 'hooks/DataFake';



export const metadata = {
    title: 'Dash UI - Next.Js Admin Dashboard Template',
    description: 'Dash UI - Next JS admin dashboard template is free and available on GitHub. Create your stunning web apps with our Free Next js template. An open-source admin dashboard built using the new router, server components, and everything new in Next.js 13.',
    keywords: 'Dash UI, Next.js 13, Admin dashboard, admin template, web apps, bootstrap 5, admin theme'
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className='bg-light'>
                <ContextProvider>
                    {children}

                </ContextProvider>

                <ToastContainer />

            </body>
        </html>
    )
}
