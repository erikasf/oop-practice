class Song(title, length, album, artist, track){
    this.title = title
    this.length = length
    this.album  = album
    this.artist = artist
    this. track = track
        play: function(){
        //when the person presses the play button it plays
         }
         pause: function(){
            //when the person presses the pause button it stops the song at that point and will be able to start
             from there when they press pause again.
         }

}

class Album(title, songCount, artist){
    this.title = title
    this.artist = artist
    this.songCount = songCount
}
class Artist(name, bandMembers, genre){
    this.name = name
    this.bandMembers= bandMembers
    this.genre = genre
    }
Class Playlist(name, songs){
    this.name = name
    this.songs = songs
    addSong: function(){
        take songs from wherever we have them stored and add push them onto a list
    }
    removeSong: function(){
        take songs that are located on our list and remove them
        by clicking on the corresponding song.
    }

}
