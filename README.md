# JavaScript Music Player

This is a simple web-based music player application built using HTML, CSS, and JavaScript.

## Features

- Play and pause music.
- Skip forward and backward by 10 seconds.
- Progress bar to track and control playback.
- Responsive design to fit various screen sizes.
- Keyboard support for play/pause (Space), skip forward (Right Arrow), and skip backward (Left Arrow).

## Files

- `index.html`: The main HTML file that structures the music player layout.
- `style.css`: The CSS file that styles the music player.
- `script.js`: The JavaScript file that handles the music player logic.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/music-player.git
    ```
2. Navigate to the project directory:
    ```bash
    cd music-player
    ```

## Usage

Open the `index.html` file in your web browser to use the music player.

## File Descriptions

### index.html

This file contains the basic structure of the music player. It includes:
- An audio element to play the music.
- Control buttons for play/pause, skip forward, and skip backward.
- A progress bar to show and control the current playback time.

### style.css

This file styles the music player, making it visually appealing and responsive. Key styles include:
- Flexbox for centering the player.
- Button and progress bar styles to enhance the appearance and usability.

### script.js

This file includes the logic for handling button clicks, playing/pausing the music, skipping forward/backward, and updating the progress bar. Key functions include:
- `playPauseFunction()`: Toggles between play and pause.
- `tenSecondsBefore()`: Skips backward by 10 seconds.
- `tenSecondsAfter()`: Skips forward by 10 seconds.
- Event listeners to handle keyboard inputs and progress bar updates.

## Contributing

Feel free to fork this project, make improvements, and send a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
