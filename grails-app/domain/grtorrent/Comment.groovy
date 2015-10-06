package grtorrent

import grails.rest.Resource

@Resource(uri='/comments', formats=['json', 'xml'])
class Comment {

    String text;
    String author;

    static constraints = {
        text blank:false
        author blank:false
    }
}
