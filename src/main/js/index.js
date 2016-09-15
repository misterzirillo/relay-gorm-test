/**
 * Created by mcirillo on 6/13/16.
 */
import CommentBox from './components/CommentBox';
import ReactDOM from 'react-dom';
import React from 'react';
import Relay from 'react-relay';
import CommentsRoute from './route';

ReactDOM.render(
    <Relay.Renderer
        Container={CommentBox}
        queryConfig={new CommentsRoute()}
        environment={Relay.Store}
        render={({done, error, props, retry, stale}) => {
            if (error) {
                return <div>Error</div>;
            } else if (props) {
                return <CommentBox {...props} />;
            } else {
                return <div>Loading</div>;
            }
        }}
    />,
    document.getElementById('content')
);
