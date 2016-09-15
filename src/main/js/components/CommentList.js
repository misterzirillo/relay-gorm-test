import React from 'react';
import Relay from 'react-relay';
import Comment from './Comment';

/** Comment List **/
class CommentList extends React.Component {
	render () {
		var commentNodes = this.props.viewer.allComments.map(function (comment, i) {
			return (
				<Comment key={i} comment={comment}/>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
}

export default Relay.createContainer(CommentList, {
	fragments: {
		viewer: () => Relay.QL`fragment on Viewer { allComments { ${Comment.getFragment('comment')} } }`,
	}
});