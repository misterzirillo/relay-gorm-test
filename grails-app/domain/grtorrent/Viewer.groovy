package grtorrent

import io.cirill.relay.annotation.RelayField
import io.cirill.relay.annotation.RelayQuery
import io.cirill.relay.annotation.RelayType

/**
 * grtorrent
 * @author mcirillo
 */

@RelayType
class Viewer {

	@RelayField
	List<Comment> allComments

	@RelayQuery
	static Viewer viewer() {
		def ret = new Viewer()
		ret.allComments = Comment.allComments()
		return ret
	}

	static Viewer findById(String id) {
		return viewer()
	}

}
