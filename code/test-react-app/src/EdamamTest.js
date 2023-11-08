import React from 'react';
import axios from 'axios';
 //"proxy": "https://api.edamam.com"
class PostRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        const choices = { withCredentials: true,
                            type: 'public',
                            q: 'chicken',
                            app_id: '8877871d',
                            app_key: 'dbb36c61f1e943527747f94213397705'};
        axios.post('/api/recipes/v2', choices)
            .then(response => console.log(response.data));
    }

    render() {
        const { articleId } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {articleId}
                </div>
            </div>
        );
    }
}

export default PostRequest; 