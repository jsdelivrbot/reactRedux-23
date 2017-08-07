import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyCkXC9PJLcm_uzbLbyRTM1e-XmfddWKu2s";




class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            videos:[],
            selectedVideo:null
        };

        YTSearch({ key: API_KEY, term: 'surfboards' },  (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            }); //es6
            //this.setState({videos:data})
            console.log(videos);
        })
    }

    render(){
        return( 
            <div>
                {/* {this.state.videos} */}
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        )

    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
