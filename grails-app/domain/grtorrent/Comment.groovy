package grtorrent

import io.cirill.relay.annotation.RelayField
import io.cirill.relay.annotation.RelayType

@RelayType
class Comment implements CommentRelay {

    @RelayField
    String text;

    @RelayField
    String author;

    static constraints = {
        text blank:false
        author blank:false
    }

}
