const NavigationLink = ({handleClick, href, text}) => {
    return (
       <li onclick = {handleClick} className = 'navigation--link'>
        <a href={href}>{text}</a>
        </li>   
    )
}

export default NavigationLink

