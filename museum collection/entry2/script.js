var poemText = `Piercings

There was a piercing shop near home,
My school on top of, an exhausting hill,
The hill I’ve grown to hate every weekend,
But I realized it would be another memory, I held onto.

The same way I hold onto that slightly, warm handle,
Of the piercing shop, that smelled like,
A routine checkup or a cotton swab thoroughly soaked,
In pure, concentrated, burning, alcohol.

First it was my helix,
I was the first to go out of my two closest friends,
At the time, beaming in that adult-like (even while I was still in high school) energy,
I wanted to grow up so badly, I wanted it to pass.

Second, my septum,
I had started college and felt like such a mess,
Like old worn out tools with wood splinters and, rusted metal,
I thought, maybe this could, make me feel a little, better.

It never erased the, pulsing,
Alive deadlines clawing at my skin, a painful itch I couldn’t eliminate,
In the silence I carried in the back of that same classroom,
Maybe, I could break that silence if I worked hard enough (though how much is enough?).

Third, my lobes,
Finding myself in the middle of Iowa, waking up to snow covered fields,
I was the first to go, the same way I had yesterday, or rather, two years ago,
It was when the needle went in that I realized it would be okay. Maybe.

The small pain came with me to Chicago (a four hour drive just to go see her perform),
As I wandered cold streets alongside my best friend, finally sitting,
In the warm, breathing, red, seats of the Auditorium Theatre,
And there was nobody (big and small), and everyone (all of them) all at once.

Fourth, my nostril,
And turns out, I wasn’t supposed to be pierced with a hoop,
Inconveniences, tiredness, ending up with a piece of metal stuck in my nose,
I pray (to who?) everyday that I don’t have to do an MRI again.

One day, I will be able to run and jump in the same way I used to,
Never again carry, the limp in my leg and the pain deep in my spines,
I can say (to my doctor), how I could run towards them and bolt towards rain,
And swallow all of the, aching, pain patches, to somewhere where I can never see.

(Maybe I should get a new piercing soon).`;


var rawStanzas = poemText.split(/\n\s*\n/);

$(document).ready(function() {
  var $poemContainer = $("#poem-container");

  rawStanzas.forEach((stanza, idx) => {
    var $stanzaDiv = $("<div class='stanza'></div>");


    var lines = stanza.split(/\n/);
    lines.forEach(line => {
      var $line = $("<p></p>").text(line);
      $stanzaDiv.append($line);
    });

    $poemContainer.append($stanzaDiv);


    setTimeout(() => {
      $stanzaDiv.css("opacity", 1);
    }, idx * 7000); 
  });
});



