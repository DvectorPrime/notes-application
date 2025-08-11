import { useEffect } from "react"
import { useAppData } from "../../context/CurrentUserContext"

function ToggleTheme(){

    const {theme, setTheme} = useAppData()

    function toggleTheme(){
        setTheme(prev => prev === "light" ? "dark" : "light")
    }
    
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    const toggleThumbStyle = {
        marginLeft: theme === "light" ? "0px" : window.innerWidth > 600 ? "29px" : "12px",
        backgroundColor: "#F59E0B"
    }

    const toggleBarStyle = {
        border: "3px solid #F59E0B"
    }


    return (
        <div className="theme">
            <p className="light">Light</p>
            <button className="toggle-bar" style={toggleBarStyle} onClick={toggleTheme}>
                <div className="toggle-thumb" id="toggle-thumb" style={toggleThumbStyle}></div>
            </button>
            <p className="dark">Dark</p>
        </div>
    )
}

export default ToggleTheme