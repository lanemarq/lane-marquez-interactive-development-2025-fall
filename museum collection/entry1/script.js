(function(){
  const paragraphs = [
`My hair was the length of,
Long days of going to school,
Days where I wonder really,
What exactly I, really was.`,

`When my mama took me to go,
Cut my hair at the salon, it was like an odd,
Unfamiliar weight was off my body,
It was then that I realized.`,

`My hair barely changed, shifted, turned,
The same sideswept bangs, the same,
Subtle waves, like my mama’s own,
I felt that fear of change all at once.`,

`I wanted more than to be dictated by stupid fears,
And I watch every strand fall on the floor, coldly,
Underwhelming, like clouded skies in the winter,
And it was then when I felt that warmth.`,

`Warmth, like the kind I’d get on early mornings,
After dreams, of what I really wanted in,
The deepest, closed, parts of my, alive body,
It was the flicker of the match that kept me warm.`
  ];

  const container = document.getElementById('poemContainer');
  const paraWidth = 380;
  const paraHeight = 200;

 
  const title = document.createElement('div');
  title.className = 'title-block poem-block';
  title.textContent = "Cutting my Hair";
  container.appendChild(title);

  function getTitleCenter(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centerX = (width-500)/2;
    const centerY = (height-100)/2;
    title.style.left = centerX+'px';
    title.style.top = centerY+'px';
    return {x:centerX+250, y:centerY+50};
  }

  let titleCenter = getTitleCenter();
  setTimeout(()=>{title.style.opacity=1; title.style.transform='translateY(0) scale(1)';},500);

  const paraBlocks = [];

  function positionParagraphs(){
    const num = paragraphs.length;
    const minRadius = 180;
    const maxRadius = Math.min(window.innerWidth, window.innerHeight)*0.35;
    const radiusStep = (maxRadius-minRadius)/(num-1);

    paragraphs.forEach((text,i)=>{
      let para;
      if(paraBlocks[i]) para = paraBlocks[i];
      else {
        para = document.createElement('div');
        para.className = 'poem-block';
        para.textContent = text;
        container.appendChild(para);
        paraBlocks.push(para);
      }

      const radius = minRadius + i*radiusStep;
      const angle = i*(2*Math.PI/num) - Math.PI/2;
      let x = titleCenter.x + radius*Math.cos(angle) - paraWidth/2;
      let y = titleCenter.y + radius*Math.sin(angle) - paraHeight/2;

    
      x = Math.max(0, Math.min(x, window.innerWidth - paraWidth));
      y = Math.max(0, Math.min(y, window.innerHeight - paraHeight));

      para.style.left = x+'px';
      para.style.top = y+'px';
      para.style.opacity = 0;
      para.style.transform = 'translateY(30px) scale(0.95)';

      setTimeout(()=>{
        para.style.opacity = 1;
        para.style.transform = 'translateY(0) scale(1)';
      }, 2000 + i*2000);
    });
  }

  positionParagraphs();
  window.addEventListener('resize', ()=>{titleCenter=getTitleCenter(); positionParagraphs();});

 
  const audio = new Audio('');
  audio.loop = true; audio.volume=0;
  audio.play().then(()=>{
    const fade=setInterval(()=>{
      if(audio.volume<0.5) audio.volume+=0.01;
      else clearInterval(fade);
    },100);
  }).catch(()=>{});

})();






