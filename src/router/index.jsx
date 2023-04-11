import Routing from '../configs/routing'
import pokedex from './pokedex';

const combineRoutes = [
    ...pokedex
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes