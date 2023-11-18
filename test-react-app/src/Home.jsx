import axios from 'axios';
import { VIEWS, } from './enum.js';
import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // view: VIEWS.HOMEPAGE, // can change state view value based on button click
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const choices = {
            withCredentials: true,
            type: 'public',
            q: 'chicken',
            app_id: '8877871d',
            app_key: 'dbb36c61f1e943527747f94213397705'
        };
        axios.post('/api/recipes/v2', choices)
            .then(response => console.log(response.data));
    }

    render() {
        const { articleId, view } = this.state;
        return (

            <div className="card text-center m-3">
            <h5 className="card-header">Simple POST Request</h5>
            <div className="card-body">
                Returned Id: {articleId}
            </div>
        </div>
            /*cool nav bar that sets view on click*/


            // (view === VIEWS.HOMEPAGE ? (
            //     <div className="card text-center m-3">
            //         <button>Cool Button</button>
            //         <h5 className="card-header">Simple POST Request</h5>
            //         <div className="card-body">
            //             Returned Id: {articleId}
            //         </div>
            //     </div>
            // ) : null)

        );
}
}

export default Home; 