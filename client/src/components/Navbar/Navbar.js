// import './NavbarStyles.js';
import { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

const Navbar = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        // document.title = capitalizeFirstLetter(currentCategory.name);
        document.title = currentCategory.name;
    }, [currentCategory]);
    return (
        <div class="navbar">
            <div class="navbar-title">
                <h1>Gamma</h1>
            </div>
            <div class="navbar-list">
                <nav>
                    <ul className="flex-row">
                        {/* <li className="mx-2">
                            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
                        </li> */}
                        {categories.map((category) => (
                            <li className={`mx-1 ${
                                currentCategory.name === category.name && !contactSelected && `navActive`
                                }`} key={category.name}>
                                <span onClick={() => { 
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                    }}>
                                    {category.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;