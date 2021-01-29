class Ball {
	
	constructor()
	{
		this.audio = document.createElement("AUDIO");
		this.point = document.createElement("AUDIO");
		this.audio.src = "Sounds/bounce.wav"
		this.point.src = "Sounds/point.wav"
		this.width = 20;
		this.height = 20;
		this.start();		
	}
	
	collides(paddle)
	{
		if(this.x > paddle.x + paddle.width || paddle.x > this.x + this.width)
			return false;
		else if(this.y > paddle.y + paddle.height || paddle.y > this.y + this.height)
			return false
		else 
			return true;
	}
	
	update()
	{
		ctx.fillStyle = "white";
		
		if(this.collides(p1))
		{
			this.xVel *= -1.03
			this.x = p1.x + p1.width + 5;
			this.yVel = (this.yVel + Math.floor(Math.random() * -2 ));
			p1.audio.play();
		}
		
		else if(this.collides(p2))
		{
			this.xVel *= -1.03
			this.x = p2.x - this.width ;
			this.yVel = (this.yVel + Math.floor(Math.random() * -2 ));
			p2.audio.play();
		}
	
		
		if(gameState == "game")
		{
			this.y += this.yVel;
			this.x += this.xVel;
			
			if((this.y < 0 && this. yVel < 0) ||(this.y > canvas.height - this.height && this.yVel > 0))
			{
				this.yVel = (this.yVel + Math.floor(Math.random() * 2) - 1) * -1;
				this.audio.play();
			}
			
			
			if(this.x < 0)
			{
				p2.score++;
				this.stop();
				gameState = "serve";
				server = "p1";
				if(p2.score < 5)
					this.point.play();
			}
			
			if(this.x + this.width > canvas.width)
			{
				p1.score++;
				this.stop();
				gameState = "serve";
				server = "p2";
				if(p1.score < 5)
					this.point.play();
			}
		}
		
		else if (gameState == "serve")
		{
			if(server == "p1")
				ctx.fillText("Player 1 Serve", canvas.width / 2 - 245, canvas.height/4);
			else 
				ctx.fillText("Player 2 Serve", canvas.width / 2 - 245, canvas.height/4);
		}
		
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	
	randomSpeed(min)
	{
		let out = Math.floor((Math.random() * 2) + min);
		let num =   Math.random() < 0.5 ? -1 : 1;
		return out * num;
	}
	
	start()
	{
		this.yVel = this.randomSpeed(2);
		this.xVel = server == "p1" ? 5 : -5;
		this.x = canvas.width / 2 - 10;
		this.y = canvas.height / 2 - 10;
	}
	
	stop()
	{
		this.xVel = 0;
		this.yVel = 0;
		this.x = canvas.width / 2 - 10;
		this.y = canvas.height / 2 - 10;
	}
	
	
		
	
	
}