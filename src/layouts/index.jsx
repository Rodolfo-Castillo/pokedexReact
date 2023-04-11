import Header from './header';
import Footer from './footer';
import "../styles/Layout.css"

const Layout = ({ children }) => {
    return(
        <div className='App'>
            <Header/>
            {children}
        <Footer/>
        </div>
    );
    
}
export default Layout;