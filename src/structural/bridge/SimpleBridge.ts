interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing Audio on Windows Media Player");
  }
  public playVideo(): void {
    console.log("Playing Video on Windows Media Player");
  }
}

class MacMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing Audio on Mac Media Player");
  }
  public playVideo(): void {
    console.log("Playing Video on Mac Media Player");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected mediaPlayerType: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.mediaPlayerType.playVideo();
  }
}

class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.mediaPlayerType.playAudio();
  }
}

export {AudioPlayer,VideoPlayer,WindowsMediaPlayer,MacMediaPlayer}