import { Github, Link } from 'lucide-react';
import gersamLogo from '../assets/gersamLogo.svg';

function Footer(){
    return(<>
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
            <img src={gersamLogo}  width={32} height={32}/>
            <p>Copyright GerSamSRL © 2024 - ARCyber &lt;3</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a href='https://arcyber.ro/' target='_blank'><Link className="hover:text-primary"/></a>
            <a href='https://www.youtube.com/watch?v=JmSEC6hSBes' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:fill-primary hover:transition-all"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a href='https://github.com/arcybersec' target='_blank'><Github/></a>
        </nav>
    </footer>
    </>)
}

export default Footer;