
function Header({first , second , third , fourth}){
    return (
        <div>
            <ul>
                <li>
                  {first}
                </li>
                <li>
                    {second}
                </li>
                <li>
                    {third}
                </li>
                <li>
                    {fourth}
                </li>
            </ul>
        </div>
    );
}

export default Header