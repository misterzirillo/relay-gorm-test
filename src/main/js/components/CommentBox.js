import React from 'react';
import Relay from 'react-relay';
import AddCommentMutation from './AddCommentMutation';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

/** Comment Box **/
class CommentBox extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit = (comment) => {
		this.props.relay.commitUpdate(new AddCommentMutation({ ...comment, viewer: this.props.viewer }), {
			onSuccess: () => this.props.relay.forceFetch([])
		});
	};

    render () {
	    return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList viewer={this.props.viewer} />
                <CommentForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Relay.createContainer(CommentBox, {
	fragments: {
        viewer: () => Relay.QL`fragment on Viewer { ${CommentList.getFragment('viewer')}, ${AddCommentMutation.getFragment('viewer')} }`
	}
});
