import './FooterStyles.scss'
const Footer = () => {
    return(
        <footer className='footer'>
            <p>Copyright &copy; {new Date().getFullYear()} Legomania. All Rights Reserved.  Team Undefined - <a href="https://www.linkedin.com/in/kzbentley/">Kathryn</a>, <a href="https://www.linkedin.com/in/sarah-marston-270">Sarah</a>, <a href="https://www.linkedin.com/in/shermeenr">Shermeen</a>, <a href="https://www.linkedin.com/in/polina-g/">Polina</a>, and <a href="https://www.linkedin.com/in/ernestbizzell/">Ernest</a></p>
        </footer>
    );
};

export default Footer;