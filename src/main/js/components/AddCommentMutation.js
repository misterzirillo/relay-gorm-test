import Relay from 'react-relay';

export default class AddCommentMutation extends Relay.Mutation {

	getMutation() {
		return Relay.QL`mutation { addComment }`;
	}

	getVariables() {
		return { author: this.props.author, text: this.props.text }
	}

	getConfigs() {
		return []; //todo
	}

	getFatQuery() {
		return  Relay.QL`fragment on Viewer { allComments }`;
	}

	static fragments = {
		viewer: () => Relay.QL`fragment on Viewer { id, allComments }`
	};
}