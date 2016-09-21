import grtorrent.Comment
import grtorrent.Viewer

class BootStrap {

    def init = { servletContext ->
	    def v = new Viewer(name: 'You')
	    def e = new Comment(text: 'First!', author: v)
	    v.comments = [e]
	    [v,e]*.save()
    }
    def destroy = {
    }
}
