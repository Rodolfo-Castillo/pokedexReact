import PokeList from '../components/pokeList';
import TopBar from '../components/topBar';
import BottomBar from '../components/bottomBar';

function Index() {

    return (
            <div style={{padding: "0",
  margin: "0"}}>
                <TopBar/>
                <PokeList/>
                <BottomBar/>
            </div>
    )
}

export default Index