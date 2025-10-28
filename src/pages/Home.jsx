import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import TwoPaneContaier from '../views/SelfTwoSectionLayout/TwoPaneContainer';

export default function Home() {

    return (
        <div>
            Theme
            <Helmet>
                <title>Sabari S // Personal Portfolio</title>
                <meta name="description" content="Welcome to Sabari S's personal portfolio website. Explore projects, skills, and get in touch!" />
            </Helmet>
            <Nav />
            <TwoPaneContaier />
        </div>
    )
}