import React from 'react';
import Relay from 'react-relay';

/** Comment **/
class Comment extends React.Component {
	render () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.comment.author}
				</h2>
				<div>{this.props.comment.text}</div>
			</div>
		);
	}
}

export default Relay.createContainer(Comment, {
	fragments: {
		//viewer: () => Relay.QL`fragment on Viewer { allComments { text, author } }`,
		comment: () => Relay.QL`fragment on Comment { id, text, author }`
	}
});
