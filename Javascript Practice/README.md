# Paint App<br/>
This app allows the user to paint on the canvas using the mouse.

**How to Use**<br/>
Place the mouse over the canvas and click to start a line<br/>
Release to stop. 
Select the size and color using the dropdown menus.

**Display**<br/>
The display beneath the canvas shows the mouse's position.<br/>
The position within the canvas is calculated using event.clientX/Y, and the canvas's position from the beginning of it's container, whose start is positioned at the beginning of the document.<br/>

*The mouse's relative position is important for placing paint strokes at the current mouse position.*<br/><br/>
***Container Position*** shows the mouse's pixel position within the div container that houses the canvas.<br/>
***Relative Position*** shows the mouse's pixel position within the canvas.<br/>
