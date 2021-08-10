# Crushing Bugs Project

## Contributors
Edward Willems

## List of Bugs to be CRUSHED
  1. Only the correct piece should drop in to the matching zone.
  2. Pieces appear in the drop zone on reset or when choosing a new puzzle. "Reparented back to the drag zone?"
  3. Pieces stay small when they land in drop zones. Resize?
  4. Puzzle pieces don't change to match puzzle.

## Solution Path
  1. Use original drop function to solve bug 1.
    - if statement, if the box matches the piece, THEN allow it to stay. Otherwise, return again.
    - label dropzones to have same class/label as puzzle pieces. Then if/else statement will check both.
  2. Reset Puzzle Piece function to solve Bug 2.
    - return all pieces back to puzzle-pieces container. Return function like the drop event?
  3. Resize puzzle pieces in CSS
    - Resize in drop-zone image tag?
  4. Use imageflip function to change pieces with the background.
    - Use number array and change the number of the topleft/topright/etc image.
    - Change pieces to have their images as background-image, and change through style in Javascript.
    - dragImages.style.backgroundImage = `url(images/dd/${this.dataset.imagelocation} ${this.dataset.imagenumber}.jpg`);

## MIT LICENSE
Copyright 2021 EDWARD WILLEMS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
