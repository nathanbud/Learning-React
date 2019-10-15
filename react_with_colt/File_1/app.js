
import Hello from './components/hello';
import Moods from './components/moods';

class App extends React.Component{
    render(){
        return(
        <div>
            <Hello />
            <Moods />
        </div>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));