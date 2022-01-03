import './FooterStyles.scss'
const Footer = () => {
    return(
        <footer className='footer'>
            <p>Copyright &copy; {new Date().getFullYear()} Legomania. All Rights Reserved.  Team Undefined - Kathy, Sarah, Shermeen, Polina, and Ernest</p>
        </footer>
    );
};

export default Footer;