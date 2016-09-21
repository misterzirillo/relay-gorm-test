package grtorrent

import io.cirill.relay.annotation.RelayField
import io.cirill.relay.annotation.RelayType

@RelayType
class Comment implements CommentRelay {

    static hasOne = [
            author: Viewer
    ]

	static constraints = {
		text blank:false
	}

    @RelayField
    String text

	@RelayField
	Viewer author

}
