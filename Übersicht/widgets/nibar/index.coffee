command: ""
refreshFrequency: 30000 # ms

# Add more or less <li> tags with <br> tags at constant intervals
# for a grid system at whatever size you want.

render: (output) ->
  """
  <div class="container">
    <ul class="buttons">
      <li class="button" id="home"></li>
      <li class="button" id="work"></li>
      <li class="button" id="projects"></li>
    </ul>
  </div>
   <div class="container2">
    <ul class="buttons2">
      <li class="button2" id="mail"></li>
      <li class="button2" id="spotify"></li>
      <li class="button2" id="discord"></li>
      <li class="button2" id="chrome"></li>
      <li class="button2" id="notion"></li>
      <li class="button2" id="terminal"></li>
    </ul>
  </div>
  """

afterRender: (domEl) ->
  $(domEl).on 'click', '#projects', => @run "open /Users/pixel/projects"
  $(domEl).on 'click', '#work', => @run "open /Users/pixel/work"
  $(domEl).on 'click', '#home', => @run "open /Users/pixel/"

  $(domEl).on 'click', '#mail', => @run "open /Applications/Mailspring.app"
  $(domEl).on 'click', '#spotify', => @run "open /Applications/Spotify.app"
  $(domEl).on 'click', '#discord', => @run "open /Applications/Discord.app"
  $(domEl).on 'click', '#chrome', => @run "open '/Applications/Google Chrome.app'"
  $(domEl).on 'click', '#notion', => @run "open /Applications/Notion.app"
  $(domEl).on 'click', '#terminal', => @run "open /Applications/iTerm.app"

style: """

  padding: 0;
  margin: 0px;

  .container2 {
    position: fixed;
    left: 650px;  //Adjust this to place grid wherever you want.
    top: 853px;
    opacity:.0;
    userSelect: "none", 
  }

  .container {
    position: fixed;
    left: 353px;  //Adjust this to place grid wherever you want.
    top: -10px;
    opacity: .0;
    userSelect: "none", 

  }

  .buttons {
    padding:0;
    border-radius: 0px;
    transform: scale(1.1, .8); // Adjust this to resize the grid.
  }

  .buttons2 {
    padding: 0;
    border-radius: 0px;
    transform: scale(2.9, .8); // Adjust this to resize the grid.
  }

  .button {
    height: 1px;
    margin: 3px;
    padding: 10px;
    display: inline-block;
    border-radius: 0px;
  }

  .button2 {
    height: 1px;
    margin: 0px;
    padding: 10px;
    display: inline-block;
    border-radius: 0px;
    background-color: #35CD4B; // Dull Lime

  }

  /*
    Replace 5n with Xn for a grid of width X. Add more colors to adjust.
    If you want a pattern where each column is the same color, set X to
    width + 1 to adjust for the <br> tags.
  */

  .button:nth-child(n+1) {
    background-color: #FC635E; // Pastel Red
  }
  .button:nth-child(n+2) {
    background-color: #FDBE41; // Pastel Orange
  }
  .button:nth-child(n+3) {
    background-color: #35CD4B; // Dull Lime
  }
 
 

"""
