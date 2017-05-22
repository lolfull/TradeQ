function User() {
	this.username = "Alice";
    this.password = "123";
	this.portfolio = new Portfolio();

	
	this.setUsername=function(uName){
		if(uName != null){
			this.username = uName;
			return true;
		}
		else{
			return false;
		}
	}
	
	this.setPassword=function(pass){
		if(pass != null){
			this.password = pass;
			return true;
		}
		else{
			return false;
		}
	}
	
	this.test=function(){
		return "Test Output.";
	}
}