$(document).ready(function () {


  const titleText = "Tattoos";
  let titleIdx = 0;

  function typeTitle() {
    if (titleIdx < titleText.length) {
      $("#title").text(titleText.substring(0, titleIdx + 1));
      titleIdx++;
      setTimeout(typeTitle, 70);
    } else {
      $("#title").css("border-right", "none");
    }
  }

  typeTitle();


  const poems = [
`Tattoo 1 (Fort Smith, Arkansas, 72903):
I’ve been preparing myself mentally for a while for my first tattoo. I decided to get my first tattoo done by an apprentice since I liked their portfolio and they were cheaper (I worked two jobs during the summer but I had to do a major car repair that summer. Why does it feel like my car is always breaking down). My best friend came with me. The pain was okay, it felt familiar. But, it felt like I had control of it, and I was okay. It healed perfectly.

Even if it was a tattoo from one of my favorite shows (The Owl House), I felt like it stands on its own a lot.`,
    
`Tattoo 2 (Eureka Springs, Arkansas, 72632):
I was in Eureka for an event in the middle of the hot summer months. Although I wasn’t planning on getting a tattoo that day, I was in a room filled with different vendors and saw a booth for an artist that was doing a flash sale. My best friend and their brother were with me, with their brother getting a tattoo along with me. The pain was the same, familiar, kinda distinct. It was like a weird, childhood memory that I couldn’t remember fully until one very specific thing happened to me that suddenly makes me remember it vividly like a sleeper agent.

The colors of the rainbow on my wrist, symbolizes the part of myself that I finally was able to accept. I like to think the version of me that felt like I never would reach this point of acceptance could at least breathe a little easy.`,
    
`Tattoo 3 (Fort Smith, Arkansas, 72916):
My best friend and I had been planning to get matching tattoos for a while that I had designed for us. Two little boba cats, the colors we have matching the color of the boba flavor we love the most. Mine is purple, to represent their favorite flavor being taro, and theirs being orange, since mine was mango. Watching the design be tattooed on our skin forever felt very odd. Like, a kind of odd that made me feel a little shy to look at the artist carefully work on the area above our knees.

Now, whenever my best friend and I stand beside each other, in the few times we get to see each other whenever we’re in the same state, our little boba cats are reuniting, too. It makes me feel like no matter where we are or what we’re doing, we will always be connected through this tattoo. I’d like to also think we would reincarinate as cats and that we would be best friends as cats, too.`
  ];



  function typeWriterPoem(elementId, text, speed = 15) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        $(elementId).text(text.substring(0, i + 1));
        i++;
        setTimeout(typing, speed);
      } else {
        $(elementId).css("border-right", "none");
      }
    }
    typing();
  }

  
  typeWriterPoem("#poem1", poems[0], 18);
  typeWriterPoem("#poem2", poems[1], 18);
  typeWriterPoem("#poem3", poems[2], 18);


 
  $(window).on("scroll", function () {
    let scrollPos = $(this).scrollTop();

    $("#poem1").css("transform", `translateY(${scrollPos * 0.15}px)`);
    $("#poem2").css("transform", `translateY(${scrollPos * 0.25}px)`);
    $("#poem3").css("transform", `translateY(${scrollPos * 0.18}px)`);
  });

});


const popupTexts = {
  poem1: "RED AND BLACK CHECKERED FLOORS, THE SMELL OF ALCOHOL, THE CORNER OF THE BUILDING",
  poem2: "THE BASEMENT, WOODEN FLOORS, VENDORS, ALL COLORS OF THE RAINBOW ON AND AROUND ME",
  poem3: "WALKING IN, THE LONG MIRROR, BURNING SKIN AS I WALKED FOR SOAP TO CLEAN MY TATTOO WITH"
};


$(".poem").on("click", function () {
  let id = $(this).attr("id");
  $("#modal-content").text(popupTexts[id]);
  $("#modal-overlay").addClass("active");
});


$("#modal-close, #modal-overlay").on("click", function (e) {
  if (e.target.id === "modal-box") return;
  $("#modal-overlay").removeClass("active");
});

