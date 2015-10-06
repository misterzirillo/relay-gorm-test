import grtorrent.Comment

class BootStrap {

    def init = { servletContext ->
        new Comment (author: 'Master shake',
                text: 'I have the chin of a god!').save()

    }
    def destroy = {
    }
}
