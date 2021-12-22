import './FooterStyles.scss'
const Footer = () => {
    return(
        <footer className='footer'>
            <p>Copyright &copy; {new Date().getFullYear()} Legomania. All Rights Reserved. Developed By: Team Undefined</p>
        </footer>
    );
};

export default Footer;