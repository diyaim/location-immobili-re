import Header from "./components/header";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <Header/>
            
      <main>
        <Outlet /> {}
      </main>
            <footer>Footer </footer>

        </div>
    )
}

export default Layout