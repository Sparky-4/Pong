class Paddle {
	
	constructor(player)
	{
		this.audio = document.createElement("AUDIO");
		this.score = 0;
		this.width = 20;
		this.height = 100;
		this.y = canvas.height / 2;
		this.speed = canvas.height / 100;
		
		if(player == "p1")
		{
			this.x = canvas.width / 15;
			this.scoreX = canvas.width / 4 - 33;
			this.player = "p1";
			this.audio.src = "Sounds/p1Sound.wav";
		}
		
		else 
		{
			this.x = canvas.width * 14/15;
			this.scoreX = canvas.width * 3/4;
			this.player = "p2";
			this.audio.src = "Sounds/p2Sound.wav";
		}
		
		this.isMovingUp = false;
		this.isMovingDown = false;
	}
	
	update()
	{		
		if(this.isMovingUp && this.y > 0)
			this.y -= this.speed;
		
		if(this.isMovingDown && this.y < canvas.height - this.height)
			this.y += this.speed;
		
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.width, this.height);
		
		ctx.font = "70px monospace";
		ctx.fillText(this.score, this.scoreX, canvas.height/2);

	}
	
}