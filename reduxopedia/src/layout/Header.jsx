import logo from '../assets/react.svg'

function Header(){
    return(
        <div className="py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} width={35} height={35} verticalalign="top" className="m-2"/>
            <span className="h2 pt-4 m-2 text-white-50">ReduxOPedia</span>
        </div>
    );
}

export default Header