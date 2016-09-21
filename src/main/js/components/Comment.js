import React from 'react';
import Relay from 'react-relay';

/** Comment **/
class Comment extends React.Component {
	render () {
		return (
			<div className="comment">
				<h3 className="commentAuthor">
					{this.props.comment.author.name}
				</h3>
				<blockquote>{this.props.comment.text}</blockquote>
			</div>
		);
	}
}

export default Relay.createContainer(Comment, {
	fragments: {
		comment: () => Relay.QL`fragment on Comment { id, text, author { name } }`
	}
});
